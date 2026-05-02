import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const AdminOath = () => {
  return (
    <EnrollmentStepLayout
      title='Administrative Oath'
      description='Your solemn commitment to the UniverCity'
      backHref='/professional-development/security'
      nextHref='/professional-development/documents'
      showBack
      footerDivider
    >
      <div className='mb-6 rounded-xl border border-[#E8EAED] bg-[#F4F6F8] px-6 py-5 text-[15px] leading-relaxed text-[#444444]'>
        <p>
          &ldquo;I, <strong className='text-[#111111]'>[Your Name]</strong>, solemnly affirm to uphold and protect the
          Seekheed UniverCity Constitution, to serve the community with honesty, integrity, fairness, and transparency,
          and to safeguard the rights, dignity, and wellbeing of every member. I accept full accountability for my
          actions as an administrator.&rdquo;
        </p>
      </div>

      <div>
        <label className='mb-2 block text-[14px] font-semibold text-[#333333]'>
          Type the oath above in your own words to confirm understanding <Req />
        </label>
        <textarea
          rows={6}
          placeholder='Type the oath here...'
          className={`${inputClass} min-h-[160px] resize-y`}
        />
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminOath
