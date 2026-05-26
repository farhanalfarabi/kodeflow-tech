# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Backend**: Laravel 13 (PHP 8.3+)
- **Frontend**: Svelte 5 + Inertia.js
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Build**: Vite 8
- **Icons**: Lucide Svelte
- **Rich Text**: Tiptap (used in `resources/js/Components/ui/Tiptap.svelte`)

## Commands

```bash
# Full stack development (runs server, queue listener, logs, and vite concurrently)
composer run dev

# Frontend only
npm run dev

# Backend only
php artisan serve

# Run tests (PHPUnit with SQLite in-memory)
composer test

# Run a single test
php artisan test --filter=TestName

# Build frontend for production
npm run build
```

## Architecture

### Request Flow
1. Browser → Laravel routes (`routes/web.php`)
2. Controllers return `Inertia::render()` with page component name and props
3. Inertia serves `resources/views/app.blade.php` as root template
4. Svelte pages in `resources/js/Pages/` render based on route

### Frontend Structure
- **Pages**: `resources/js/Pages/` — Route-level components (About.svelte, Blogs.svelte, BlogDetail.svelte, Admin/*)
- **Components**: `resources/js/Components/` — Reusable UI components (Navbar, Hero, Blog/*, Services/*, About/*)
- **Layouts**: `resources/js/Layouts/` — Page wrappers (AdminLayout.svelte)
- **Lib**: `resources/js/lib/` — Utilities (utils.js, constants.js, i18n.js)

### Backend Structure
- **Controllers**: `app/Http/Controllers/` — AuthController for login/logout
- **Admin Controllers**: `app/Http/Controllers/Admin/BlogController.php` — Full CRUD for blog management
- **Models**: `app/Models/` — Blog, Category, Tag, User (Blog has many-to-many Tags via blog_tag pivot)
- **Middleware**: `app/Http/Middleware/HandleInertiaRequests.php` — Shares `auth.user` to all pages

### Design System
See [design.md](./design.md) for full documentation including color palette, typography, animations, and components.

### Blog System
- Blogs belong to a Category and an Author (User)
- Blogs have many Tags (many-to-many)
- Slugs auto-increment if duplicate (e.g., "my-post" → "my-post-2")
- Admin at `/admin/blogs` requires authentication
- Public pages: `/blogs`, `/blogs/{slug}`, `/blogs/tags`, `/blogs/tags/{slug}`

### Video Frame Scrub
The hero uses scroll-scrubbed image sequence (not `<video>`). Frame count is set in `resources/js/lib/constants.js`. To update:
1. Place source.mp4 in project root
2. Extract frames: `ffmpeg -i source.mp4 -vf "fps=30,scale='min(1920,iw)':'-2':flags=lanczos" -q:v 3 public/frames/frame_%04d.jpg`
3. Count frames and update `FRAME_COUNT` in constants.js

### Database
- SQLite used for local development and tests
- Migrations in `database/migrations/` create: users, cache, jobs, categories, tags, blogs, blog_tag pivot
- Blog status: 'draft' or 'published'

## Key Files

- `vite.config.js` — Vite config with Svelte, Tailwind v4, and @ alias to resources/js
- `resources/views/app.blade.php` — Root template loaded by Inertia
- `resources/css/app.css` — Global styles, Tailwind v4 config with @theme, CSS variables, liquid-glass components
- `routes/web.php` — All route definitions including admin CRUD routes
- `resources/js/app.js` — Inertia app setup with Svelte 5 mount() fallback