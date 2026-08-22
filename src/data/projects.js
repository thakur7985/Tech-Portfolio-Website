// ────────────────────────────────────────────────────────────────
//  YOUR PROJECTS
//  Replace the placeholder details below with your real projects.
//  - img:  full-page screenshot of the project (tall image — this is
//          what makes the hover-scroll preview work).
//  - url:  the LIVE project link — put your real URL here.
//          Leave it as '' (empty) to hide the "Visit" button.
//  - desc: short description shown on the Portfolio page.
// ────────────────────────────────────────────────────────────────
import ngoFull from '../assets/projects/ngo-full.jpg'
import ecollegeFull from '../assets/projects/ecollege-full.jpg'
import eggspertFull from '../assets/projects/eggspert-full.jpg'
import sangrill from '../assets/projects/sangrill.jpg'

export const PROJECTS = [
  {
    title: 'College Management System',
    cat: 'College Management',
    img: ecollegeFull,
    url: 'https://thakur7985.github.io/CMS-Frontend/',
    desc: 'A college website with course listings, admissions info, events and a gallery, built for a fast-loading student-facing experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'NGO Educational & Welfare Services',
    cat: 'NGO / Education',
    img: ngoFull,
    url: '',
    desc: "A nonprofit website focused on children's education, with donation flows, impact stats, and a volunteer/vendor registration system.",
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Eggspert',
    cat: 'Restaurant',
    img: eggspertFull,
    url: 'https://webdevmrmoon.github.io/eggspert/',
    desc: 'An all-day breakfast restaurant site with a menu showcase, founder profiles, location map and vendor/careers sign-up forms.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Sangrill',
    cat: 'Restaurant & Cafe',
    img: sangrill,
    url: 'https://thakur7985.github.io/Sangrill/index.html',
    desc: 'A vegetarian hangout spot in Ballia with a hero carousel, food showcase grid, birthday booking, and a live location map.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]