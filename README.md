# ROS — Restaurant Operating System

**A self-contained front-end prototype of a five-role restaurant platform.** One interface, five consoles — guest, waiter, kitchen, manager, admin — no backend, no build step, no dependencies.

![Roles](https://img.shields.io/badge/roles-5-C97F1F)
![Dependencies](https://img.shields.io/badge/dependencies-0-4F7B59)
![Stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-3E6E71)
![Build step](https://img.shields.io/badge/build%20step-none-C1442E)

## Table of contents

- [Overview](#overview)
- [Quick start](#quick-start)
- [Folder structure](#folder-structure)
- [Roles & navigation](#roles--navigation)
- [Tech stack](#tech-stack)
- [Mock data & state](#mock-data--state)
- [Rail AI assistant](#rail-ai-assistant)
- [Known limitations](#known-limitations)

## Overview

ROS is a single interface that plays five parts: guest, waiter, kitchen, manager, and admin. Sign in as any role from the login screen and the whole app — navigation, data, and layout — reconfigures around that role.

It's a front-end prototype: everything runs in the browser against in-memory mock data, so it's built for demos, UI review, and design exploration rather than as a production ordering system.

## Quick start

Simplest option — just open the file:

```bash
open index.html
```

For the smoothest experience (some browsers restrict certain page features when opened directly from disk), serve the folder locally instead:

```bash
cd restaurant-operating-system
python3 -m http.server 8000
# then visit http://localhost:8000
```

Or, if you have Node installed:

```bash
npx serve .
```

On the sign-in screen, pick a role card, keep the pre-filled demo credentials, and sign in.

## Folder structure

```
restaurant-operating-system/
├── index.html      Markup only — screens, roles' views, AI panel
├── style.css       All styling, design tokens, layout, responsiveness
├── script.js       Mock data, state, rendering, interactions, Rail AI
├── assets/         Reserved for downloadable/static assets
└── images/         Reserved for image files (none required to run)
```

`assets/` and `images/` are empty by design — the app currently draws all icons and graphics from inline SVG, so nothing external is required for it to run. They're there for whatever you add next.

## Roles & navigation

Each role signs in to its own console with its own sidebar tabs:

| Role | Demo persona | Tabs |
|---|---|---|
| **Customer** | Jordan Lee | Overview · Menu · Reservations · Orders · Billing |
| **Waiter** | Sam Rivera | Floor · Orders · Reservations · Notifications |
| **Kitchen** | Priya Nair | Ticket rail · History |
| **Manager** | Alex Chen | Overview · Sales · Inventory · Staff · Reports |
| **Admin** | Morgan Blake | Users & roles · Security · System health · Integrations |

## Tech stack

Deliberately plain: no framework, no bundler, no package manager.

- HTML5
- CSS3 (custom properties)
- Vanilla JavaScript
- Inline SVG icons
- Big Shoulders Display, IBM Plex Sans, IBM Plex Mono (Google Fonts CDN)

The only network dependency is the Google Fonts stylesheet linked in `index.html`. Everything else — layout, state, rendering — is local.

## Mock data & state

All content — menu items, tables, reservations, kitchen tickets, inventory, users — lives as plain constants near the top of `script.js`:

- `menuItems`, `tables`, `reservationsData`
- `kitchenTickets`, `kitchenHistory`
- `inventoryData`, `orderHistory`, `receipts`

Edit those arrays directly to reshape the menu, floor plan, or ticket rail. There's no database and no persistence layer — a page refresh resets everything back to the seeded data.

## Rail AI assistant

Every role has access to an assistant panel ("Rail AI") with a role-specific system prompt — practical for a waiter, terse for the kitchen, decision-focused for a manager.

> **Note:** the panel calls `api.anthropic.com/v1/messages` directly from the browser with no API key attached. That works inside environments that proxy this call for you, but on a plain static host it will fail. To make it functional elsewhere, route that fetch through your own backend (or serverless function) that attaches a valid API key.

## Known limitations

- No backend, database, or authentication — sign-in is a UI flow only.
- State lives in memory and resets on reload; nothing is saved between visits.
- Rail AI needs a proxied or keyed endpoint to respond (see [Rail AI assistant](#rail-ai-assistant)).
- Built as a design and interaction prototype — treat it as a starting point, not a compliance-ready POS.

**Good starting points for extending it:** wire a real API in place of the mock arrays, add a persistence layer (localStorage or a backend) for tables/orders, and connect Rail AI through your own server.
