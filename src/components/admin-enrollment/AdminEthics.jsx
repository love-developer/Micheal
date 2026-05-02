import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const yn = (name, value, setValue) => (
  <div className='flex gap-6'>
    <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] text-[#444444]'>
      <input
        type='radio'
        name={name}
        checked={value === 'yes'}
        onChange={() => setValue('yes')}
        className='h-4 w-4 accent-[#FF9800]'
      />
      Yes
    </label>
    <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] text-[#444444]'>
      <input
        type='radio'
        name={name}
        checked={value === 'no'}
        onChange={() => setValue('no')}
        className='h-4 w-4 accent-[#FF9800]'
      />
      No
    </label>
  </div>
)

const AdminEthics = () => {
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')
  const [q5, setQ5] = useState('')
  const [q6, setQ6] = useState('')
  const [q7, setQ7] = useState('')

  return (
    <EnrollmentStepLayout
      title='Ethics & Governance Questions'
      description='These questions protect the members and the institution'
      backHref='/professional-development/role'
      nextHref='/professional-development/data-protection'
      showBack
      footerDivider
    >
      <div className='mb-6 flex gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#374151]'>
        <span className='text-[#FF9800]' aria-hidden>
          <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.6} d='M12 4l8 4v6c0 5-8 10-8 10S4 19 4 14V8l8-4z' />
          </svg>
        </span>
        <p>Administrators hold significant responsibility. Please answer all questions truthfully.</p>
      </div>

      <div className='space-y-6'>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>Have you ever been involved in financial misconduct?</p>
          {yn('ethics-q1', q1, setQ1)}
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>Have you ever been removed from a leadership role?</p>
          {yn('ethics-q2', q2, setQ2)}
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>Do you have any conflicts of interest that could affect your role?</p>
          {yn('ethics-q3', q3, setQ3)}
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Are you willing to maintain total neutrality and fairness in disputes? <Req />
          </p>
          {yn('ethics-q4', q4, setQ4)}
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Do you agree to follow all provisions of the Seekheed Constitution? <Req />
          </p>
          {yn('ethics-q5', q5, setQ5)}
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Are you prepared to abide by the rules of transparency and accountability? <Req />
          </p>
          {yn('ethics-q6', q6, setQ6)}
        </div>
        <div>
          <p className='mb-2 text-[15px] text-[#333333]'>
            Will you abstain from any abuse of power, favoritism, or discrimination? <Req />
          </p>
          {yn('ethics-q7', q7, setQ7)}
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminEthics
