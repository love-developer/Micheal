import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const AdminSecurity = () => {
  const [misconduct, setMisconduct] = useState('')

  return (
    <EnrollmentStepLayout
      title='Digital Security'
      description='Understanding of security responsibilities'
      backHref='/professional-development/data-protection'
      nextHref='/professional-development/oath'
      showBack
      footerDivider
    >
      <div className='space-y-6'>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I understand proper data handling practices <Req /></span>
        </label>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Have you ever been involved in financial misconduct? <Req />
          </p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='sec-fin'
                checked={misconduct === 'yes'}
                onChange={() => setMisconduct('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='sec-fin'
                checked={misconduct === 'no'}
                onChange={() => setMisconduct('no')}
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

export default AdminSecurity
