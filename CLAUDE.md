# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

**Recently migrated from Svelte 3 + SvelteKit pre-v1 to Svelte 4 + SvelteKit 2**

- All Google Analytics tracking removed
- Modern SvelteKit file structure implemented
- TypeScript 5.8+ with latest tooling

## Commands

### Development

- `pnpm i` - Install dependencies
- `pnpm dev` - Start development server (Vite-based)
- `pnpm build` - Build for production
- `pnpm preview` - Preview built application

### Code Quality

- `pnpm check` - Run svelte-kit sync + TypeScript/Svelte type checking
- `pnpm check:watch` - Run type checking in watch mode
- `pnpm lint` - Run Prettier and ESLint checks
- `pnpm format` - Format code with Prettier

## Architecture

This is a modern SvelteKit 2 portfolio site with custom scroll navigation and layout groups.

### Tech Stack

- **Svelte**: 4.2.20
- **SvelteKit**: 2.22.5
- **TypeScript**: 5.8.3
- **Vite**: 5.4.19
- **Build**: Vercel adapter
- **Styling**: SCSS with custom variables

### Key Features

- **Custom Scroll Navigation**: Home page uses custom wheel/touch scroll handling with progress tracking instead of native scrolling
- **Layout Groups**: Uses SvelteKit's layout groups `(home)` and `(content)` for different page structures
- **Section-Based Home**: Home page is composed of dynamically rendered sections (Me, Developer, Motion, Artist, Contact)
- **Server-Side Data**: Uses modern `+page.server.ts` files for data fetching (Imgur API integration)
- **No Analytics**: All Google Analytics tracking removed

### File Structure (Post-Migration)

```
src/routes/
├── +error.svelte              # Global error page
├── (home)/                    # Home layout group
│   ├── +layout.svelte         # Custom scroll layout
│   └── +page.svelte           # Home page with sections
├── (content)/                 # Content layout group
│   ├── +layout.svelte         # Standard scrolling layout
│   ├── about/
│   │   ├── +page.svelte
│   │   └── +page.js           # Prerender config
│   ├── art/
│   │   ├── +page.svelte
│   │   ├── +page.server.ts    # Imgur API fetch
│   │   ├── [...id]/
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   └── _types/Image.ts
│   ├── contact/
│   ├── experience/
│   ├── motion/
│   └── projects/
├── src/components/            # Reusable UI components
├── src/components/sections/   # Home page section components
├── src/utils/                 # Utilities (scroll, color, crossfade, stores)
├── src/sass/                  # SCSS variables
└── static/                    # Static assets
```

### Important Implementation Details

- **Layout Groups**: `(home)` uses custom scroll, `(content)` uses normal scrolling
- **Path Aliases**: Configured in `svelte.config.js` - `components/`, `utils/`, `icons/`
- **SCSS Integration**: Uses `vitePreprocess` with automatic variable importing
- **Imgur API**: Requires `VITE_IMGUR_CLIENT_ID` environment variable
- **Type Safety**: Full TypeScript with generated `$types` imports
- **Modern Attributes**: Uses `data-sveltekit-noscroll` instead of old `sveltekit:noscroll`

### Migration Notes

- Converted from named layouts (`@home`, `@content`) to layout groups `(home)`, `(content)`
- Updated API endpoints from `export const get` to `export const load` pattern
- Fixed imports: `$app/env` → `$app/environment`
- Updated error handling to use SvelteKit 2's non-throwing `error()` function
- Moved prerender configs from components to `+page.js` files
- SCSS now uses `lang="scss"` instead of `type="scss"`

### Custom Scroll System

The home page implements a sophisticated custom scroll system:

- Disables native scrolling (`overflow: hidden`)
- Tracks wheel/touch events for navigation
- Progress-based section transitions
- Crossfade animations between sections
- Mobile-friendly touch handling

**Key Files:**

- `src/routes/(home)/+layout.svelte` - Scroll container
- `src/utils/stores.ts` - Scroll progress stores
- `src/components/HomeProgressbar.svelte` - Progress indicator
