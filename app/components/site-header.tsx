import Image from "next/image";
import { navigation, whatsappUrl } from "../site-content";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-evenly max-[767px]:flex-col">
      <a
        className="flex w-1/4 items-center justify-center bg-brand-blue p-2.5 max-[767px]:w-full"
        href="#inicio"
        aria-label="Vitória – Areia e Pedra, início"
      >
        <Image
          src="/images/logotipo.png"
          alt="Vitória – Comércio de Areia e Pedra"
          width={1755}
          height={473}
          className="h-auto w-[300px] max-[767px]:w-[249px]"
          sizes="(max-width: 767px) 249px, 300px"
          preload
        />
      </a>
      <nav
        className="flex w-1/2 items-center justify-center p-2.5 max-[1366px]:w-[90%] max-[1200px]:w-[80%] max-[1024px]:w-[60%] max-[880px]:w-3/4 max-[767px]:w-full max-[767px]:p-0"
        aria-label="Menu principal"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="min-[768px]:mx-[5px] px-5 py-[13px] text-lg leading-5 font-bold text-brand-blue hover:shadow-[inset_0_-3px_#ffc300] max-[1366px]:text-[23px] max-[1024px]:px-3 max-[1024px]:text-sm max-[880px]:px-2 max-[880px]:text-base max-[767px]:-mx-[5px] max-[767px]:px-5 max-[767px]:text-[10px] max-[767px]:leading-[10px] max-[359px]:px-3"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="w-1/4 p-2.5 max-[1366px]:w-1/5 max-[767px]:flex max-[767px]:w-[81%] max-[767px]:justify-center">
        <a
          className="inline-block rounded-lg border border-brand-yellow bg-brand-yellow px-6 py-3 text-center leading-none font-bold text-brand-blue transition-colors hover:bg-[#eeb600] focus-visible:outline-brand-blue max-[359px]:max-w-full max-[359px]:text-xl w-2/5 text-lg max-[1366px]:w-full max-[1024px]:text-base max-[880px]:p-2 max-[767px]:w-auto"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          SAIBA MAIS
        </a>
      </div>
    </header>
  );
}
