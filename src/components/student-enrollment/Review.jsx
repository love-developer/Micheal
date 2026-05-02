import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const Chevron = ({ open }) => (
  <svg
    className={`h-5 w-5 shrink-0 text-[#757575] transition-transform ${open ? 'rotate-180' : ''}`}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    aria-hidden
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const DocSubmitIcon = () => (
  <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8} d='M9 13h6M9 17h6M13 4H8a2 2 0 00-2 2v14h12V9l-5-5zM13 4v5h5' />
  </svg>
)

const PencilIcon = () => (
  <svg className='mr-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.232 5.232l3.536 3.536M4 20h5l9.086-9.086a2 2 0 000-2.828l-2.086-2.086a2 2 0 00-2.828 0L4 14v6z' />
  </svg>
)

const SummaryRow = ({ label, value }) => (
  <div className='flex justify-between gap-4 border-b border-[#EFEFEF] py-3 text-[14px] last:border-b-0'>
    <span className='font-medium text-[#888888]'>{label}</span>
    <span className='text-right font-semibold text-[#333333]'>{value}</span>
  </div>
)

const iconWrap = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] text-[#FF9800]'

const sectionsConfig = [
  {
    id: 'identity',
    title: 'Identity Information',
    editPath: '/undergraduate/identity',
    Icon: (
      <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <circle cx='12' cy='8' r='3.5' />
        <path strokeLinecap='round' d='M5 21v-2a7 7 0 0114 0v2' />
      </svg>
    ),
    rows: [
      { label: 'Legal Name', value: 'Not provided' },
      { label: 'Preferred Name', value: 'Not provided' },
      { label: 'Email', value: 'Not provided' },
      { label: 'Phone', value: 'Not provided' },
      { label: 'Location', value: 'Not provided' }
    ]
  },
  {
    id: 'academics',
    title: 'Academic Details',
    editPath: '/undergraduate/academics',
    Icon: (
      <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 18L12 13l7 5M12 13V6M14 18h7v2M3 22h14' />
      </svg>
    ),
    rows: [
      { label: 'Program', value: 'Not selected' },
      { label: 'Previous Education', value: 'Not provided' },
      { label: 'Learning Preferences', value: 'None selected' },
      { label: 'Expected Start', value: 'Not set' }
    ]
  },
  {
    id: 'technology',
    title: 'Technology Access',
    editPath: '/undergraduate/technology',
    Icon: (
      <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
      </svg>
    ),
    rows: [
      { label: 'Internet Access', value: 'Yes' },
      { label: 'Devices', value: 'Laptop / Desktop' }
    ]
  },
  {
    id: 'safety',
    title: 'Safety & Conduct',
    editPath: '/undergraduate/safety',
    Icon: (
      <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4l8 4v6c0 5-8 10-8 10S4 19 4 14V8l8-4z' />
      </svg>
    ),
    rows: [
      { label: 'Digital Conduct', value: 'Agreed' },
      { label: 'Non-Harassment', value: 'Not agreed' },
      { label: 'Protected Zones', value: 'Not acknowledged' }
    ]
  },
  {
    id: 'constitution',
    title: 'Constitutional Agreement',
    editPath: '/undergraduate/constitution',
    Icon: (
      <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M7 8h10M7 12h10M7 16h10M9 21H5l2-2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2l2 2' />
      </svg>
    ),
    rows: [
      { label: 'Constitution Accepted', value: 'No' },
      { label: 'Community Integrity', value: 'Not agreed' },
      { label: 'Signature', value: 'Not signed' }
    ]
  }
]

const Review = () => {
  const navigate = useNavigate()
  const [openId, setOpenId] = useState('identity')

  const submitButton = (
    <button
      type='button'
      onClick={() => navigate('/enrollment-submitted')}
      className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF9800] px-6 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-[#F57C00]'
    >
      Submit Enrollment
      <DocSubmitIcon />
    </button>
  )

  return (
    <EnrollmentStepLayout
      title='Enrollment Summary'
      description='Please review all your information before submitting. You can edit any section by clicking the edit button.'
      backHref='/undergraduate/verification'
      primarySlot={submitButton}
      showBack
      footerDivider
    >
      <div className='space-y-4'>
        {sectionsConfig.map((section) => {
          const open = openId === section.id
          return (
            <div
              key={section.id}
              className='overflow-hidden rounded-xl border border-[#E8EAED] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)]'
            >
              <button
                type='button'
                className='flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[#FAFAFA]'
                onClick={() => setOpenId(open ? '' : section.id)}
                aria-expanded={open}
              >
                <div className={iconWrap}>{section.Icon}</div>
                <span className='flex-1 text-[16px] font-bold text-[#111111]'>{section.title}</span>
                <Chevron open={open} />
              </button>
              {open && (
                <div className='border-t border-[#EFEFEF] px-5 pb-4 pt-0'>
                  <div className='pt-3'>
                    {section.rows.map((row) => (
                      <SummaryRow key={row.label} label={row.label} value={row.value} />
                    ))}
                  </div>
                  <Link
                    to={section.editPath}
                    className='mt-4 inline-flex items-center rounded-lg border border-[#E0E0E0] bg-[#F6F7F9] px-4 py-2 text-[13px] font-semibold text-[#333333] hover:bg-[#EDEEF1]'
                  >
                    <PencilIcon />
                    Edit Section
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </EnrollmentStepLayout>
  )
}

export default Review
