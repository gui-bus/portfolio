# <p align="center"><img src="./public/logos/logo/black_logo.png" alt="Portfolio Logo" width="300" /></p>

<p align="center">
  <strong>Meu portfólio interativo, construído com as tecnologias mais modernas para apresentar minhas habilidades em engenharia de software e design.</strong>
</p>

<p align="center">
  <a href="https://guibus.dev/"><img src="https://img.shields.io/badge/Live_Portfolio-guibus.dev-orange?style=for-the-badge&logo=vercel" alt="Live Portfolio" /></a>
  <a href="https://github.com/guibus/portfolio"><img src="https://img.shields.io/badge/GitHub-Portfolio-blue?style=for-the-badge&logo=github" alt="GitHub Repo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next-intl-red?style=flat-square" alt="next-intl" />
  <img src="https://img.shields.io/badge/shadcn/ui-green?style=flat-square&logo=shadcnui" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Vitest-4.x-yellow?style=flat-square&logo=vitest" alt="Vitest" />
</p>

---

## 📖 Visão Geral

Este portfólio é uma demonstração interativa das minhas capacidades como engenheiro de software e designer, construído com uma stack moderna e focada em performance e experiência do usuário. O projeto utiliza o **Next.js 16 com App Router**, internacionalização robusta com **`next-intl`**, styling avançado com **Tailwind CSS v4** e componentes reutilizáveis do **shadcn/ui**.

### 🎯 Diferenciais Estratégicos
- **Internacionalização Completa:** Suporte para múltiplos idiomas (EN, PT, ES, DE, FR) para alcançar audiências globais.
- **Design System Consistente:** Construído com Tailwind CSS v4 e variáveis OKLCH para cores vibrantes e acessibilidade.
- **Performance Otimizada:** Aplicação otimizada para Core Web Vitals, com carregamento rápido e responsividade impecável.

---

## ✨ Funcionalidades Principais

### 🌍 Internacionalização (i18n)
- **Suporte Multilíngue:** Navegação intuitiva entre Inglês, Português, Espanhol, Alemão e Francês.
- **Sem Prefixo de Rota:** Configurado para uma experiência de URL limpa (ex: `/` para ambos EN e PT).
- **Gerenciamento Centralizado:** Arquivos de tradução em `messages/` e configuração em `src/i18n/`.

### 🎨 Estilização Moderna
- **Tailwind CSS v4:** Utilizando a sintaxe `@import "tailwindcss"` para um CSS mais limpo.
- **shadcn/ui:** Componentes de UI pré-construídos e personalizáveis para uma interface polida.
- **OKLCH Color Space:** Garantindo gradientes perfeitos e consistência de cores.

### 🚀 Performance & Otimização
- **Next.js 16 (App Router):** Aproveitando Server Components, Client Components e estratégias de otimização de imagem.
- **Otimização de Imagem:** Uso obrigatório do componente `next/image` para todas as imagens.
- **Testes Automatizados:** Cobertura com Vitest para garantir a integridade do código.

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Frontend:** React 19.2.3
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Internacionalização:** next-intl
- **Icons:** @phosphor-icons/react
- **Animações:** Framer Motion, GSAP
- **Testes:** Vitest, Testing Library
- **Gerenciador de Pacotes:** pnpm
- **Editor:** VS Code com ESLint e Prettier configurados

---

## 🏗️ Estrutura do Projeto

```text
├── public/               # Assets estáticos (imagens, fontes)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── [locale]/     # Roteamento por locale
│   │   ├── globals.css   # Configurações globais de CSS e Tailwind
│   │   └── ...
│   ├── components/       # Componentes reutilizáveis (UI, Sections, Common)
│   ├── hooks/            # Custom Hooks
│   ├── lib/              # Camada de lógica de negócio e utilitários
│   └── i18n/             # Configuração e handlers de internacionalização
├── messages/             # Arquivos de tradução (.json)
├── tests/                # Testes unitários e de integração
├── .commitlintrc.json    # Configuração do Commitlint
├── .gitignore            # Arquivos ignorados pelo Git
├── components.json       # Configuração do shadcn/ui
├── next.config.ts        # Configurações do Next.js
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configurações do TypeScript
└── ...                   # Outros arquivos de configuração
```

---

## 🚀 Como Executar

### Desenvolvimento
```bash
pnpm dev
```

### Build para Produção
```bash
pnpm build
```

### Linting e Formatação
```bash
pnpm lint
```
### Preparar Hooks do Git
```bash
pnpm prepare
```

---

## 🧪 Qualidade e Testes

A qualidade do código é garantida por:
- **ESLint e Prettier:** Configurados para manter um padrão de código consistente.
- **Vitest:** Para testes unitários e de integração.
- **Husky & lint-staged:** Hooks de Git que rodam linters e testes em arquivos modificados antes do commit.

Para rodar os testes:
```bash
pnpm test
```
