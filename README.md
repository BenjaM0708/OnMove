# OnMove

![OnMove Logo](https://onmove.online/Gold-Onmove.png)

**OnMove** is a community-driven ride-sharing web app built as a personal learning project. The idea is simple — connect people heading the same way, share the journey, and make it free.

Built from scratch using React, TypeScript, and Supabase, with a focus on clean UI, real-time data, and a responsive experience across all devices.

🌐 **Live:** [onmove.online](https://onmove.online)

---

## Why I built this

I wanted a project that felt real — not a tutorial clone, but something with actual moving parts: authentication, a live map, a database with spatial queries, and a UI that works on mobile.

OnMove gave me the opportunity to work with Google Maps API, PostGIS geometry in Supabase, and design a full product from the ground up.

---

## What it does

- Browse available rides near you on a live map with directional markers
- Post your own ride with origin, destination, date, and available seats
- Join a ride and see who else is coming
- Fully responsive — designed mobile-first

---

## Tech Stack

| | |
|---|---|
| Frontend | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS + Flowbite React |
| Maps | Google Maps API (@react-google-maps/api) |
| Backend | Supabase (PostgreSQL + PostGIS) |
| Routing | React Router DOM v6 |

---

## Running locally

```bash
git clone https://github.com/BenjaM0708/OnMove.git
cd OnMove
npm install
```

Create a `.env` file:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

```bash
npm run dev
```

---

## Author

**Benjamín Muñoz** — building real things while learning web development.

---

## License

MIT
