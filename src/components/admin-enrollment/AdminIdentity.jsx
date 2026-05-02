import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const FileRow = () => (
  <div>
    <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
      Government ID (Required) <Req />
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
    <p className='mt-2 text-[13px] text-[#888888]'>Upload a clear photo of your government-issued ID</p>
  </div>
)

const AdminIdentity = () => {
  return (
    <EnrollmentStepLayout
      title='Identity Verification'
      description='Administrator verification requires thorough documentation'
      backHref='/'
      nextHref='/professional-development/role'
      showBack
      footerDivider
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <div>
          <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
            Full Legal Name <Req />
          </label>
          <input type='text' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>Preferred Name</label>
          <input type='text' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
            Email <Req />
          </label>
          <input type='email' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
            Country of Residence <Req />
          </label>
          <input type='text' className={inputClass} />
        </div>
      </div>

      <div className='mt-6'>
        <FileRow />
      </div>

      <div className='mt-8 rounded-xl bg-[#F4F6F8] px-5 py-4 text-[14px] leading-relaxed text-[#555555]'>
        Background screening approval will be conducted after initial review.
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminIdentity
