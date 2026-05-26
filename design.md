# Design System

## Color Palette

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--ink` | 287 58% 9% | Dark background (dark mode) |
| `--cream` | 240 10% 95% | Light/text color (dark mode) |
| `--ochre` | 287 73% 36% | Primary accent |
| `--terra` | 287 30% 25% | Secondary color |

Light mode overrides: `--cream` becomes background, `--ink` becomes foreground.

### Semantic Tokens (Dark Mode Default)

```
background:        --ink
foreground:        --cream
card:              --ink
card-foreground:   --cream
popover:           --ink
popover-foreground:--cream
primary:           --ochre
primary-foreground:--ink
secondary:         --terra
secondary-foreground:--cream
muted:             240 4% 16%
muted-foreground:  40 6% 72%
accent:            --ochre
accent-foreground: --ink
destructive:       0 72% 51%
destructive-foreground:--cream
border:            40 30% 90% / 0.18
input:             40 30% 90% / 0.18
ring:              --ochre
```

## Typography

### Font Families

| Role | Font | Fallback |
|------|------|----------|
| Display | **Oswald** | Impact, Arial Narrow, sans-serif |
| Body | **Inter** | -apple-system, BlinkMacSystemFont, Helvetica Neue, system-ui |

Loaded via `@fontsource/oswald` and `@fontsource/inter` (weights 300–700 for Oswald, 300–600 for Inter).

### CSS Variables

```css
--font-display: "Oswald", "Impact", "Arial Narrow", sans-serif;
--font-body:    "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", system-ui, sans-serif;
```

### Utility Classes

```html
<div class="font-display">Heading text</div>
<div class="font-body">Body text</div>
```

## Layout

```css
--gutter: clamp(20px, 4.2vw, 56px);  /* Responsive horizontal padding */
--max:    1440px;                      /* Max container width */
```

## Border Radius

```
--radius-sm:  calc(0.75rem - 4px)   ≈ 0.4375rem
--radius-md:  calc(0.75rem - 2px)   ≈ 0.5625rem
--radius-lg:  0.75rem                (base)
--radius-xl:  calc(0.75rem + 4px)    ≈ 0.875rem
--radius-2xl: calc(0.75rem + 10px)  ≈ 1.25rem
--radius-3xl: calc(0.75rem + 18px)  ≈ 1.875rem
```

## Animations

| Name | Duration | Easing | Description |
|------|----------|--------|-------------|
| `marquee` | 28s | linear, infinite | Horizontal scroll |
| `marquee-rev` | 32s | linear, infinite | Reverse horizontal scroll |
| `fade-up` | 0.7s | cubic-bezier(0.22, 1, 0.36, 1) | Slide up + blur fade |

### fade-up Keyframe

```css
from { opacity: 0; transform: translate3d(0, 24px, 0); filter: blur(6px); }
to   { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
```

## Components

### `.liquid-glass`

Glassmorphism card with subtle border gradient and backdrop blur.

```css
background-blend-mode: luminosity;
backdrop-filter: blur(4px);
box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
```

### `.liquid-glass-strong`

Stronger glass effect with 50px blur and enhanced shadow.

```css
backdrop-filter: blur(50px);
```

### Gradient Fades

```html
<div class="gradient-fade-t"></div>  <!-- Transparent to background (top) -->
<div class="gradient-fade-b"></div>  <!-- Transparent to background (bottom) -->
```

### Noise Overlay

`.noise` class adds SVG turbulence noise via `::after` pseudo-element at 50% opacity with `mix-blend-mode: overlay`.

## CSS Variable Usage in Tailwind

All CSS variables are exposed as Tailwind theme values via `@theme` block:

```css
@theme {
  --color-background:     hsl(var(--background));
  --color-foreground:     hsl(var(--foreground));
  --color-primary:        hsl(var(--primary));
  --color-ring:           hsl(var(--ring));
  --font-display: "Oswald", sans-serif;
  --font-body:    "Inter", sans-serif;
}
```

Usage in HTML:
```html
<div class="bg-background text-foreground"></div>
<button class="bg-primary text-primary-foreground"></button>
```

## Dark Mode

Default theme is dark. Light mode triggered by `data-theme="light"` on `<html>`:

```html
<html data-theme="light">
```

In light mode, semantic colors invert (background becomes cream, foreground becomes ink).