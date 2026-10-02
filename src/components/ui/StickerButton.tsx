import React from 'react';
import { WhatsAppIcon } from '@/components/Icons';

type Variant = 'berry' | 'outline' | 'wa';

const variants: Record<Variant, string> = {
  berry: 'sticker',
  outline: 'sticker sticker-outline',
  wa: 'sticker sticker-wa',
};

/* Botón "sticker": relleno sólido con sombra dura desplazada.
   Se lee como una calcomanía serigrafiada, no como un botón glossy. */
export default function StickerButton({
  href,
  children,
  variant = 'berry',
  size = 'md',
  icon = 'whatsapp',
  className = '',
  wrap = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  icon?: 'whatsapp' | 'none';
  className?: string;
  wrap?: boolean;
}) {
  const sizes = {
    sm: 'px-4 py-2.5 text-[13px]',
    md: 'px-6 py-3.5 text-[15px]',
    lg: 'px-8 py-4 text-base sm:text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-[18px] h-[18px]',
    lg: 'w-5 h-5',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      /* wrap permite que un CTA largo baje a dos lineas en pantallas chicas;
         por defecto se mantiene en una linea para no romper la transicion. */
      className={`${variants[variant]} ${sizes[size]} shrink-0 ${wrap ? 'whitespace-normal text-center leading-snug' : 'whitespace-nowrap'} ${className}`}
    >
      {icon === 'whatsapp' && (
        <span className="shrink-0 transition-transform duration-200 ease-out group-hover:rotate-6">
          <WhatsAppIcon className={iconSizes[size]} />
        </span>
      )}
      <span>{children}</span>
    </a>
  );
}
