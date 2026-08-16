import './WhatsAppButton.css'

// Change this number to your WhatsApp business number (country code, no + or spaces)
const WHATSAPP_NUMBER = '917985142638'
const DEFAULT_MSG = "Hi! I found your portfolio and I'd like to discuss a project."

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MSG)}`
  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.462 1.712 6.406L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.234 1.588h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053A12.72 12.72 0 0 0 16.004 3.2Zm0 23.34h-.004a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-4.003 1.05 1.068-3.9-.252-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.87 4.777-10.646 10.65-10.646 2.845 0 5.518 1.108 7.53 3.122a10.58 10.58 0 0 1 3.117 7.53c0 5.872-4.777 10.65-10.65 10.65Zm5.84-7.976c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.573-1.588-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.735-.986-2.375-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.669 0 1.574 1.146 3.096 1.306 3.309.16.213 2.253 3.44 5.46 4.826.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.893-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z"
        />
      </svg>
      <span className="wa-tooltip">Chat with me</span>
    </a>
  )
}
