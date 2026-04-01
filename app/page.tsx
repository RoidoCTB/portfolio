import Link from 'next/link'

const projects = [
  { name: 'Project A', tags: ['React', 'CSS'], color: 'bg-purple-50', desc: 'Lorem ipsum dolor' },
  { name: 'Project B', tags: ['PHP', 'MySQL'], color: 'bg-blue-50', desc: 'Lorem ipsum dolor' },
  { name: 'Project C', tags: ['Vue', 'Node.js'], color: 'bg-green-50', desc: 'Lorem ipsum dolor' },
]

const posts = [
  { title: 'Introduction to PHP', category: 'Web Dev', color: 'bg-purple-50', date: 'March 10, 2025', read: '5 min read', views: '125 views' },
  { title: 'Laravel Guide', category: 'Web Dev', color: 'bg-blue-50', date: 'Feb 5, 2025', read: '4 min read', views: '98 views' },
  { title: 'Why you should use Figma', category: 'Design', color: 'bg-pink-50', date: 'Feb 20, 2025', read: '4 min read', views: '76 views' },
]

const tagColors: Record<string, string> = {
  React: 'bg-blue-100 text-blue-700',
  CSS: 'bg-pink-100 text-pink-700',
  PHP: 'bg-violet-100 text-violet-700',
  MySQL: 'bg-orange-100 text-orange-700',
  Vue: 'bg-green-100 text-green-700',
  'Node.js': 'bg-lime-100 text-lime-700',
}

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="flex" style={{ backgroundColor: '#1a1f2e', minHeight: 260 }}>
        <div className="flex-1 px-10 py-14 flex flex-col justify-center gap-4">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#3B3BF9' }}>
            HELLO, WORLD!
          </p>
          <h1 className="text-3xl font-bold text-white leading-snug">
            Hi, I&apos;m{' '}
            <span style={{ color: '#3B3BF9' }}>Lloyd Hhannes Sanchez</span>
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            A web developer and designer based in Cebu, Philippines, passionate
            about building intuitive and visually engaging digital experiences.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <Link href="/projects" className="px-5 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#3B3BF9' }}>
              View My Work
            </Link>
            <Link href="/about" className="px-5 py-2 rounded-full text-sm font-medium border border-gray-500 text-gray-300 hover:border-gray-300">
              About Me
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center px-10" style={{ minWidth: 200 }}>
          <div className="rounded-xl flex items-center justify-center" style={{ width: 150, height: 180, backgroundColor: '#2a3145' }}>
            <span className="text-gray-500 text-xs">xxx</span>
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="flex border-b border-gray-100 divide-x divide-gray-100">
        {[
          { value: '2+', label: 'Years Learning' },
          { value: '10+', label: 'Projects Built' },
          { value: '5+', label: 'Technologies' },
          { value: 'BSIT', label: 'Degree (ongoing)' },
        ].map(stat => (
          <div key={stat.label} className="flex-1 flex flex-col items-center justify-center py-6 gap-1">
            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            <span className="text-xs text-gray-400">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-8 py-10 border-b border-gray-100">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#3B3BF9' }}>MY WORK</p>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium" style={{ color: '#3B3BF9' }}>See all projects →</Link>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {projects.map(p => (
            <div key={p.name} className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`${p.color} h-36 flex items-center justify-center`}>
                <span className="text-gray-300 text-xs">xxx</span>
              </div>
              <div className="p-4">
                <div className="flex gap-1.5 mb-2 flex-wrap">
                  {p.tags.map(t => (
                    <span key={t} className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${tagColors[t] || 'bg-gray-100 text-gray-600'}`}>{t}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{p.desc}</p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium rounded-full text-white" style={{ backgroundColor: '#3B3BF9' }}>Live Demo</button>
                  <button className="text-xs text-gray-400 hover:text-gray-600">GitHub</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="px-8 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#3B3BF9' }}>MY THOUGHTS</p>
            <h2 className="text-2xl font-semibold text-gray-900">Recent Posts</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium" style={{ color: '#3B3BF9' }}>See all posts →</Link>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {posts.map(post => (
            <div key={post.title} className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`${post.color} h-28 flex items-center justify-center`}>
                <span className="text-gray-300 text-xs">POST IMAGE</span>
              </div>
              <div className="p-4">
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600 mb-2 inline-block">{post.category}</span>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{post.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{post.date} · {post.read} · {post.views}</p>
                <Link href="/blog" className="text-xs font-medium" style={{ color: '#3B3BF9' }}>Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
