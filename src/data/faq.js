// ────────────────────────────────────────────────────────────────
//  FAQ KNOWLEDGE BASE — used by the AI chat widget (no API key needed).
//  Add/edit entries freely. Each entry:
//   - keywords: words/phrases the matcher looks for in the visitor's
//               message (lowercase, no punctuation needed)
//   - answer:   what the widget replies with
//  The matcher scores every entry by how many keywords it finds and
//  picks the best match. If nothing scores well enough, it falls back
//  to FAQ_FALLBACK.
// ────────────────────────────────────────────────────────────────

export const FAQ_SUGGESTIONS = [
  'What services do you offer?',
  'How much does a website cost?',
  'How long does a project take?',
  'What tech do you use?',
]

export const FAQ_DATA = [
  {
    keywords: ['service', 'services', 'offer', 'what do you do', 'what can you build'],
    answer: "I build websites, business systems, and AI-powered tools — think CRM/ERP dashboards, ecommerce stores, POS & inventory systems, HRMS, and custom web apps. Check the Services and Solutions pages for the full list.",
  },
  {
    keywords: ['price', 'cost', 'pricing', 'how much', 'budget', 'quote', 'rate', 'charge'],
    answer: "Pricing depends on scope — a simple website and a full CRM/ERP system cost very differently. Tell me a bit about your project on the contact form and I'll get back with a free, tailored quote.",
  },
  {
    keywords: ['time', 'timeline', 'long', 'duration', 'how fast', 'deadline', 'delivery'],
    answer: "Most single-purpose sites (restaurant, portfolio, small business) take 1–3 weeks. Larger systems like CRM/ERP or ecommerce platforms typically take 3–8 weeks depending on features. I'll give you an exact estimate once I know the scope.",
  },
  {
    keywords: ['tech', 'technology', 'stack', 'framework', 'language', 'built with', 'react', 'html', 'css', 'javascript'],
    answer: "I mainly build with React, JavaScript, HTML/CSS, and Vite for fast, modern front-ends, plus whatever backend (Node, databases, third-party APIs) a project needs. Everything is built to be fast-loading and mobile responsive.",
  },
  {
    keywords: ['portfolio', 'work', 'projects', 'examples', 'past work', 'previous clients'],
    answer: "You can see live examples on the Portfolio page — including a college management system, an NGO site, and a couple of restaurant/cafe sites. Click any card to read more about it.",
  },
  {
    keywords: ['contact', 'reach', 'talk', 'call', 'email', 'phone', 'whatsapp', 'get in touch'],
    answer: "Easiest way is the contact form on this site, or tap the WhatsApp button in the bottom-right corner for a quick chat.",
  },
  {
    keywords: ['crm'],
    answer: "A CRM system I build helps you track leads, customers, and follow-ups in one dashboard — no more scattered spreadsheets. Check the Solutions page for details.",
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'online store', 'shop', 'shopping cart'],
    answer: "Ecommerce builds include a product catalog, cart, checkout/payments, and order management — tailored to your product range and workflow.",
  },
  {
    keywords: ['erp'],
    answer: "ERP dashboards I build connect sales, stock, staff, and finance into a single admin panel, so your team isn't juggling five different tools.",
  },
  {
    keywords: ['pos', 'point of sale', 'inventory'],
    answer: "POS & inventory systems handle billing and stock tracking together, so your counter and your stockroom stay in sync in real time.",
  },
  {
    keywords: ['ai', 'artificial intelligence', 'chatbot', 'automation'],
    answer: "Yes — I build AI-powered features too, like this chat widget, smart quote estimators, and AI customer-assistant tools for websites. Happy to talk through what would help your business.",
  },
  {
    keywords: ['revision', 'changes', 'edit', 'update after', 'support after delivery'],
    answer: "Every project includes a round of revisions after delivery, and I offer ongoing support/maintenance if you need updates down the line — we can discuss terms when scoping your project.",
  },
]

export const FAQ_FALLBACK =
  "I don't have a canned answer for that one yet — but tap the WhatsApp button or use the contact form and I'll get back to you personally."