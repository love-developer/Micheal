import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const AdminDataProtection = () => {
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')

  return (
    <EnrollmentStepLayout
      title='Confidentiality & Data Protection'
      description='Commitment to data privacy'
      backHref='/professional-development/ethics'
      nextHref='/professional-development/security'
      showBack
      footerDivider
    >
      <div className='space-y-5'>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I agree to protect student and teacher data <Req /></span>
        </label>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Have you ever been involved in financial misconduct? <Req />
          </p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='dp-fin'
                checked={q2 === 'yes'}
                onChange={() => setQ2('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='dp-fin'
                checked={q2 === 'no'}
                onChange={() => setQ2('no')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              No
            </label>
          </div>
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Have you ever been removed from a leadership role? <Req />
          </p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='dp-lead'
                checked={q3 === 'yes'}
                onChange={() => setQ3('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='dp-lead'
                checked={q3 === 'no'}
                onChange={() => setQ3('no')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              No
            </label>
          </div>
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminDataProtection
