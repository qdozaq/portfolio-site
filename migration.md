# SvelteKit v1 & Svelte v3 → Latest Migration Guide

## Current State

### Package Versions

- **Svelte**: v3.47.0
- **SvelteKit**: "next" (pre-v1.0, likely v1.0.0-next)
- **TypeScript**: v4.4.3
- **Node.js**: Requires update (current minimum for SvelteKit 2 is 18.13)
- **Build Tools**: Vite (bundled with SvelteKit)
- **Adapter**: @sveltejs/adapter-vercel (next)

### Project Structure

```
src/routes/
├── __error.svelte
├── __layout-content.svelte
├── __layout-home.svelte
├── __layout@content.svelte
├── about.svelte
├── art/
│   ├── [...id]@content.svelte
│   ├── [...id]@content.ts
│   └── index@content.svelte
│   └── index@content.ts
├── contact.svelte
├── experience.svelte
├── index@home.svelte
└── motion/
    └── index@content.svelte
```

## Migration Path

### Phase 1: SvelteKit "next" → SvelteKit v1.x (latest)

1. Update to latest SvelteKit 1.x
2. Update to Svelte 4
3. Fix breaking changes

### Phase 2: SvelteKit v1.x → SvelteKit v2

1. Run automated migration
2. Fix remaining issues

### Phase 3: Svelte 4 → Svelte 5 (Optional)

1. Run Svelte 5 migration
2. Convert to runes (optional)

## Detailed Migration Steps

### 1. File Structure Migration

#### Layout System

**Current Named Layouts:**

- `__layout-home.svelte` → `src/routes/(home)/+layout.svelte`
- `__layout-content.svelte` → `src/routes/(content)/+layout.svelte`
- Remove `__layout@content.svelte` (no longer needed with layout groups)

#### Route Files

- `index@home.svelte` → `src/routes/(home)/+page.svelte`
- `about.svelte` → `src/routes/(content)/about/+page.svelte`
- `contact.svelte` → `src/routes/(content)/contact/+page.svelte`
- `experience.svelte` → `src/routes/(content)/experience/+page.svelte`
- `art/index@content.svelte` → `src/routes/(content)/art/+page.svelte`
- `art/[...id]@content.svelte` → `src/routes/(content)/art/[...id]/+page.svelte`
- `motion/index@content.svelte` → `src/routes/(content)/motion/+page.svelte`

#### API Endpoints

- `art/index@content.ts` → `src/routes/(content)/art/+page.server.ts`
- `art/[...id]@content.ts` → `src/routes/(content)/art/[...id]/+page.server.ts`

#### Error Page

- `__error.svelte` → `src/routes/+error.svelte`

### 2. Code Pattern Updates

#### Import Changes

```javascript
// Old
import { browser } from '$app/env';

// New
import { browser } from '$app/environment';
```

#### Load Function Pattern

```javascript
// Old (in .ts file)
export const get: RequestHandler = async ({ params, fetch }) => {
  // ...
  return {
    status: 200,
    body: { images }
  };
};

// New (in +page.server.ts)
export const load = async ({ params, fetch }) => {
  // ...
  return { images };
};
```

#### Error Handling

```javascript
// Old
import { error } from '@sveltejs/kit';
throw error(404, 'Not found');

// New (SvelteKit 2)
import { error } from '@sveltejs/kit';
error(404, 'Not found'); // No need to throw
```

#### Redirect Handling

```javascript
// Old
import { redirect } from '@sveltejs/kit';
throw redirect(302, '/new-location');

// New (SvelteKit 2)
import { redirect } from '@sveltejs/kit';
redirect(302, '/new-location'); // No need to throw
```

### 3. Configuration Updates

#### svelte.config.js

```javascript
// Update imports and structure for latest versions
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			components: './src/components',
			utils: './src/utils',
			icons: './src/icons'
		}
	}
};

export default config;
```

#### package.json Scripts

```json
{
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"lint": "prettier --check . && eslint .",
		"format": "prettier --write ."
	}
}
```

### 4. Dependencies Update

#### Remove/Replace

- `node-sass` → `sass`
- `@sveltejs/kit@next` → `@sveltejs/kit@^2.0.0`
- `svelte@~3.47.0` → `svelte@^4.0.0` (then optionally `svelte@^5.0.0`)
- `@sveltejs/adapter-vercel@next` → `@sveltejs/adapter-vercel@^5.0.0`

#### Update

- `typescript` → Latest version
- `eslint` and related → Latest versions
- `prettier` and `prettier-plugin-svelte` → Latest versions
- `svelte-check` → Latest version
- `svelte-preprocess` → Replace with `vitePreprocess`

### 5. Special Considerations

#### Custom Scroll System

The home page uses a complex custom scroll system with:

- Disabled native scrolling
- Progress tracking
- Touch/wheel event handling
- Section-based navigation

**Files to carefully review:**

- `src/utils/scroll.ts`
- `src/routes/(home)/+layout.svelte`
- Any components using scroll progress

#### Crossfade Transitions

- Used for page navigation animations
- Check compatibility with new routing system

#### Environment Variables

- Ensure `VITE_IMGUR_CLIENT_ID` remains accessible
- Update any `import.meta.env` usage if needed

#### TypeScript Configuration

- Update `tsconfig.json` for latest SvelteKit requirements
- Ensure path aliases work correctly

## Migration Checklist

### Pre-Migration

- [ ] Backup project / ensure git is clean
- [ ] Update Node.js to 18.13 or later
- [ ] Review CLAUDE.md for any custom requirements

### Phase 1: Update to SvelteKit 1.x

- [ ] Update dependencies in package.json
- [ ] Run `npm install` (or `pnpm install`)
- [ ] Update svelte.config.js
- [ ] Restructure routes to new file naming
- [ ] Convert layouts to layout groups
- [ ] Update API endpoints
- [ ] Fix import paths (`$app/env` → `$app/environment`)
- [ ] Update load functions
- [ ] Test build and dev server
- [ ] Fix any TypeScript errors

### Phase 2: Update to SvelteKit 2

- [ ] Run `npx sv migrate sveltekit-2`
- [ ] Update error() and redirect() usage (remove throw)
- [ ] Add path to all cookie operations
- [ ] Check goto() usage (no external URLs)
- [ ] Update environment variable usage
- [ ] Test all functionality

### Phase 3: Svelte 5 Migration (Optional)

- [ ] Run `npx sv migrate svelte-5`
- [ ] Review runes migration guide
- [ ] Update component syntax if desired
- [ ] Test all components

### Post-Migration

- [ ] Run full test suite
- [ ] Check all page transitions
- [ ] Verify custom scroll system
- [ ] Test Imgur integration
- [ ] Check responsive design
- [ ] Verify Vercel deployment
- [ ] Update documentation

## Common Issues & Solutions

### Issue: Named layouts not working

**Solution**: Ensure layout groups are properly structured and routes are in correct folders

### Issue: API endpoints returning 404

**Solution**: Check that endpoints are converted to +server.ts with proper exports

### Issue: Custom scroll breaking

**Solution**: Review event listeners and ensure they're compatible with new SvelteKit lifecycle

### Issue: TypeScript path aliases not resolving

**Solution**: Update alias configuration in svelte.config.js

### Issue: Crossfade transitions not working

**Solution**: Ensure stores are properly imported and used in new layout structure

## Helpful Commands

```bash
# Check current versions
npm list svelte @sveltejs/kit

# Update to latest 1.x
npm install @sveltejs/kit@^1 svelte@^4

# Run SvelteKit 2 migration
npx sv migrate sveltekit-2

# Run Svelte 5 migration
npx sv migrate svelte-5

# Type checking
npm run check

# Format code after migration
npm run format
```

## Resources

- [SvelteKit v1 Docs](https://kit.svelte.dev/)
- [SvelteKit v2 Migration Guide](https://svelte.dev/docs/kit/migrating-to-sveltekit-2)
- [Svelte 4 Migration Guide](https://svelte.dev/docs/svelte/v4-migration-guide)
- [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [SvelteKit Changelog](https://github.com/sveltejs/kit/blob/main/packages/kit/CHANGELOG.md)
