import React from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const inputClass =
  'w-full rounded-[10px] border border-[#E0E0E0] bg-white px-4 py-3 text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#FF9800] focus:outline-none focus:ring-2 focus:ring-[#FF9800]/20'

const UploadTile = ({ label, helper, buttonLabel, iconSvg }) => (
  <div>
    <p className='mb-2 text-[14px] font-semibold text-[#333333]'>{label}</p>
    <div className='flex flex-col items-center rounded-xl border-2 border-dashed border-[#D8D8D8] bg-[#FAFAFA] px-6 py-10'>
      <div className='mb-3 text-[#FF9800]' aria-hidden>
        {iconSvg}
      </div>
      <p className='text-center text-[14px] font-medium text-[#555555]'>Drag &amp; drop or click to upload</p>
      <button
        type='button'
        className='mt-4 rounded-lg border border-[#E0E0E0] bg-white px-4 py-2.5 text-[14px] font-semibold text-[#444444] shadow-sm hover:bg-[#F9F9F9]'
      >
        {buttonLabel}
      </button>
    </div>
    <p className='mt-2 text-center text-[12px] leading-snug text-[#888888]'>{helper}</p>
  </div>
)

const Verification = () => {
  return (
    <EnrollmentStepLayout
      title='Identity Confirmation'
      description='This step is optional but helps verify your identity and speeds up the enrollment process.'
      backHref='/undergraduate/astrology'
      nextHref='/undergraduate/review'
      showBack
      footerDivider
    >
      <div className='space-y-10'>
        <section>
          <h3 className='text-[16px] font-bold text-[#111111]'>Document Upload (Optional)</h3>
          <div className='mt-5 grid gap-8 md:grid-cols-2'>
            <UploadTile
              label='Government ID'
              helper='Passport, driver&apos;s license, or national ID'
              buttonLabel='Choose File'
              iconSvg={
                <svg className='mx-auto h-10 w-10' fill='none' stroke='currentColor' strokeWidth={1.4} viewBox='0 0 24 24'>
                  <path d='M12 5v14M12 5l4 4M12 5L8 9' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              }
            />
            <UploadTile
              label='Selfie Photo'
              helper='Clear photo of your face for verification'
              buttonLabel='Take Photo'
              iconSvg={
                <svg className='mx-auto h-10 w-10' fill='none' stroke='currentColor' strokeWidth={1.4} viewBox='0 0 24 24'>
                  <circle cx='12' cy='10' r='3.5' />
                  <path d='M5 21v-2a5 5 0 015-5h4a5 5 0 015 5v2' strokeLinecap='round' />
                </svg>
              }
            />
          </div>
        </section>

        <section>
          <h3 className='mb-5 flex items-center gap-2 text-[16px] font-bold text-[#111111]'>
            <svg className='h-6 w-6 text-[#FF9800]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.65} aria-hidden>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>
            Emergency Contact
          </h3>
          <div className='grid gap-5 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Contact Name</label>
              <input type='text' placeholder='Full name' className={inputClass} />
            </div>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Contact Phone</label>
              <input type='tel' placeholder='+1 (555) 000-0000' className={inputClass} />
            </div>
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Verification
