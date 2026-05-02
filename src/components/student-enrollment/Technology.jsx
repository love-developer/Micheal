import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const WifiIcon = ({ className }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.6} aria-hidden>
    <path d='M5 11.5C8.5 8 15.5 8 19 11.5' strokeLinecap='round' />
    <path d='M8 14c2.5-2 7.5-2 10 0' strokeLinecap='round' />
    <path d='M11 16.5h2M12 20a2 2 0 012-2' strokeLinecap='round' />
  </svg>
)

const LaptopIcon = ({ active }) => (
  <svg
    className={`h-9 w-9 ${active ? 'text-[#FF9800]' : 'text-[#BDBDBD]'}`}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.4}
    aria-hidden
  >
    <rect x='3' y='4' width='18' height='12' rx='2' />
    <path d='M2 17h20' strokeLinecap='round' />
    <path d='M8 21h8' strokeLinecap='round' />
  </svg>
)

const TabletIcon = ({ active }) => (
  <svg
    className={`h-9 w-9 ${active ? 'text-[#FF9800]' : 'text-[#BDBDBD]'}`}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.4}
    aria-hidden
  >
    <rect x='5' y='2' width='14' height='20' rx='2' />
    <path d='M12 17h.01' strokeLinecap='round' />
  </svg>
)

const PhoneIcon = ({ active }) => (
  <svg
    className={`h-9 w-9 ${active ? 'text-[#FF9800]' : 'text-[#BDBDBD]'}`}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.4}
    aria-hidden
  >
    <rect x='8' y='2' width='8' height='20' rx='2' />
    <path d='M12 18h.01' strokeLinecap='round' />
  </svg>
)

function Toggle ({ checked, onChange, labelledBy }) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-8 w-[52px] shrink-0 cursor-pointer rounded-full transition-colors ${checked ? 'bg-[#FF9800]' : 'bg-[#D1D5DB]'}`}
    >
      <span
        className={`pointer-events-none absolute top-1 h-[24px] w-[24px] rounded-full bg-white shadow transition-[left] ${checked ? 'left-[26px]' : 'left-[4px]'}`}
      />
    </button>
  )
}

const Technology = () => {
  const [internet, setInternet] = useState(true)
  const [devices, setDevices] = useState(() => new Set(['laptop']))

  const toggleDevice = (id) => {
    setDevices((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const deviceOptions = [
    { id: 'laptop', label: 'Laptop / Desktop', Icon: LaptopIcon },
    { id: 'tablet', label: 'Tablet', Icon: TabletIcon },
    { id: 'phone', label: 'Mobile Phone', Icon: PhoneIcon }
  ]

  return (
    <EnrollmentStepLayout
      title='Learning Access Check'
      description='Help us understand your technology setup so we can optimize your learning experience.'
      backHref='/undergraduate/safety'
      nextHref='/undergraduate/identity'
      showBack
      footerDivider
    >
      <div className='space-y-10'>
        <section>
          <h3 className='text-[16px] font-bold text-[#111111]'>Internet Access</h3>
          <div className='mt-3 flex items-center gap-4 rounded-xl bg-[#F3F4F6] px-5 py-4'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm'>
              <WifiIcon className='h-6 w-6 text-[#FF9800]' />
            </div>
            <div className='min-w-0 flex-1'>
              <p id='internet-label' className='text-[15px] font-bold text-[#222222]'>
                Do you have reliable internet access?
              </p>
              <p className='mt-1 text-[14px] text-[#757575]'>
                {internet ? 'Great! You\'re all set for online learning.' : 'You can still enroll—support can suggest offline alternatives.'}
              </p>
            </div>
            <Toggle labelledBy='internet-label' checked={internet} onChange={setInternet} />
          </div>
        </section>

        <section>
          <h3 className='text-[16px] font-bold text-[#111111]'>Available Devices</h3>
          <p className='mt-2 max-w-[640px] text-[14px] leading-relaxed text-[#757575]'>
            Select all devices you&apos;ll use for learning. This helps us optimize content delivery.
          </p>
          <div className='mt-5 grid gap-4 sm:grid-cols-3'>
            {deviceOptions.map(({ id, label, Icon }) => {
              const selected = devices.has(id)
              return (
                <button
                  key={id}
                  type='button'
                  onClick={() => toggleDevice(id)}
                  className={`relative flex flex-col rounded-xl border-2 bg-white p-6 text-left transition-all ${
                    selected
                      ? 'border-[#FF9800] bg-[#FFF8F0]'
                      : 'border-[#E0E0E0] hover:border-[#D0D0D0]'
                  }`}
                >
                  <span
                    className={`mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full ${selected ? 'bg-[#FFF3E0]' : 'bg-[#F5F5F5]'}`}
                  >
                    <Icon active={selected} />
                  </span>
                  <span className='text-[15px] font-bold text-[#111111]'>{label}</span>
                  <span
                    className={`mt-6 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm ${
                      selected
                        ? 'border-[#FF9800] bg-[#FF9800] text-white'
                        : 'border-[#D0D0D0] text-transparent'
                    }`}
                    aria-hidden
                  >
                    {selected ? '✓' : ''}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Technology
