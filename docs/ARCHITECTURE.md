# Architecture

PlannerEdge Labs is a static, frontend-only Next.js App Router site.

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Single landing page and product links |
| `app/layout.tsx` | Inter font, metadata, viewport, and document shell |
| `app/globals.css` | Responsive light-theme styles and accessibility states |
| `app/robots.ts` | Generated `robots.txt` |
| `app/sitemap.ts` | Generated one-page sitemap |

There are no API routes, client state, database, authentication, CMS, forms, analytics, or environment variables.

# Domain

Canonical production domain: `planneredgelabs.com`

In Cloudflare, configure:

In Vercel, set `planneredgelabs.com` as Production and redirect `www.planneredgelabs.com` to it with a permanent 308 redirect.

# Content

The homepage presents PlannerEdge Labs as the parent company for:

| Product | URL | Accent |
| --- | --- | --- |
| MPSC Planner | `https://www.mpscplanner.com` | `#03d0a0` |
| UPSC Planner | `https://www.upscplanner.com` | `#5271ff` |

There are exactly four product links: two card CTAs and two footer links. They are standard same-tab links.

The page uses a light, Inter-only visual system with white surfaces, soft slate borders, and cyan keyboard focus outlines.

# SEO

Canonical URL: `https://planneredgelabs.com`

`app/layout.tsx` defines the page title, description, canonical URL, Open Graph, Twitter, robots, and viewport metadata.

- `robots.txt` allows indexing and references the sitemap.
- `sitemap.xml` contains only the canonical homepage.
- No Open Graph image is generated.
