import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const TeacherIpAgreement = () => {
  const [onlineExp, setOnlineExp] = useState('')

  return (
    <EnrollmentStepLayout
      title='Intellectual Property Agreement'
      description='Content ownership and permissions'
      backHref='/graduate/teaching'
      nextHref='/graduate/background'
      showBack
      footerDivider
    >
      <div className='space-y-5'>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I own the rights to the content I will upload <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I give Seekheed permission to host my course material <Req /></span>
        </label>
        <div className='rounded-lg border border-[#F0F0F0] bg-[#FAFAFA] px-4 py-3'>
          <p className='mb-3 text-[15px] font-medium text-[#333333]'>
            Do you have online teaching experience? <Req />
          </p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] text-[#444444]'>
              <input
                type='radio'
                name='teacher-ip-online'
                checked={onlineExp === 'yes'}
                onChange={() => setOnlineExp('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] text-[#444444]'>
              <input
                type='radio'
                name='teacher-ip-online'
                checked={onlineExp === 'no'}
                onChange={() => setOnlineExp('no')}
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

export default TeacherIpAgreement
