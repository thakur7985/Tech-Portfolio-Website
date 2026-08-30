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
    desc: 'Educational institutions often struggle with scattered information across course brochures, admission notices, and event flyers. This college website solves that by centralizing course listings, admissions details, campus events, and a photo gallery into one fast, student-friendly platform — making it easier for prospective students and parents to find what they need without digging through paperwork or making phone calls.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'ngo-educational-welfare-services',
    title: 'NGO Educational & Welfare Services',
    cat: 'NGO / Education',
    img: ngoFull,
    url: '',
    desc: "Nonprofits need to build trust quickly to convert visitors into donors and volunteers. This website addresses that by pairing a clear mission statement with transparent impact statistics, a streamlined donation flow, and dedicated registration systems for volunteers and vendors — turning a simple informational site into an active engagement and fundraising tool for children's education programs.",
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'eggspert',
    title: 'Eggspert',
    cat: 'Restaurant',
    img: eggspertFull,
    url: '',
    desc: 'A growing all-day breakfast restaurant needed an online presence that matched its in-store experience and supported hiring and vendor outreach. This site delivers that with an appetizing menu showcase, founder profiles that build brand personality, an integrated location map for easy discovery, and built-in forms for careers and vendor sign-ups — all in one lightweight, easy-to-update package.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug: 'sangrill',
    title: 'Sangrill',
    cat: 'Restaurant & Cafe',
    img: sangrill,
    url: '',
    desc: 'A local vegetarian hangout in Ballia needed a digital storefront that reflects its atmosphere and drives foot traffic. The solution: an inviting hero carousel and food showcase grid to spotlight the menu visually, a birthday booking feature to capture event bookings directly, and a live location map so customers can find and reach the venue without friction.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]