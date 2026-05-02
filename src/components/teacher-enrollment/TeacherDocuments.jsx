import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const FileRow = ({ label, required }) => (
  <div>
    <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
      {label}
      {required && <span className='text-[#DC2626]'> *</span>}
    </label>
    <div className='flex overflow-hidden rounded-[10px] border border-[#E0E0E0]'>
      <button
        type='button'
        className='shrink-0 bg-[#FF9800] px-4 py-3 text-[14px] font-semibold text-white hover:bg-[#F57C00]'
      >
        Choose File
      </button>
      <span className='flex flex-1 items-center bg-[#F3F4F6] px-4 text-[14px] text-[#888888]'>No file chosen</span>
    </div>
  </div>
)

const TeacherDocuments = () => {
  return (
    <EnrollmentStepLayout
      title='Required Documents'
      description='Please upload the following documents'
      backHref='/graduate/constitution'
      nextHref='/graduate/signature'
      showBack
      footerDivider
    >
      <div className='space-y-8'>
        <div>
          <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
            ID Verification <Req />
          </label>
          <div className='flex flex-col items-center rounded-xl border-2 border-dashed border-[#D8D8D8] bg-[#FAFAFA] px-6 py-10'>
            <svg className='mb-3 h-10 w-10 text-[#FF9800]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 5v14M12 5l4 4M12 5L8 9' />
            </svg>
            <p className='text-center text-[14px] font-medium text-[#555555]'>Drag &amp; drop or click to upload</p>
            <button
              type='button'
              className='mt-4 rounded-lg border border-[#E0E0E0] bg-white px-4 py-2.5 text-[14px] font-semibold text-[#444444] shadow-sm'
            >
              Choose File
            </button>
          </div>
          <p className='mt-2 text-center text-[12px] text-[#888888]'>
            Passport, driver&apos;s license, or national ID
          </p>
        </div>

        <div className='space-y-5'>
          <FileRow label='CV/Resume' required />
          <FileRow label='Sample Lesson (PDF or Video)' required />
          <FileRow label='Proof of Qualification (Degree or Certificate)' required />
        </div>

        <div className='border-t border-[#EFEFEF] pt-8'>
          <h3 className='mb-4 text-[16px] font-bold text-[#111111]'>Optional: Astrology Profile Input</h3>
          <div className='grid gap-5 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Birth Date</label>
              <input type='date' className={inputClass} />
            </div>
            <div>
              <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Birth Name (for numerology)</label>
              <input type='text' placeholder='Legal name at birth' className={inputClass} />
            </div>
          </div>
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherDocuments
