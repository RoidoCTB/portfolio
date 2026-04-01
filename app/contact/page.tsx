'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! (demo)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <div className="px-8 py-10" style={{ backgroundColor: '#1a1f2e' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#3B3BF9' }}>
          GET IN TOUCH
        </p>
        <h1 className="text-3xl font-bold text-white">Contact</h1>
      </div>

      <div className="px-8 py-10">
        <div className="max-w-lg">
          <p className="text-gray-600 mb-8 text-sm">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#3B3BF9' } as React.CSSProperties}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-fit px-6 py-2.5 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: '#3B3BF9' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
