'use client'
import { useState } from 'react'

const categories = ['All', 'Web Dev', 'Mobile', 'UI/UX', 'Others']

const projects = [
  {
    name: 'Project A', tags: ['React', 'CSS'], color: 'bg-purple-50',
    desc: 'Lorem ipsum dolor', links: [{ label: 'Live Demo', type: 'demo' }, { label: 'GitHub', type: 'ghost' }],
    category: 'Web Dev',
  },
  {
    name: 'Project B', tags: ['PHP', 'MySQL'], color: 'bg-blue-50',
    desc: 'Lorem ipsum dolor', links: [{ label: 'Live Demo', type: 'demo' }, { label: 'GitHub', type: 'ghost' }],
    category: 'Web Dev',
  },
  {
    name: 'Project C', tags: ['Vue', 'Node.js'], color: 'bg-green-50',
    desc: 'Lorem ipsum dolor', links: [{ label: 'Live Demo', type: 'demo' }, { label: 'GitHub', type: 'ghost' }],
    category: 'Web Dev',
  },
  {
    name: 'Project D', tags: ['HTML', 'JS'], color: 'bg-yellow-50',
    desc: 'Lorem ipsum dolor', links: [{ label: 'Live Demo', type: 'demo' }, { label: 'GitHub', type: 'ghost' }],
    category: 'Mobile',
  },
  {
    name: 'Project E', tags: ['Laravel'], color: 'bg-pink-50',
    desc: 'Lorem ipsum dolor', links: [{ label: 'Live Demo', type: 'demo' }, { label: 'GitHub', type: 'ghost' }],
    category: 'Web Dev',
  },
  {
    name: 'Project F', tags: ['Figma', 'UI/UX'], color: 'bg-violet-50',
    desc: 'Lorem ipsum dolor', links: [{ label: 'Preview', type: 'demo' }, { label: 'Figma', type: 'ghost' }],
    category: 'UI/UX',
  },
]

const tagColors: Record<string, string> = {
  'React': 'bg-blue-100 text-blue-800',
  'CSS': 'bg-pink-100 text-pink-800',
  'PHP': 'bg-violet-100 text-violet-800',
  'MySQL': 'bg-orange-100 text-orange-800',
  'Vue': 'bg-green-100 text-green-800',
  'Node.js': 'bg-lime-100 text-lime-800',
  'HTML': 'bg-red-100 text-red-800',
  'JS': 'bg-yellow-100 text-yellow-800',
  'Laravel': 'bg-rose-100 text-rose-800',
  'Figma': 'bg-purple-100 text-purple-800',
  'UI/UX': 'bg-indigo-100 text-indigo-800',
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      {/* Header */}
      <div className="px-8 py-10" style={{ backgroundColor: '#1a1f2e' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#3B3BF9' }}>
          MY WORK
        </p>
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </div>

      {/* Content */}
      <div className="px-8 py-8 bg-gray-50 min-h-screen">
        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? 'text-white border-transparent'
                  : 'text-gray-500 border-gray-300 bg-white hover:border-gray-400'
              }`}
              style={active === cat ? { backgroundColor: '#3B3BF9', borderColor: '#3B3BF9' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.name}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${project.color} h-40 flex items-center justify-center`}>
                <span className="text-gray-300 text-xs tracking-wider">xxx</span>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{project.desc}</p>
                <div className="flex items-center gap-2">
                  {project.links.map(link => (
                    link.type === 'demo' ? (
                      <button
                        key={link.label}
                        className="px-4 py-1.5 text-xs font-medium rounded-full text-white"
                        style={{ backgroundColor: '#3B3BF9' }}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <button key={link.label} className="text-xs text-gray-500 hover:text-gray-700 font-medium">
                        {link.label}
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
