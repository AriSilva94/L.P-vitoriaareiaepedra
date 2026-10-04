# Vitória – Areia e Pedra

Landing page migrada do WordPress para Next.js 16, React 19 e Tailwind CSS 4.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Conteúdo e layout

- `app/page.tsx`: seções da landing page, com classes Tailwind.
- `app/components/`: cabeçalho, rodapé, ícones e slideshow.
- `app/site-content.ts`: navegação, produtos, WhatsApp e localização.
- `app/blog-posts.json`: conteúdos dos cartões e links dos artigos.
- `app/globals.css`: importação do Tailwind, tokens de cor e estilos básicos.
- `public/images/` e `public/fonts/`: imagens e Montserrat locais.

Referência visual: https://vitoriaareiaepedra.com.br/, consultada em 04/10/2026. O layout específico vem do Elementor; `docs/theme/astra` contém o tema base de referência e está excluído do lint.

Os artigos continuam apontando para o site original. O mapa usa Google Maps, e os botões de orçamento abrem o WhatsApp. Assim como na referência, a grade de produtos fica oculta em telas de até 767px. O banner usa seis fotos locais, troca a cada cinco segundos e oferece pausa; a preferência por movimento reduzido desativa a rotação.
