# OnMove

**OnMove** is a community-driven ride-sharing web application that connects drivers and passengers heading the same way. Users can post rides, browse available routes nearby, and join other people's trips — all completely free.

Built as a personal project to deepen skills in modern web development with React, TypeScript, and Supabase.

---

## Features

- **Live Map** — Visualize available rides in real time using Google Maps, with directional markers showing each route
- **Post a Ride** — Share your route with origin, destination, date, time, and available seats
- **Find Rides** — Browse community rides and join one that fits your route
- **Ride Details** — View full trip information, see who's already joining, and sign up directly from the page
- **Responsive Design** — Mobile-first layout that adapts across phones, tablets, and desktops

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS + Flowbite React |
| Maps | Google Maps API via @react-google-maps/api |
| Backend & Database | Supabase (PostgreSQL) |
| Routing | React Router DOM v6 |

---

## Project Structure

```
OnMove/
├── public/                 # Static assets (logo, icons)
└── src/
    ├── components/         # Shared UI components (Navbar)
    ├── features/           # Feature modules
    │   └── map/            # Google Maps integration
    ├── hooks/              # Custom React hooks
    │   ├── useGeolocation  # User location
    │   ├── useGetRides     # Fetch rides from Supabase
    │   └── useGetJoined    # Fetch joined users per ride
    ├── pages/              # Page-level components
    │   ├── Home.tsx
    │   ├── MapPage.tsx
    │   ├── Rides.tsx
    │   ├── PostRidePage.tsx
    │   ├── RideDetailsPage.tsx
    │   └── About.tsx
    ├── services/           # Supabase client configuration
    └── types/              # TypeScript type definitions
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A Google Maps API key with Maps JavaScript API enabled
- A Supabase project with the required tables and RPC functions

### Installation

```bash
git clone https://github.com/BenjaM0708/OnMove.git
cd OnMove
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run in Development

```bash
npm run dev
```

---

## Database

OnMove uses Supabase as its backend. The main tables are:

- **car_ride** — Stores ride posts with origin, destination, datetime, seats, and driver info
- **joined_ride** — Stores users who have joined a specific ride

Location data is stored as PostGIS geometry and queried via a custom RPC function `origin_locations_by_distance` that returns rides sorted by proximity to a given coordinate.

---

## Author

**Benjamín Muñoz**
Personal project — building real things while learning web development.

---

## License

This project is licensed under the [MIT License](LICENSE).