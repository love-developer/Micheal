import React from 'react'
import { Link } from 'react-router-dom'

const ClockIcon = () => (
  <svg className='mr-2 h-4 w-4 text-[#FF9800]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <circle cx='12' cy='12' r='9' strokeWidth={1.8} />
    <path strokeLinecap='round' strokeWidth={1.8} d='M12 7v5l3 2' />
  </svg>
)

const ApplicationSuccess = ({
  title = 'Enrollment Submitted!',
  thankYou = 'Thank you for completing your enrollment application.',
  reviewNote = 'Our team will review your application and get back to you within 2-3 business days.'
}) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center px-6 py-16'>
      <div className='w-full max-w-[480px] text-center'>
        <div className='mx-auto mb-8 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#FFE8CC]'>
          <div className='flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FF9800]'>
            <svg className='h-7 w-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
            </svg>
          </div>
        </div>

        <h1 className='text-[30px] font-bold leading-tight text-[#111827] md:text-[34px]'>{title}</h1>

        <p className='mt-4 text-[17px] leading-relaxed text-[#6B7280]'>{thankYou}</p>

        <div className='mt-8 flex justify-center'>
          <span className='inline-flex items-center rounded-full border border-[#FFD8A8] bg-[#FFF7ED] px-4 py-2 text-[14px] font-semibold text-[#EA580C]'>
            <ClockIcon />
            Pending Review
          </span>
        </div>

        <p className='mt-8 text-[14px] leading-relaxed text-[#9CA3AF]'>{reviewNote}</p>

        <div className='mt-12 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4'>
          <Link
            to='/'
            className='inline-flex items-center justify-center rounded-lg border border-[#E0E0E0] bg-white px-6 py-3 text-[15px] font-semibold text-[#374151] transition-colors hover:bg-[#FAFAFA]'
          >
            Return Home
          </Link>
          <Link
            to='/dashboard'
            className='inline-flex items-center justify-center rounded-lg bg-[#FF9800] px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#F57C00]'
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSuccess
