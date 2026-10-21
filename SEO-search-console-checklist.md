# Lista de verificación — Google Search Console (La Princesa CTA)

> Objetivo: registrar el estado real de indexación de las 12 URLs del sitio antes
> de pedir nada. **Ninguna fila debe marcarse como "Indexada" sin haberlo visto
> en Search Console.**
>
> Cómo verificar cada URL: **GSC → Inspección de URLs** (arriba, pegar la URL
> completa) → panel derecho "Indexación de páginas". De ahí salen:
> estado, motivo (si no está indexada), canonical elegido por Google y último
> rastreo. Usar también **Indexación → Páginas** para el panorama general.
>
> Regla: primero revisar el estado; solicitar indexación **solo** para las que
> estén "No indexada" o "Detectada, actualmente sin indexar" y cuya causa ya esté
> resuelta. No pedir indexación en bloque para las 12.

Fecha de revisión: __________
Responsable: __________

## Leyenda de estado
- `Sin verificar` — todavía no se abrió en GSC.
- `Indexada` — figura indexada.
- `No indexada` — figura como no indexada (registrar motivo).
- `Detectada, sin indexar` — descubierta pero aún no indexada.

---

## URLs a verificar

### 1. https://www.laprincesacta.com.ar/
- Estado de indexación: `Sin verificar`  (previamente informada como indexada; confirmar)
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 2. https://www.laprincesacta.com.ar/catalogo
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 3. https://www.laprincesacta.com.ar/desayunos-sorpresa-catamarca
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 4. https://www.laprincesacta.com.ar/ramos-de-golosinas-catamarca
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 5. https://www.laprincesacta.com.ar/dia-de-la-madre
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 6. https://www.laprincesacta.com.ar/enviar-regalo-a-catamarca
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 7. https://www.laprincesacta.com.ar/desayunos/caja-de-madera
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 8. https://www.laprincesacta.com.ar/desayunos/caja-de-carton
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 9. https://www.laprincesacta.com.ar/ramos/ramo-comun
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 10. https://www.laprincesacta.com.ar/ramos/ramo-con-oso
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 11. https://www.laprincesacta.com.ar/ramos/ramo-de-chocolates
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

### 12. https://www.laprincesacta.com.ar/ramos/ramo-futbolero
- Estado de indexación: `Sin verificar`
- Motivo si no está indexada: —
- Canonical de Google: —
- Último rastreo: —
- Acción recomendada: —

---

## Canonical esperado (referencia, para comparar con lo que elija Google)
| URL | Canonical esperado |
|---|---|
| / | https://www.laprincesacta.com.ar |
| /catalogo | https://www.laprincesacta.com.ar/catalogo |
| /desayunos-sorpresa-catamarca | https://www.laprincesacta.com.ar/desayunos-sorpresa-catamarca |
| /ramos-de-golosinas-catamarca | https://www.laprincesacta.com.ar/ramos-de-golosinas-catamarca |
| /dia-de-la-madre | https://www.laprincesacta.com.ar/dia-de-la-madre |
| /enviar-regalo-a-catamarca | https://www.laprincesacta.com.ar/enviar-regalo-a-catamarca |
| /desayunos/caja-de-madera | https://www.laprincesacta.com.ar/desayunos/caja-de-madera |
| /desayunos/caja-de-carton | https://www.laprincesacta.com.ar/desayunos/caja-de-carton |
| /ramos/ramo-comun | https://www.laprincesacta.com.ar/ramos/ramo-comun |
| /ramos/ramo-con-oso | https://www.laprincesacta.com.ar/ramos/ramo-con-oso |
| /ramos/ramo-de-chocolates | https://www.laprincesacta.com.ar/ramos/ramo-de-chocolates |
| /ramos/ramo-futbolero | https://www.laprincesacta.com.ar/ramos/ramo-futbolero |

> Si Google eligió un canonical distinto al esperado, anotarlo: es señal de
> duplicado o de enlaces/canonicals contradictorios.

## Checklist general (fuera de las 12 URLs)
- [ ] **Indexación → Sitemaps**: `sitemap.xml` enviado y leído; "Descubiertas" = 12, sin errores.
- [ ] **Indexación → Páginas**: revisar cuántas figuran "Indexadas" vs "No indexadas" y los motivos.
- [ ] **Mejoras**: confirmar que `Product`, `FAQPage` y `BreadcrumbList` no arrojan errores.
- [ ] **Rendimiento / Núcleo web**: revisar Core Web Vitals móviles cuando haya datos.
- [ ] **Estadísticas de enlaces**: revisar páginas descubiertas externamente.
- [ ] **Configuración → Dominio**: confirmar propiedad y dominio preferido (con `www`).

## Notas para no romper la indexación
- No solicitar indexación masiva: pedir solo las que estén sin indexar y con la causa resuelta.
- El envío de solicitud no garantiza indexación; es una sugerencia de rastreo prioritario.
- Si una URL queda "No indexada: alternativa con canonical correcto", es normal
  (Google eligió otra URL como canónica) y no requiere acción.
