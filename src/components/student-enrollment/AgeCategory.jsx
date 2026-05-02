import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const tiers = [
  {
    id: 'child',
    label: 'Child',
    age: 'Ages 1 – 11',
    desc: 'Requires parental consent and supervision',
    icon: (
      <svg className='h-8 w-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
        <circle cx='12' cy='8' r='3.5' />
        <path d='M6 21v-2a5 5 0 015-5h2a5 5 0 015 5v2M12 13v5' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'teen',
    label: 'Teen',
    age: '12 – 17 years',
    desc: 'Requires parental consent for enrollment',
    icon: (
      <svg className='h-8 w-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
        <circle cx='12' cy='7' r='3.5' />
        <path d='M6.5 21v-1.5a4.5 4.5 0 019 0V21M12 12l-2 4h4l-2 4' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'adult',
    label: 'Adult',
    age: '18+ years',
    desc: 'Full access to all programs and features',
    icon: (
      <svg className='h-8 w-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
        <circle cx='9' cy='7' r='2.75' />
        <circle cx='16' cy='7' r='2.75' />
        <path d='M4 20c1.2-4 4.35-6 8-6s6.8 2 8 6' strokeLinecap='round' />
      </svg>
    )
  }
]

const AgeCategory = () => {
  const [selected, setSelected] = useState('child')

  return (
    <EnrollmentStepLayout
      title='Select Age Category'
      description={"Choose the appropriate category based on the student's age."}
      backHref='/'
      nextHref='/undergraduate/constitution'
      nextLabel='Continue'
      showBack
    >
      <div className='grid gap-4 sm:grid-cols-3'>
        {tiers.map((tier) => {
          const on = selected === tier.id
          return (
            <button
              key={tier.id}
              type='button'
              onClick={() => setSelected(tier.id)}
              className={`flex flex-col items-start rounded-xl border-2 bg-white p-6 text-left transition-all ${
                on
                  ? 'border-[#FF9800] shadow-[0_0_0_3px_rgba(255,152,0,0.15)]'
                  : 'border-[#E0E0E0] hover:border-[#D0D0D0]'
              }`}
            >
              <span
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                  on ? 'bg-[#FFF3E0] text-[#FF9800]' : 'bg-[#F5F5F5] text-[#BDBDBD]'
                }`}
              >
                {tier.icon}
              </span>
              <span className='text-[17px] font-bold text-[#111111]'>{tier.label}</span>
              <span className='mt-1 text-[14px] font-semibold text-[#FF9800]'>{tier.age}</span>
              <p className='mt-2 text-[13px] leading-relaxed text-[#757575]'>{tier.desc}</p>
            </button>
          )
        })}
      </div>
    </EnrollmentStepLayout>
  )
}

export default AgeCategory
