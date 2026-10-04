import Image from "next/image";
import { HeroSlideshow } from "./components/hero-slideshow";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import posts from "./blog-posts.json";
import { products, whatsappUrl } from "./site-content";

export default function Home() {
  return (
    <>
      <a
        className="fixed top-2 left-2 z-50 -translate-y-[150%] bg-brand-blue px-5 py-3 text-white focus:translate-y-0"
        href="#content"
      >
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="content">
        <section
          className="group relative isolate min-h-[69vh] bg-[#6b6b6b] pt-[120px] pl-[150px] before:absolute before:inset-0 before:-z-10 before:bg-[#020101] before:opacity-[.58] before:transition-opacity hover:before:opacity-70 max-[1366px]:pl-[60px] max-[1200px]:pt-[90px] max-[1024px]:pt-[100px] max-[767px]:min-h-[80vh] max-[767px]:p-0"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <HeroSlideshow />
          <div className="flex flex-col items-start gap-5 pb-10 max-[767px]:mx-auto max-[767px]:min-h-[80vh] max-[767px]:w-[85%] max-[767px]:justify-center max-[767px]:py-10">
            <h1
              id="hero-title"
              className="w-[29.622%] text-[56px] leading-none font-bold text-brand-yellow max-[1366px]:w-2/5 max-[1366px]:text-5xl max-[1366px]:leading-[1.2] max-[1200px]:w-1/2 max-[1200px]:text-[56px] max-[1200px]:leading-none max-[1024px]:text-5xl max-[1024px]:leading-[1.2] max-[880px]:text-4xl max-[767px]:w-4/5 max-[767px]:leading-none max-[359px]:w-full"
            >
              A base da sua construção começa aqui.
            </h1>
            <p className="w-[23.711%] text-lg leading-6 font-normal tracking-[.3px] text-company-gray max-[1366px]:w-[35%] max-[1366px]:leading-[1.2] max-[1200px]:w-1/2 max-[1200px]:text-xl max-[1024px]:text-lg max-[880px]:text-base max-[880px]:leading-[1.2rem] max-[767px]:w-[78%] max-[767px]:text-2xl max-[767px]:leading-[1.2] max-[767px]:tracking-[.2px]">
              Compromisso com a qualidade e pontualidade em todas as entregas.
            </p>
            <a
              className="inline-block rounded-lg border border-brand-yellow bg-brand-yellow px-6 py-3 text-center text-2xl leading-none font-bold text-brand-blue transition-colors hover:bg-[#eeb600] focus-visible:outline-brand-blue max-[359px]:max-w-full max-[359px]:text-xl w-[15%] max-[1366px]:w-[30%] max-[1200px]:w-[35%] max-[767px]:w-auto max-[767px]:px-5"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              SAIBA MAIS
            </a>
          </div>
        </section>
        <section
          className="flex flex-col items-center gap-5 bg-company-gray py-12 text-center max-[767px]:px-2"
          id="empresa"
          aria-labelledby="company-title"
        >
          <h2
            id="company-title"
            className="w-[57.773%] text-[50px] leading-[1.3] font-semibold text-brand-blue max-[1024px]:w-3/5 max-[880px]:w-[65%] max-[767px]:w-[93.921%] max-[767px]:text-[35px] max-[359px]:text-[30px]"
          >
            MAIS DE <strong className="font-bold">15 ANOS</strong> EM ARARAQUARA
          </h2>
          <p className="w-1/2 text-2xl leading-[31px] font-semibold max-[1366px]:leading-[1.2] max-[1024px]:w-[85%] max-[1024px]:text-base max-[880px]:w-[90%]">
            Há mais de 15 anos a Vitória – Areia e Pedra é a base das
            construções em Araraquara e região oferecendo materiais de qualidade
            para sua obra.
          </p>
        </section>
        <section
          className="products"
          id="produtos"
          aria-labelledby="products-title"
        >
          <h2
            className="text-center text-[45px] leading-[1.3] font-bold text-brand-blue px-2.5 py-[35px] max-[767px]:pb-2.5 max-[767px]:text-[26px] max-[767px]:leading-none"
            id="products-title"
          >
            NOSSOS PRODUTOS
          </h2>
          <div className="mx-auto my-5 grid w-[calc(75%-64px)] grid-cols-3 gap-10 max-[1025px]:w-[calc(100%-40px)] max-[768px]:hidden">
            {products.map((product) => (
              <article className="text-center" key={product.name}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Solicitar informações sobre ${product.name.toLowerCase()}`}
                >
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name.toLowerCase()}
                    width={483}
                    height={483}
                    className="mx-auto h-auto w-full max-w-[483px]"
                    sizes="(max-width: 1024px) 30vw, (max-width: 2124px) 22vw, 483px"
                  />
                </a>
                <h3 className="mt-5 text-[25px] leading-[1.3] font-bold text-brand-blue">
                  {product.name}
                </h3>
              </article>
            ))}
          </div>
          <div className="px-4 py-9 text-center">
            <a
              className="inline-block rounded-lg border border-brand-yellow bg-brand-yellow px-6 py-3 text-center text-2xl leading-none font-bold text-brand-blue transition-colors hover:bg-[#eeb600] focus-visible:outline-brand-blue max-[359px]:max-w-full max-[359px]:text-xl"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              FAÇA UM ORÇAMENTO
            </a>
          </div>
        </section>
        <section className="blog" id="blog" aria-labelledby="blog-title">
          <h2
            className="text-center text-[45px] leading-[1.3] font-bold text-brand-blue px-2.5 py-[30px] max-[767px]:leading-none"
            id="blog-title"
          >
            BLOG
          </h2>
          <div className="mx-auto grid w-[69%] grid-cols-3 gap-x-[67px] gap-y-5 pb-5 max-[1025px]:grid-cols-2 max-[768px]:w-[90%] max-[768px]:grid-cols-1">
            {posts.map((post) => (
              <article
                className="flex flex-col border border-transparent py-4 text-center"
                key={post.href}
              >
                <a
                  className="relative mb-5 block aspect-[5/4] overflow-hidden rounded-2xl max-[768px]:aspect-[2/1]"
                  href={post.href}
                  aria-label={`Ler ${post.title}`}
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 90vw, (max-width: 1024px) 33vw, 22vw"
                  />
                </a>
                <div className="flex flex-1 flex-col items-center">
                  <h3 className="w-full text-lg leading-[1.3] font-bold text-brand-blue">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mb-[23px] line-clamp-4 w-full text-sm leading-[21px] font-normal text-[#777]">
                    {post.excerpt}
                  </p>
                  <a
                    className="mt-auto inline-block rounded border border-brand-blue bg-brand-blue px-[1.2em] py-[.5em] text-[15px] leading-[1.65] font-bold tracking-[3.8px] text-white hover:bg-[#00174f]"
                    href={post.href}
                    aria-label={`Leia mais: ${post.title}`}
                  >
                    LEIA MAIS
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="flex min-h-[260px] flex-col items-center justify-center gap-2 bg-brand-blue px-2 py-6 text-center"
          id="contato"
          aria-labelledby="contact-title"
        >
          <p className="text-2xl leading-[1.3] font-normal tracking-[4.4px] text-white max-[767px]:text-[18.24px]">
            CONTATO
          </p>
          <h2
            id="contact-title"
            className="text-[60px] leading-[43px] font-bold text-white max-[767px]:text-[40px]"
          >
            Fale Conosco
          </h2>
          <p className="text-[17px] leading-[1.65] text-company-gray max-[767px]:leading-[1.2]">
            Entre em contato e solicite um orçamento.
          </p>
          <a
            className="inline-block rounded-lg border border-brand-yellow bg-brand-yellow px-6 py-3 text-center text-2xl leading-none font-bold text-brand-blue transition-colors hover:bg-[#eeb600] focus-visible:outline-brand-blue max-[359px]:max-w-full max-[359px]:text-xl"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            ENTRE EM CONTATO
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
