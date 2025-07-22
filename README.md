# Draw Web App

## Setup & Configuration

This project is part of a monorepo and uses Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

### Steps Completed

1. **Initialized Next.js app**  
   - Project structure set up under `apps/web`.

2. **Configured TypeScript**  
   - Extended shared config from `@repo/typescript-config/nextjs.json`.
   - Added import alias `@/*` for easier imports from `src/`.

3. **Installed Tailwind CSS v4**  
   - Tailwind config detected and validated.

4. **Initialized shadcn/ui**  
   - Ran `pnpm dlx shadcn@latest init`.
   - Set up import alias for shadcn/ui compatibility.

5. **Monorepo Integration**  
   - Uses shared packages: `@repo/common`, `@repo/db`, etc.

### How to Run

```sh
pnpm install
pnpm run dev
```

### Notes

- Make sure your import alias (`@/*`) is set in `tsconfig.json` for shadcn/ui and Next.js compatibility.
- Tailwind CSS and shadcn/ui are ready for use in your components.

---
```<!-- filepath: /home/preethampm/Projects/cohort/draw/apps/web/README.md -->

# Draw Web App

## Setup & Configuration

This project is part of a monorepo and uses Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

### Steps Completed

1. **Initialized Next.js app**  
   - Project structure set up under `apps/web`.

2. **Configured TypeScript**  
   - Extended shared config from `@repo/typescript-config/nextjs.json`.
   - Added import alias `@/*` for easier imports from `src/`.

3. **Installed Tailwind CSS v4**  
   - Tailwind config detected and validated.

4. **Initialized shadcn/ui**  
   - Ran `pnpm dlx shadcn@latest init`.
   - Set up import alias for shadcn/ui compatibility.

5. **Monorepo Integration**  
   - Uses shared packages: `@repo/common`, `@repo/db`, etc.

### How to Run

```sh
pnpm install
pnpm run dev
```

### Notes

- Make sure your import alias (`@/*`) is set in `tsconfig.json` for shadcn/ui and Next.js compatibility.
- Tailwind CSS and shadcn/ui are ready for use in your components.