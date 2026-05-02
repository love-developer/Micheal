import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const Req = () => <span className='text-[#DC2626]'> *</span>

const inputClass =
  'w-full rounded-[10px] border border-[#E0E0E0] bg-white px-4 py-3 text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#FF9800] focus:outline-none focus:ring-2 focus:ring-[#FF9800]/20'

const selectClass = `${inputClass} appearance-none pr-10`

const ChevronDown = () => (
  <svg className='pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#757575]' viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const SectionTitle = ({ children }) => (
  <h3 className='mb-2 text-[16px] font-bold text-[#111111]'>{children}</h3>
)

const learningStyles = [
  {
    id: 'visual',
    title: 'Visual',
    desc: 'Learn best with images and diagrams',
    Icon: ({ on }) => (
      <svg className={`h-7 w-7 ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M4 7h16M4 12h10M4 17h14' strokeLinecap='round' />
        <rect x='14' y='9' width='6' height='8' rx='1' />
      </svg>
    )
  },
  {
    id: 'audio',
    title: 'Audio',
    desc: 'Prefer lectures, discussion, and listening',
    Icon: ({ on }) => (
      <svg className={`h-7 w-7 ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M5 10v4a2 2 0 002 2h2l4 3V5l-4 3H7a2 2 0 00-2 2z' strokeLinejoin='round' />
        <path d='M17 9a4 4 0 010 6M19 7a7 7 0 010 10' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'kinesthetic',
    title: 'Kinesthetic',
    desc: 'Hands-on practice and movement help you retain content',
    Icon: ({ on }) => (
      <svg className={`h-7 w-7 ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M12 4v4M8 8l4 4 4-4M8 16h8M9 12v7M15 12v7' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'mixed',
    title: 'Mixed',
    desc: 'Blend of modalities depending on topic',
    Icon: ({ on }) => (
      <svg className={`h-7 w-7 ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M8 8h8v8H8zM4 12h4M16 12h4M12 4v4M12 16v4' strokeLinecap='round' />
      </svg>
    )
  }
]

const Academics = () => {
  const [prefs, setPrefs] = useState(() => new Set())

  const togglePref = (id) => {
    setPrefs((p) => {
      const n = new Set(p)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  }

  return (
    <EnrollmentStepLayout
      title='Academic Intent'
      description='Tell us about your academic goals and learning style so we can personalize your experience.'
      backHref='/undergraduate/identity'
      nextHref='/undergraduate/astrology'
      showBack
      footerDivider
    >
      <div className='space-y-10'>
        <section>
          <SectionTitle>Program Selection</SectionTitle>
          <div className='mt-5 grid gap-5 md:grid-cols-2'>
            <div className='relative'>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Program / Area of Study <Req />
              </label>
              <select className={selectClass}>
                <option value=''>Select your program</option>
                <option value='cs'>Science & Emerging Technology</option>
                <option value='biz'>Business & Entrepreneurship</option>
                <option value='arts'>Arts, Culture & Humanities</option>
                <option value='health'>Health & Community Impact</option>
              </select>
              <ChevronDown />
            </div>
            <div className='relative'>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Previous Education Level <Req />
              </label>
              <select className={selectClass}>
                <option value=''>Select education level</option>
                <option value='secondary'>Secondary / High school</option>
                <option value='some-college'>Some college</option>
                <option value='undergrad'>Completed undergraduate degree</option>
              </select>
              <ChevronDown />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Learning Preferences</SectionTitle>
          <p className='mb-5 text-[14px] text-[#757575]'>Select all that apply to help us customize your learning experience.</p>
          <div className='grid gap-4 sm:grid-cols-2'>
            {learningStyles.map(({ id, title, desc, Icon }) => {
              const on = prefs.has(id)
              return (
                <button
                  key={id}
                  type='button'
                  onClick={() => togglePref(id)}
                  className={`flex gap-4 rounded-xl border-2 bg-white p-5 text-left transition-all ${
                    on ? 'border-[#FF9800]' : 'border-[#E0E0E0] hover:border-[#D8D8D8]'
                  }`}
                >
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                      on ? 'border-[#FF9800] bg-[#FF9800] text-white' : 'border-[#D1D5DB]'
                    }`}
                    aria-hidden
                  >
                    {on ? '✓' : ''}
                  </span>
                  <div className='min-w-0 flex-1'>
                    <Icon on={on} />
                    <p className='mt-2 text-[15px] font-bold text-[#111111]'>{title}</p>
                    <p className='mt-1 text-[13px] leading-relaxed text-[#757575]'>{desc}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        <section>
          <SectionTitle>Start Date</SectionTitle>
          <div className='mt-4 max-w-[320px]'>
            <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
              Expected Start Date <Req />
            </label>
            <input type='text' placeholder='mm/dd/yyyy' className={inputClass} />
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Academics
