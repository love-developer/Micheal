import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const agreements = [
  {
    id: 'digital',
    title: 'Digital Code of Conduct *',
    body: `Expectations for respectful online communication, plagiarism-free work, device security, 
    and appropriate use of learning platforms.`,
    Icon: ({ className }) => (
      <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
        <rect x='5' y='11' width='14' height='10' rx='2' />
        <path d='M8 11V7a4 4 0 018 0v4' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'harassment',
    title: 'Non-Harassment Policy *',
    body: `We prohibit harassment based on identity, viewpoint, disability, or any protected characteristic—and 
    require prompt reporting channels for concerns.`,
    Icon: ({ className }) => (
      <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
        <circle cx='9' cy='8' r='2.25' />
        <circle cx='15' cy='8' r='2.25' />
        <path d='M3 20c1.2-3.75 5-5.75 9-5.75 4 0 7.8 2 9 5.75' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'zones',
    title: 'Protected Zones Acknowledgment *',
    body: `Recognition of restorative practices, escalation paths, zero-tolerance behaviors, and safeguards for 
    physical and digital learning zones.`,
    Icon: ({ className }) => (
      <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
        <path d='M12 3 L20 8v10H4V8z' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M12 12v6M9 13h6' strokeLinecap='round' />
      </svg>
    )
  }
]

const Safety = () => {
  const [conduct, setConduct] = useState('no')
  const [selectedPolicy, setSelectedPolicy] = useState('digital')

  return (
    <EnrollmentStepLayout
      title='Community Safety Agreement'
      description={`By continuing, you confirm that Seekheed UniverCity can rely on truthful disclosures regarding 
conduct history and agree to uphold the safety expectations described below.`}
      backHref='/undergraduate/constitution'
      nextHref='/undergraduate/technology'
      nextLabel='Continue'
      progress={63}
      showBack
    >
      <div className='space-y-8'>
        <section className='rounded-xl border border-[#F5E6A3] bg-[#FFFBEB] px-5 py-4'>
          <div className='flex items-start gap-3'>
            <span className='text-xl' aria-hidden>
              ⚠️
            </span>
            <div>
              <h3 className='text-[15px] font-bold text-[#422006]'>Disclosure</h3>
              <p className='mt-2 flex flex-wrap items-center gap-1 text-[14px] text-[#78350f]'>
                Have you ever been dismissed from an educational institution for misconduct?
                <span
                  className='inline-flex h-5 w-5 cursor-help items-center justify-center rounded-full border border-[#D97706] text-[11px] font-bold text-[#B45309]'
                  title='Include academic or behavioral dismissal unless expunged by that institution.'
                >
                  i
                </span>
              </p>
              <div className='mt-3 flex gap-6'>
                <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#422006]'>
                  <input
                    type='radio'
                    name='misconduct-dismissal'
                    checked={conduct === 'no'}
                    onChange={() => setConduct('no')}
                    className='h-4 w-4 accent-[#FF9800]'
                  />
                  No
                </label>
                <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#422006]'>
                  <input
                    type='radio'
                    name='misconduct-dismissal'
                    checked={conduct === 'yes'}
                    onChange={() => setConduct('yes')}
                    className='h-4 w-4 accent-[#FF9800]'
                  />
                  Yes
                </label>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className='mb-4 flex items-center gap-2 text-[16px] font-bold text-[#111111]'>
            <svg className='h-6 w-6 text-[#FF9800]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
              <path d='M12 3 L4 9v11h16V9L12 3z' strokeLinejoin='round' />
            </svg>
            Community agreements
          </h3>

          <div className='grid gap-4 md:grid-cols-3'>
            {agreements.map((a) => {
              const Icon = a.Icon
              const on = selectedPolicy === a.id
              return (
                <button
                  key={a.id}
                  type='button'
                  onClick={() => setSelectedPolicy(a.id)}
                  className={`flex flex-col rounded-xl border-2 bg-white p-5 text-left transition-all ${
                    on
                      ? 'border-[#FF9800] bg-[#FFFBF5] shadow-[0_2px_12px_rgba(255,152,0,0.12)]'
                      : 'border-[#E0E0E0] hover:border-[#D6D6D6]'
                  }`}
                >
                  <div className='flex w-full items-start justify-between gap-2'>
                    <span className='flex items-center gap-2'>
                      <Icon className={`h-6 w-6 ${on ? 'text-[#FF9800]' : 'text-[#BDBDBD]'}`} />
                    </span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                        on ? 'border-[#FF9800] bg-[#FF9800] text-white' : 'border-[#D0D0D0]'
                      }`}
                      aria-hidden
                    >
                      {on ? '✓' : ''}
                    </span>
                  </div>
                  <p className='mt-3 text-[15px] font-bold text-[#111111]'>{a.title}</p>
                  <p className='mt-2 text-[13px] leading-relaxed text-[#757575]'>{a.body}</p>
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Safety
