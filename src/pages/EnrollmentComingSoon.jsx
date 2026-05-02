import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Placeholder enrollment screen (matches Religious / Community / Political leader mocks).
 */
const EnrollmentComingSoon = ({ headline }) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-white px-6 py-16'>
      <div className='w-full max-w-[520px] text-center'>
        <div className='mx-auto mb-10 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#FFE8CC]'>
          <div className='flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FF9800]'>
            <svg className='h-7 w-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
            </svg>
          </div>
        </div>

        <h1 className='text-[28px] font-bold leading-tight text-[#111827] md:text-[34px]'>{headline}</h1>

        <p className='mt-5 text-[17px] leading-relaxed text-[#6B7280]'>
          Complete the form below to join Seekheed UniverCity
        </p>

        <p className='mt-10 text-[15px] leading-relaxed text-[#9CA3AF]'>This enrollment form is coming soon.</p>

        <Link
          to='/'
          className='mt-12 inline-flex items-center justify-center rounded-full border border-[#E0E0E0] bg-[#FAFAFA] px-8 py-3.5 text-[15px] font-semibold text-[#111111] transition-colors hover:bg-[#F0F0F0]'
        >
          Back to Role Selection
        </Link>
      </div>
    </div>
  )
}

export default EnrollmentComingSoon
