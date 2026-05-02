import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
const FileRow = ({ label, helper, optional }) => (
  <div>
    <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
      {label}
      {!optional && <span className='text-[#DC2626]'> *</span>}
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
    {helper && <p className='mt-2 text-[13px] text-[#888888]'>{helper}</p>}
  </div>
)

const AdminDocuments = () => {
  return (
    <EnrollmentStepLayout
      title='Required Documents'
      description='Upload all required documentation'
      backHref='/professional-development/oath'
      nextHref='/professional-development/signature'
      showBack
      footerDivider
    >
      <div className='space-y-8'>
        <FileRow label='CV/Resume' />
        <FileRow
          label='Proof of Previous Leadership Experience'
          helper='Certificates, letters of recommendation, etc.'
        />
        <FileRow
          label='Reference Letters (Optional but Recommended)'
          helper='Letters from previous employers or colleagues'
          optional
        />
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminDocuments
