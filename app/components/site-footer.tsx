import Image from "next/image";
import { address, mapUrl, navigation, whatsappUrl } from "../site-content";
import { SocialIcon } from "./social-icon";

export function SiteFooter() {
  return (
    <footer className="flex items-start justify-center gap-12 bg-footer-gray py-12 max-[1025px]:flex-col max-[1025px]:items-center">
      <a
        className="flex w-[23%] justify-center p-2.5 max-[1367px]:w-[15%] max-[1025px]:w-[30%] max-[768px]:w-[60%]"
        href="#inicio"
        aria-label="Voltar ao início"
      >
        <Image
          src="/images/LOGO-RODAPE.png"
          alt="Vitória – Comércio de Areia e Pedra"
          width={384}
          height={298}
          className="h-auto w-full max-w-[300px]"
          sizes="(max-width: 767px) 60vw, (max-width: 1024px) 30vw, (max-width: 1366px) 15vw, 300px"
        />
      </a>
      <div className="w-[28.069%] p-2.5 max-[1367px]:w-[30%] max-[1025px]:w-full [&_iframe]:block [&_iframe]:h-[300px] [&_iframe]:w-full [&_iframe]:border-0">
        <iframe
          src={mapUrl}
          title="Localização da Vitória – Areia e Pedra em Araraquara"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex w-[18.364%] flex-col gap-2 p-2.5 font-normal max-[1367px]:w-1/4 max-[1025px]:w-[55%] max-[1025px]:text-center max-[881px]:w-full max-[768px]:gap-0 max-[768px]:px-4 max-[768px]:py-0">
        <h2 className="text-2xl leading-[1.3] font-bold max-[768px]:pb-4 max-[768px]:text-[18.24px]">
          Contato
        </h2>
        <address className="my-5 not-italic">
          <a
            href="https://maps.google.com/?q=R.+Sílvio+Segnini,+196,+Araraquara"
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        </address>
        <a
          className="flex items-center gap-[5px] text-base leading-[1.65] wrap-anywhere max-[1025px]:justify-center max-[768px]:text-[14.592px] [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-white"
          href="tel:+551633324050"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="m7 2 3 5-2 2c1 3 4 6 7 7l2-2 5 3-1 4c-1 3-8 0-13-5S0 4 3 3Z"
            />
          </svg>
          +55 16 3332-4050
        </a>
        <a
          className="flex items-center gap-[5px] text-base leading-[1.65] wrap-anywhere max-[1025px]:justify-center max-[768px]:text-[14.592px] [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-white"
          href="mailto:vitoria-transportes@hotmail.com"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m2 5 10 8L22 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          vitoria-transportes@hotmail.com
        </a>
        <div className="flex gap-[5px] pt-5 max-[1025px]:justify-center [&_a]:grid [&_a]:size-[50px] [&_a]:place-items-center [&_a]:text-white">
          <a
            href="https://www.facebook.com/vitoriaareiaepedra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <SocialIcon name="facebook" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <SocialIcon name="whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/vitoriaareiaepedra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <SocialIcon name="instagram" />
          </a>
        </div>
      </div>
      <nav
        className="flex w-[8%] flex-col p-2.5 text-center max-[1367px]:w-[15%] max-[1025px]:w-full max-[768px]:w-[85%]"
        aria-label="Menu do rodapé"
      >
        <h2 className="mb-2 text-2xl leading-[1.3] font-bold max-[768px]:text-[18.24px]">
          Menu
        </h2>
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="py-[13px] leading-5 font-normal hover:text-brand-blue"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
