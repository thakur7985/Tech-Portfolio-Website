# Codeloom Portfolio — Setup

## Run locally
1. Install dependencies (one time):
   npm install
2. Start dev server:
   npm run dev
3. Open the URL it prints (usually http://localhost:5173)

## Build for production
   npm run build      # output goes to /dist
   npm run preview    # preview the production build

## What to edit
- src/pages/Home.jsx — Services, Projects, Technologies and Contact
  are near the top of the file in the SERVICES / PROJECTS / TECHS arrays.
  Replace the placeholder Unsplash image URLs with your own project
  screenshots, and update your email/phone in the CONTACT section.

## Notes
- Owl Carousel (projects slider) loads automatically from CDN inside
  Home.jsx — no extra install needed. Internet is required for it and
  for the placeholder images/tech logos.
- node_modules is not included in this zip. Running `npm install`
  recreates it for your OS.
