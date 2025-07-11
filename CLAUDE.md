# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `pnpm i` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm preview` - Preview built application

### Code Quality

- `pnpm check` - Run TypeScript and Svelte type checking
- `pnpm check:watch` - Run type checking in watch mode
- `pnpm lint` - Run Prettier and ESLint checks
- `pnpm format` - Format code with Prettier

## Architecture

This is a SvelteKit portfolio site with custom scroll navigation and multiple content sections.

### Key Features

- **Custom Scroll Navigation**: Home page uses custom wheel/touch scroll handling with progress tracking instead of native scrolling
- **Named Layouts**: Uses SvelteKit's named layout system (`@home`, `@content`) for different page structures
- **Section-Based Home**: Home page is composed of dynamically rendered sections (Me, Developer, Motion, Artist, Contact)
- **API Routes**: Uses SvelteKit endpoints for data fetching (e.g., `/art` route fetches from Imgur API)

### File Structure

- `/src/routes/` - SvelteKit routes with named layouts (`@home`, `@content`)
- `/src/components/sections/` - Home page section components
- `/src/components/` - Reusable UI components
- `/src/utils/` - Utility functions for scroll handling, color manipulation, etc.
- `/static/` - Static assets (images, videos)

### Important Implementation Details

- Home page disables native scrolling and implements custom scroll with progress tracking
- Uses path aliases: `components/`, `utils/`, `icons/` resolve to respective src directories
- Imgur integration requires `VITE_IMGUR_CLIENT_ID` environment variable
- Vercel adapter configured for deployment

### Layout System

- `__layout-home.svelte` - Layout for home page with custom scroll
- `__layout-content.svelte` - Layout for content pages with normal scrolling
- `__layout@content.svelte` - Named layout variant for content pages
