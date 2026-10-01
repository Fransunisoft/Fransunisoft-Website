# Fransunisoft Website

Official website project for Fransunisoft, an AI venture and AI talent studio focused on building Africa's next generation of startups.

This project is built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Requirements

Use Node.js `20.19.0` or newer.

```bash
node -v
```

If your Node version is below `20.19.0`, upgrade Node before installing dependencies. Some packages in this project require that minimum version.

## Getting Started

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the site in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
app/
  globals.css      Global styles, Tailwind import, color tokens, and typography
  layout.tsx       Root HTML layout and metadata
  page.tsx         Home page
public/            Static assets
tailwind.config.ts Tailwind theme configuration
```

## Typography

The project uses:

- Fraunces for headings
- Manrope for body, paragraph, list, and general sans text

Font tokens are defined in `app/globals.css` and mapped into Tailwind in `tailwind.config.ts` as:

- `font-heading`
- `font-body`
- `font-sans`

## Notes

If TypeScript reports missing React JSX types, reinstall dependencies with a clean `node_modules` folder:

```powershell
Remove-Item -LiteralPath node_modules -Recurse -Force
npm ci
```

The current home page may still contain starter content from the initial Next.js scaffold. Update `app/page.tsx` as the site design is implemented.
