import React from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const Req = () => <span className='text-[#DC2626]'> *</span>

const inputClass =
  'w-full rounded-[10px] border border-[#E0E0E0] bg-white px-4 py-3 text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#FF9800] focus:outline-none focus:ring-2 focus:ring-[#FF9800]/20'

const ChevronDown = () => (
  <svg className='pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#757575]' viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const ProfileMenu = () => (
  <button
    type='button'
    className='flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-white py-1 pl-1 pr-2 shadow-sm'
    aria-label='Profile menu'
  >
    <span className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFE0B2] to-[#FFCC80] text-[12px] font-bold text-[#E65100]'>
      SJ
    </span>
    <ChevronDown />
  </button>
)

const SectionTitle = ({ children }) => (
  <h3 className='mb-5 border-b border-[#F0F0F0] pb-3 text-[16px] font-bold text-[#111111]'>{children}</h3>
)

const Identity = () => {
  return (
    <EnrollmentStepLayout
      title='Student Identity Profile'
      description={'Please provide your basic identity information. This will be used to create your student profile.'}
      backHref='/undergraduate/technology'
      nextHref='/undergraduate/academics'
      showBack
      topRightSlot={<ProfileMenu />}
    >
      <div className='space-y-10'>
        <section>
          <SectionTitle>Personal Information</SectionTitle>
          <div className='grid gap-5 md:grid-cols-2'>
            <div className='md:col-span-2'>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Legal Name <Req />
              </label>
              <input type='text' placeholder='Enter full legal name' className={inputClass} />
            </div>
            <div className='md:col-span-2'>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Preferred Name</label>
              <input type='text' placeholder='How should we address you?' className={inputClass} />
            </div>
            <div className='md:col-span-2'>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Date of Birth <Req />
              </label>
              <input type='date' className={inputClass} />
            </div>
            <div className='relative md:col-span-2'>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Gender / Identity (Optional)</label>
              <select className={`${inputClass} appearance-none pr-11`}>
                <option value=''>Select if you&apos;d like</option>
                <option value='woman'>Woman</option>
                <option value='man'>Man</option>
                <option value='non-binary'>Non-binary</option>
                <option value='prefer-not'>Prefer not to say</option>
              </select>
              <ChevronDown />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Contact Information</SectionTitle>
          <div className='grid gap-5 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Email Address <Req />
              </label>
              <input type='email' placeholder='you@example.com' className={inputClass} />
            </div>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Phone Number <Req />
              </label>
              <input type='tel' placeholder='+1 (555) 000-0000' className={inputClass} />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Location</SectionTitle>
          <div className='grid gap-5 md:grid-cols-3'>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                City <Req />
              </label>
              <input type='text' placeholder='City' className={inputClass} />
            </div>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>State / Province</label>
              <input type='text' placeholder='State / Province' className={inputClass} />
            </div>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
                Country <Req />
              </label>
              <input type='text' placeholder='Country' className={inputClass} />
            </div>
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Identity
