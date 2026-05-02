import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const TeacherConstitution = () => {
  const [misconduct, setMisconduct] = useState('')
  const [online, setOnline] = useState('')

  return (
    <EnrollmentStepLayout
      title='Constitutional Requirements'
      description='Agreement to institutional policies'
      backHref='/graduate/background'
      nextHref='/graduate/documents'
      showBack
      footerDivider
    >
      <div className='mb-8 rounded-xl border border-[#E8EAED] bg-[#F4F6F8] px-6 py-5 text-[15px] leading-relaxed text-[#444444]'>
        <p className='font-medium text-[#111111]'>“I agree to uphold the Seekheed Constitution, the Teacher Code of Ethics, and academic integrity at all times.”</p>
        <p className='mt-4'>
          “I understand that violating these agreements may result in course removal or expulsion.”
        </p>
      </div>

      <div className='space-y-6'>
        <div>
          <p className='mb-3 text-[15px] font-medium text-[#333333]'>
            Have you ever been removed from a teaching position for misconduct? <Req />
          </p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='const-misconduct'
                checked={misconduct === 'yes'}
                onChange={() => setMisconduct('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='const-misconduct'
                checked={misconduct === 'no'}
                onChange={() => setMisconduct('no')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              No
            </label>
          </div>
        </div>
        <div>
          <p className='mb-3 text-[15px] font-medium text-[#333333]'>
            Do you have online teaching experience? <Req />
          </p>
          <div className='flex gap-6'>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='const-online'
                checked={online === 'yes'}
                onChange={() => setOnline('yes')}
                className='h-4 w-4 accent-[#FF9800]'
              />
              Yes
            </label>
            <label className='inline-flex cursor-pointer items-center gap-2 text-[14px]'>
              <input
                type='radio'
                name='const-online'
                checked={online === 'no'}
                onChange={() => setOnline('no')}
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

export default TeacherConstitution
