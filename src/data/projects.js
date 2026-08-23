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
    slug: 'college-management-system',
    title: 'College Management System',
    cat: 'College Management',
    img: ecollegeFull,
    url: '',
    desc: 'A college website with course listings, admissions info, events and a gallery, built for a fast-loading student-facing experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'ngo-educational-welfare-services',
    title: 'NGO Educational & Welfare Services',
    cat: 'NGO / Education',
    img: ngoFull,
    url: '',
    desc: "A nonprofit website focused on children's education, with donation flows, impact stats, and a volunteer/vendor registration system.",
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'eggspert',
    title: 'Eggspert',
    cat: 'Restaurant',
    img: eggspertFull,
    url: '',
    desc: 'An all-day breakfast restaurant site with a menu showcase, founder profiles, location map and vendor/careers sign-up forms.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'sangrill',
    title: 'Sangrill',
    cat: 'Restaurant & Cafe',
    img: sangrill,
    url: '',
    desc: 'A vegetarian hangout spot in Ballia with a hero carousel, food showcase grid, birthday booking, and a live location map.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]