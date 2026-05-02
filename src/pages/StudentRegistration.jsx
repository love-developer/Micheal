import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AgeCategory from '../components/student-enrollment/AgeCategory'
import Constitution from '../components/student-enrollment/Constitution'
import Safety from '../components/student-enrollment/Safety'
import Technology from '../components/student-enrollment/Technology'
import Identity from '../components/student-enrollment/Identity'
import Academics from '../components/student-enrollment/Academics'
import Astrology from '../components/student-enrollment/Astrology'
import Verification from '../components/student-enrollment/Verification'
import Review from '../components/student-enrollment/Review'

const steps = [
  { id: 'age-category', title: 'Age Category', subtitle: 'Select Your Age Range', path: '/undergraduate/age-category' },
  { id: 'constitution', title: 'Constitution', subtitle: 'Constitution Agreement', path: '/undergraduate/constitution' },
  { id: 'safety', title: 'Safety', subtitle: 'Safety & Conduct', path: '/undergraduate/safety' },
  { id: 'technology', title: 'Technology', subtitle: 'Technology Requirements', path: '/undergraduate/technology' },
  { id: 'identity', title: 'Identity', subtitle: 'Basic Identity', path: '/undergraduate/identity' },
  { id: 'academics', title: 'Academics', subtitle: 'Academic Details', path: '/undergraduate/academics' },
  { id: 'astrology', title: 'Astrology', subtitle: 'Optional Astrology', path: '/undergraduate/astrology' },
  { id: 'verification', title: 'Verification', subtitle: 'Identity Verification', path: '/undergraduate/verification' },
  { id: 'review', title: 'Review', subtitle: 'Review & Submit', path: '/undergraduate/review' }
]

const CheckIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
  </svg>
)

const StudentRegistration = () => {
  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean).pop()
  const currentStep = steps.some((s) => s.id === segment) ? segment : 'age-category'

  const currentIndex = steps.findIndex((step) => step.id === currentStep)

  const renderStepContent = () => {
    switch (currentStep) {
      case 'age-category':
        return <AgeCategory />
      case 'constitution':
        return <Constitution />
      case 'safety':
        return <Safety />
      case 'technology':
        return <Technology />
      case 'identity':
        return <Identity />
      case 'academics':
        return <Academics />
      case 'astrology':
        return <Astrology />
      case 'verification':
        return <Verification />
      case 'review':
        return <Review />
      default:
        return <AgeCategory />
    }
  }

  return (
    <div className='flex min-h-0 flex-1 flex-col bg-[#F0F2F5]'>
      <div className='mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-6 px-4 py-6 md:flex-row md:gap-8 md:px-8 md:py-8'>
        <aside className='w-full shrink-0 md:w-[308px]'>
          <div className='rounded-xl border border-[#E8EAED] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]'>
            <Link
              to='/'
              className='inline-flex items-center gap-2 text-[14px] font-medium text-[#666666] transition-colors hover:text-[#111111]'
            >
              <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Back to Roles
            </Link>

            <nav className='mt-6 flex flex-col gap-1' aria-label='Enrollment steps'>
              {steps.map((step, index) => {
                const isActive = step.id === currentStep
                const isCompleted = index < currentIndex

                return (
                  <Link
                    key={step.id}
                    to={step.path}
                    className={`flex items-start gap-3 rounded-lg p-3 transition-colors ${
                      isActive
                        ? 'bg-[#FFF3E0]'
                        : 'hover:bg-[#F9FAFB]'
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${
                        isCompleted
                          ? 'bg-[#FF9800] text-white'
                          : isActive
                            ? 'bg-[#FF9800] text-white'
                            : 'bg-[#E5E7EB] text-[#9CA3AF]'
                      }`}
                    >
                      {isCompleted && !isActive ? <CheckIcon /> : index + 1}
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p
                        className={`text-[14px] font-semibold leading-tight ${
                          isActive
                            ? 'text-[#FF9800]'
                            : isCompleted
                              ? 'text-[#FF9800]'
                              : 'text-[#9CA3AF]'
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`mt-0.5 text-[12px] leading-snug ${
                          isActive
                            ? 'text-[#F57C00]'
                            : isCompleted
                              ? 'text-[#6B7280]'
                              : 'text-[#C4C4C4]'
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </nav>
          </div>
        </aside>

        <main className='min-w-0 flex-1'>{renderStepContent()}</main>
      </div>
    </div>
  )
}

export default StudentRegistration
