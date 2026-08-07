# Rancho Xeirin Landing

Site institucional do Rancho Xeirin, construído com Next.js, TypeScript, Tailwind CSS e App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- `next/font`
- Metadata API, `robots.txt`, `sitemap.xml` e JSON-LD

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Variáveis de Ambiente

Copie `.env.example` para `.env.local` no desenvolvimento ou configure a mesma variável na Vercel:

```bash
NEXT_PUBLIC_SITE_URL=
```

Use o domínio real de produção, com protocolo, quando existir. Sem essa variável, o projeto mantém comportamento seguro: `robots.txt` bloqueia indexação e não gera canonical/sitemap com domínio falso.

## Onde alterar conteúdo

- Conteúdo principal, galeria, comodidades, WhatsApp e dados pendentes: `src/content/landing.ts`
- SEO base e social metadata: `src/config/seo.ts`
- URL do site e caminhos públicos: `src/config/site.ts`
- Dados estruturados: `src/config/structured-data.ts`

## Assets

- Imagens otimizadas: `public/images`
- Ícones: `public/icons`
- Vídeos: `public/videos`

Os PNGs originais usados como fonte foram preservados localmente em `asset-backups/original-public` e não devem ser publicados.

## Deploy na Vercel

1. Crie o projeto na Vercel apontando para este repositório.
2. Configure `NEXT_PUBLIC_SITE_URL` com o domínio real de produção.
3. Use o comando padrão de build: `npm run build`.
4. Após associar o domínio, valide `/robots.txt`, `/sitemap.xml`, canonical, Open Graph e JSON-LD.

Não publique previews como produção indexável. Sem domínio real configurado, o site permanece com `Disallow: /`.
