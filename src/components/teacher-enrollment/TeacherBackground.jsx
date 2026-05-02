import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const TeacherBackground = () => {
  const [misconduct, setMisconduct] = useState('')
  const [online, setOnline] = useState('')

  return (
    <EnrollmentStepLayout
      title='Background & Safety Questions'
      description='These protect the UniverCity community'
      backHref='/graduate/ip-agreement'
      nextHref='/graduate/constitution'
      showBack
      footerDivider
    >
      <div className='mb-6 flex gap-3 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-[14px] text-[#991B1B]'>
        <span className='text-lg' aria-hidden>
          ℹ️
        </span>
        <p>Please answer these questions honestly. Your responses will be verified.</p>
      </div>

      <div className='space-y-6'>
        <div>
          <p className='mb-3 text-[15px] text-[#333333]'>Have you ever been removed from a teaching position for misconduct?</p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='bg-misconduct'
                checked={misconduct === 'yes'}
                onChange={() => setMisconduct('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='bg-misconduct'
                checked={misconduct === 'no'}
                onChange={() => setMisconduct('no')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              No
            </label>
          </div>
        </div>
        <div>
          <p className='mb-3 text-[15px] text-[#333333]'>Do you have online teaching experience?</p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='bg-online-exp'
                checked={online === 'yes'}
                onChange={() => setOnline('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='bg-online-exp'
                checked={online === 'no'}
                onChange={() => setOnline('no')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              No
            </label>
          </div>
        </div>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I agree to treat all students with dignity, equality, and respect <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I agree not to use my position for manipulation or financial exploitation <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[15px] text-[#333333]'>
          <input type='checkbox' className='mt-1 h-4 w-4 rounded accent-[#FF9800]' />
          <span>I agree to maintain confidentiality of student information <Req /></span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherBackground
