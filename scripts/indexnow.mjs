/* Avisa a IndexNow (Bing, Yandex y otros; Bing alimenta a ChatGPT y Copilot)
   qué páginas se publicaron o cambiaron. Google no usa IndexNow.

   Uso, DESPUÉS de que Vercel terminó de publicar:
     npm run indexnow                      -> todas las URL de los dos sitemaps
     npm run indexnow -- /navidad /catalogo -> solo esas páginas

   La clave es pública a propósito: tiene que estar en
   https://www.laprincesacta.com.ar/<clave>.txt (archivo en /public). */

const SITE = 'https://www.laprincesacta.com.ar';
const HOST = 'www.laprincesacta.com.ar';
const KEY = '85a1e382756b1f6010645762b1e95ba9';
const SITEMAPS = [`${SITE}/sitemap.xml`, `${SITE}/sitemap-pseo.xml`];

async function urlsFromSitemaps() {
  const urls = new Set();
  for (const sitemap of SITEMAPS) {
    const res = await fetch(sitemap);
    if (!res.ok) throw new Error(`No se pudo leer ${sitemap} (${res.status})`);
    const xml = await res.text();
    for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(loc.trim());
  }
  return [...urls];
}

function urlsFromArgs(args) {
  return args.map((arg) => (arg.startsWith('http') ? arg : `${SITE}${arg.startsWith('/') ? '' : '/'}${arg}`));
}

async function main() {
  const keyRes = await fetch(`${SITE}/${KEY}.txt`);
  if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
    throw new Error('La clave de IndexNow no está publicada en la web: hacé push y esperá el deploy.');
  }

  const args = process.argv.slice(2);
  const urlList = args.length > 0 ? urlsFromArgs(args) : await urlsFromSitemaps();
  if (urlList.some((u) => !u.startsWith(SITE))) throw new Error('Solo se pueden avisar URL de este sitio.');

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
  });

  /* 200 = recibido; 202 = recibido, la clave se valida después. */
  console.log(`IndexNow respondió ${res.status} ${res.statusText} para ${urlList.length} URL.`);
  if (res.status !== 200 && res.status !== 202) {
    console.log(await res.text());
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
