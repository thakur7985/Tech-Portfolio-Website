// ────────────────────────────────────────────────────────────────
//  YOUR PROJECTS
//  Replace the placeholder details below with your real projects.
//  - img:  full-page screenshot of the project (tall image — this is
//          what makes the hover-scroll preview work). Currently
//          pointing at dummy generated template mockups in
//          ./src/assets/projects/ — swap these for real screenshots
//          of your own work.
//  - url:  the LIVE project link — put your real URL here.
//          Leave it as '' (empty) to hide the "Visit" button.
//  - desc: short description shown on the Portfolio page.
// ────────────────────────────────────────────────────────────────
import sunviewFull from '../assets/projects/sunview-full.jpg'
import retailcoreFull from '../assets/projects/retailcore-full.jpg'
import brightmindsFull from '../assets/projects/brightminds-full.jpg'
import medicareFull from '../assets/projects/medicare-full.jpg'
import travelnestFull from '../assets/projects/travelnest-full.jpg'
import carepointFull from '../assets/projects/carepoint-full.jpg'

export const PROJECTS = [
  {
    title: 'Sunview Properties',
    cat: 'Real Estate',
    img: sunviewFull,
    url: '', // ← add live link, e.g. 'https://sunviewproperties.com'
    desc: 'A property-listing portal with map search, saved favourites and enquiry routing to agents. Built for fast browsing on mobile.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'RetailCore POS',
    cat: 'Business System',
    img: retailcoreFull,
    url: '',
    desc: 'A point-of-sale and inventory system with live stock sync, daily sales reports and multi-counter billing for retail stores.',
    tech: ['React', 'NestJS', 'PostgreSQL'],
  },
  // {
  //   title: 'Bright Minds Academy',
  //   cat: 'School',
  //   img: brightmindsFull,
  //   url: '',
  //   desc: 'A school website with admissions enquiry, notices, event calendar and a fee-payment portal for parents.',
  //   tech: ['Next.js', 'Tailwind'],
  // },
  // {
  //   title: 'MediCare Plus',
  //   cat: 'Hospital',
  //   img: medicareFull,
  //   url: '',
  //   desc: 'Appointment booking, doctor profiles and department pages with a patient-records admin panel behind the scenes.',
  //   tech: ['React', 'FastAPI'],
  // },
  {
    title: 'TravelNest',
    cat: 'Travel Agency',
    img: travelnestFull,
    url: '',
    desc: 'A travel booking site with curated tour packages, flight + hotel bundles and an enquiry form routed straight to agents.',
    tech: ['Next.js', 'Node.js', 'Stripe'],
  },
  {
    title: 'CarePoint Booking',
    cat: 'Appointment Booking',
    img: carepointFull,
    url: '',
    desc: 'A real-time appointment booking system with provider schedules, automated reminders and a client-facing self-serve calendar.',
    tech: ['React', 'NestJS', 'PostgreSQL'],
  },
]
