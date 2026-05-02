import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const inputClass =
  'w-full rounded-[10px] border border-[#E0E0E0] bg-white px-4 py-3 text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#FF9800] focus:outline-none focus:ring-2 focus:ring-[#FF9800]/20'

const MoonClock = () => (
  <svg className='ml-2 inline-block h-4 w-4 text-[#FF9800]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
    <circle cx='12' cy='12' r='8' />
    <path d='M12 12h6M12 12V6' strokeLinecap='round' />
    <path d='M17 17a7 7 0 01-11-11' strokeLinecap='round' />
  </svg>
)

function Toggle ({ checked, onChange }) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-8 w-[52px] shrink-0 rounded-full transition-colors ${checked ? 'bg-[#FF9800]' : 'bg-[#D1D5DB]'}`}
    >
      <span
        className={`pointer-events-none absolute top-1 h-[24px] w-[24px] rounded-full bg-white shadow transition-[left] ${checked ? 'left-[26px]' : 'left-[4px]'}`}
      />
    </button>
  )
}

const Astrology = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <EnrollmentStepLayout
      title='Optional Profile Enhancement'
      description={'This section is entirely optional. If you\'re interested, we can provide personalized insights based on astrological data.'}
      backHref='/undergraduate/academics'
      nextHref='/undergraduate/verification'
      showBack
      footerDivider
    >
      <div className='rounded-xl border border-[#E4E7EC] bg-[#F4F6F8] p-6 md:p-8'>
        <div className='flex flex-wrap items-start gap-4'>
          <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF9800] text-white shadow-sm'>
            <svg className='h-7 w-7' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
              <path d='M12 2l2.09 6.26L21 10l-5.5 2.92L17.18 20 12 16.77 6.82 20 8.5 12.92 3 10l6.91-1.74z' opacity='0.92' />
            </svg>
          </div>
          <div className='min-w-0 flex-1'>
            <h3 className='text-[17px] font-bold text-[#111111]'>Astrology &amp; Numerology Insights</h3>
            <p className='mt-1 text-[14px] text-[#666666]'>Personalized learning recommendations</p>
          </div>
        </div>

        <div className='mt-6 rounded-xl border border-[#E8EAED] bg-white p-4 shadow-sm'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-3'>
              <span className='text-[20px]' aria-hidden>
                ⭐
              </span>
              <span className='text-[15px] font-semibold text-[#1E40AF]'>Enable astrology-based insights</span>
            </div>
            <Toggle checked={enabled} onChange={setEnabled} />
          </div>
        </div>

        <div className='mt-6 grid gap-5 sm:grid-cols-2'>
          <div>
            <label className='mb-2 flex items-center text-[14px] font-semibold text-[#333333]'>
              Birth Date
              <MoonClock />
            </label>
            <input type='date' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6] disabled:text-[#9CA3AF]`} />
          </div>
          <div>
            <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Time of Birth</label>
            <input type='time' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6]`} />
          </div>
          <div>
            <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>City of Birth</label>
            <input type='text' placeholder='City' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6]`} />
          </div>
          <div>
            <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Country of Birth</label>
            <input type='text' placeholder='Country' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6]`} />
          </div>
        </div>

        <p className='mt-6 border-t border-[#E8EAEC] pt-5 text-[12px] leading-relaxed text-[#888888]'>
          Responses are voluntary, stored minimally, and only used where allowed by Seekheed privacy policy—you may revoke
          this preference before matriculation.
        </p>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Astrology
