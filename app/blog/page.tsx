const featured = {
  title: 'Introduction to PHP',
  tags: ['Featured', 'Web Dev'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: 'March 10, 2025',
  readTime: '5 min read',
  views: '125 views',
  color: 'bg-purple-50',
}

const recentArticles = [
  { title: 'Laravel Guide', category: 'Web Dev', desc: 'Lorem ipsum dolor', date: 'Feb 5, 2025', readTime: '4 min', color: 'bg-blue-50' },
  { title: 'Why you should use Figma', category: 'Design', desc: 'Lorem ipsum dolor', date: 'Feb 20, 2025', readTime: '4 min', color: 'bg-pink-50' },
  { title: 'Why focusing on one language matters', category: 'Tips', desc: 'Lorem ipsum dolor', date: 'Feb 12, 2025', readTime: '3 min', color: 'bg-yellow-50' },
  { title: 'Why you should become a developer', category: 'Career', desc: 'Lorem ipsum dolor', date: 'Jan 28, 2025', readTime: '6 min', color: 'bg-green-50' },
  { title: 'How to setup XAMPP', category: 'Tutorial', desc: 'Lorem ipsum dolor', date: 'Jan 15, 2025', readTime: '5 min', color: 'bg-violet-50' },
  { title: 'My thoughts about PHP', category: 'Opinion', desc: 'Lorem ipsum dolor', date: 'Jan 2, 2025', readTime: '4 min', color: 'bg-gray-100' },
]

const categoryColors: Record<string, string> = {
  'Web Dev': 'bg-blue-100 text-blue-700',
  'Design': 'bg-pink-100 text-pink-700',
  'Tips': 'bg-yellow-100 text-yellow-700',
  'Career': 'bg-green-100 text-green-700',
  'Tutorial': 'bg-violet-100 text-violet-700',
  'Opinion': 'bg-gray-100 text-gray-600',
  'Featured': 'bg-blue-600 text-white',
}

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <div className="px-8 py-10" style={{ backgroundColor: '#1a1f2e' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#3B3BF9' }}>
          MY THOUGHTS
        </p>
        <h1 className="text-3xl font-bold text-white">Blog</h1>
      </div>

      <div className="px-8 py-8 bg-gray-50">
        {/* Featured Article */}
        <section className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">FEATURED ARTICLE</p>
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex gap-0">
            <div className={`${featured.color} w-52 flex-shrink-0 flex items-center justify-center`}>
              <span className="text-gray-300 text-xs">FEATURED IMAGE</span>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="flex gap-2 mb-3">
                {featured.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-3 py-0.5 text-xs font-medium rounded-full ${categoryColors[tag] || 'bg-gray-100 text-gray-600'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{featured.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{featured.desc}</p>
              <p className="text-xs text-gray-400 mb-4">
                {featured.date} · {featured.readTime} · {featured.views}
              </p>
              <button
                className="w-fit px-5 py-2 text-sm font-medium rounded-full text-white flex items-center gap-1"
                style={{ backgroundColor: '#3B3BF9' }}
              >
                Read More →
              </button>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">LATEST WRITING</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Articles</h2>
          <div className="grid grid-cols-3 gap-5">
            {recentArticles.map(article => (
              <div
                key={article.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`${article.color} h-36 flex items-center justify-center`}>
                  <span className="text-gray-300 text-xs tracking-wider">POST IMAGE</span>
                </div>
                <div className="p-4">
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'} mb-2 inline-block`}>
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">{article.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{article.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.date} · {article.readTime}</span>
                    <button className="text-xs font-medium" style={{ color: '#3B3BF9' }}>
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
