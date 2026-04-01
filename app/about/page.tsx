const frontendSkills = [
  { name: 'HTML / CSS', percent: 90 },
  { name: 'JavaScript', percent: 75 },
  { name: 'React', percent: 65 },
  { name: 'Tailwind CSS', percent: 85 },
]

const backendSkills = [
  { name: 'PHP / MySQL', percent: 70 },
  { name: 'Figma', percent: 80 },
  { name: 'Git / GitHub', percent: 72 },
  { name: 'Node.js', percent: 55 },
]

const education = [
  {
    period: '2021 – PRESENT',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Cordova Public College · Cordova, Cebu Philippines',
    color: '#3B3BF9',
  },
  {
    period: '2017 – 2019',
    degree: 'Senior High School – ICT Track',
    school: 'Asian Learning Center Lapu-Lapu City, Philippines',
    color: '#3B3BF9',
  },
]

const certificates = [
  { code: 'C1', name: 'CSS NC II', date: 'TESDA · 2025' },
  { code: 'NA', name: 'NA', date: 'Soon' },
  { code: 'NA', name: 'NA', date: 'Soon' },
]

const hobbies = [
  { emoji: '🎨', label: 'Design & Art' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '📚', label: 'Reading' },
  { emoji: '✈️', label: 'Traveling' },
]

function SkillBar({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-700">{name}</span>
        <span className="text-sm font-medium" style={{ color: '#3B3BF9' }}>{percent}%</span>
      </div>
      <div className="h-1 bg-gray-200 rounded-full">
        <div
          className="h-1 rounded-full"
          style={{ width: `${percent}%`, backgroundColor: '#3B3BF9' }}
        />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="px-8 py-10" style={{ backgroundColor: '#1a1f2e' }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#3B3BF9' }}>
          GET TO KNOW ME
        </p>
        <h1 className="text-3xl font-bold text-white">About Me</h1>
      </div>

      {/* Bio */}
      <section className="px-8 py-10 border-b border-gray-100">
        <div className="flex gap-8 items-start">
          <div className="w-32 h-40 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-gray-300 text-xs">xxx</span>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">WHO I AM</p>
            <h2 className="text-xl font-bold mb-3">
              Hi, I'm <span style={{ color: '#3B3BF9' }}>Lloyd Hhannnes Sanchez</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              I'm a web developer and designer based in Cebu, Philippines, with a passion for building intuitive and
              visually engaging digital experiences. I specialize in front-end development with a keen eye for design.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Currently studying BSIT at Cordova Public College. I enjoy turning ideas into fully functional products
              that make an impact on people's lives.
            </p>
            <button
              className="px-5 py-2 text-sm font-medium rounded-full text-white"
              style={{ backgroundColor: '#3B3BF9' }}
            >
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-10 border-b border-gray-100 bg-gray-50">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#3B3BF9' }}>
          WHAT I KNOW
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Tools</h2>
        <div className="grid grid-cols-2 gap-x-12">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">FRONTEND</p>
            {frontendSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">BACKEND & TOOLS</p>
            {backendSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-10 border-b border-gray-100">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#3B3BF9' }}>
          MY BACKGROUND
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="flex flex-col gap-5">
          {education.map(e => (
            <div key={e.degree} className="flex gap-4 items-start">
              <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: '#3B3BF9' }} />
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-400 mb-0.5">{e.period}</p>
                <h3 className="font-semibold text-gray-900 text-sm">{e.degree}</h3>
                <p className="text-xs text-gray-500">{e.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="px-8 py-10 border-b border-gray-100 bg-gray-50">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#3B3BF9' }}>
          CREDENTIALS
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certificates</h2>
        <div className="grid grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white mb-3"
                style={{ backgroundColor: cert.code === 'C1' ? '#3B3BF9' : '#9ca3af' }}
              >
                {cert.code}
              </div>
              <h3 className="font-semibold text-sm text-gray-900">{cert.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="px-8 py-10">
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#3B3BF9' }}>
          OUTSIDE OF WORK
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interests & Hobbies</h2>
        <div className="grid grid-cols-4 gap-4">
          {hobbies.map(h => (
            <div key={h.label} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                {h.emoji}
              </div>
              <span className="text-sm text-gray-600">{h.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
