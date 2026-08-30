import { useState, useRef, useEffect } from 'react'
import { FAQ_DATA, FAQ_FALLBACK, FAQ_SUGGESTIONS } from '../data/faq'
import './AIFaqWidget.css'

function matchFaq(message) {
  const text = message.toLowerCase()
  let best = null
  let bestScore = 0

  for (const entry of FAQ_DATA) {
    let score = 0
    for (const kw of entry.keywords) {
      if (text.includes(kw)) score += kw.split(' ').length
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  return bestScore > 0 ? best.answer : FAQ_FALLBACK
}

const WELCOME_MESSAGE =
  "Hi! I'm TechAbhi's assistant. Ask me about services, pricing, timelines, or tech stack — or tap a suggestion below."

const TEASER_MESSAGE = "Hi! I'm an AI — chat with me!"
const TEASER_DELAY_MS = 1500
const TEASER_AUTO_HIDE_MS = 8000
const TEASER_SESSION_KEY = 'aiFaqTeaserShown'

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

function BotIconSmall() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

export default function AIFaqWidget() {
  const [open, setOpen] = useState(false)
  const [autoTeaser, setAutoTeaser] = useState(false)
  const [hoverTeaser, setHoverTeaser] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: WELCOME_MESSAGE }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  // One-time auto popup, a few seconds after the page loads (once per tab session)
  useEffect(() => {
    if (sessionStorage.getItem(TEASER_SESSION_KEY)) return
    const showTimer = setTimeout(() => setAutoTeaser(true), TEASER_DELAY_MS)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!autoTeaser) return
    const hideTimer = setTimeout(() => {
      setAutoTeaser(false)
      sessionStorage.setItem(TEASER_SESSION_KEY, '1')
    }, TEASER_AUTO_HIDE_MS)
    return () => clearTimeout(hideTimer)
  }, [autoTeaser])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, typing, open])

  const dismissAutoTeaser = () => {
    setAutoTeaser(false)
    sessionStorage.setItem(TEASER_SESSION_KEY, '1')
  }

  const showTeaser = (autoTeaser || hoverTeaser) && !open

  const send = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const answer = matchFaq(trimmed)
      setMessages((prev) => [...prev, { from: 'bot', text: answer }])
      setTyping(false)
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  return (
    <div className="ai-faq-widget">
      {showTeaser && (
        <div
          className="ai-faq-teaser"
          onClick={() => { dismissAutoTeaser(); setOpen(true) }}
        >
          <div className="ai-faq-teaser-avatar"><BotIconSmall /></div>
          <div className="ai-faq-teaser-body">
            <div className="ai-faq-teaser-name">TechAbhi Assistant</div>
            <div className="ai-faq-teaser-text">{TEASER_MESSAGE}</div>
          </div>
          {autoTeaser && (
            <button
              className="ai-faq-teaser-close"
              aria-label="Dismiss"
              onClick={(e) => { e.stopPropagation(); dismissAutoTeaser() }}
            >
              <CloseIcon />
            </button>
          )}
          <span className="ai-faq-teaser-tail" />
        </div>
      )}

      {open && (
        <div className="ai-faq-panel" role="dialog" aria-label="Chat assistant">
          <div className="ai-faq-header">
            <div className="ai-faq-header-info">
              <span className="ai-faq-dot" />
              <div>
                <div className="ai-faq-title">TechAbhi Assistant</div>
                <div className="ai-faq-subtitle">Usually replies instantly</div>
              </div>
            </div>
            <button
              className="ai-faq-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="ai-faq-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ai-faq-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="ai-faq-msg bot ai-faq-typing">
                <span /><span /><span />
              </div>
            )}

            {messages.length === 1 && (
              <div className="ai-faq-suggestions">
                {FAQ_SUGGESTIONS.map((q) => (
                  <button key={q} className="ai-faq-chip" onClick={() => send(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="ai-faq-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send">➤</button>
          </form>
        </div>
      )}

      <button
        className={`ai-faq-float ${!open ? 'ai-faq-pulse' : ''}`}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        onMouseEnter={() => setHoverTeaser(true)}
        onMouseLeave={() => setHoverTeaser(false)}
        onClick={() => {
          dismissAutoTeaser()
          setOpen((v) => !v)
        }}
      >
        {open ? <CloseIcon /> : <BotIcon />}
      </button>
    </div>
  )
}