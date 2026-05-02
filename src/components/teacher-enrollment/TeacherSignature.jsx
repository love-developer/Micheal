import React from 'react'
import { useNavigate } from 'react-router-dom'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const TeacherSignature = () => {
  const navigate = useNavigate()
  const today = new Date().toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  const submitBtn = (
    <button
      type='button'
      onClick={() => navigate('/teacher-application-submitted')}
      className='inline-flex items-center justify-center rounded-lg bg-[#FF9800] px-6 py-3 text-[15px] font-bold text-white shadow-sm hover:bg-[#F57C00]'
    >
      Submit Application
    </button>
  )

  return (
    <EnrollmentStepLayout
      title='Electronic Signature'
      description='Complete your application'
      backHref='/graduate/documents'
      primarySlot={submitBtn}
      showBack
      footerDivider
    >
      <div>
        <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
          Full Legal Name (Electronic Signature) <Req />
        </label>
        <input type='text' placeholder='Type your full legal name' className={inputClass} />
        <p className='mt-4 text-[14px] text-[#757575]'>
          Date: <span className='font-medium text-[#333333]'>{today}</span>
        </p>
        <div className='mt-8 rounded-xl border border-[#FFE0B2] bg-[#FFF8F0] px-5 py-4 text-[14px] leading-relaxed text-[#5D4037]'>
          By typing your name above, you certify that all information provided is accurate and agree to the terms and
          conditions of the Seekheed UniverCity teacher program.
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherSignature
