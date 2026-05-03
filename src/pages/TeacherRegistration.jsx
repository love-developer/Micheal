import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import TeacherPersonal from '../components/teacher-enrollment/TeacherPersonal'
import TeacherProfessional from '../components/teacher-enrollment/TeacherProfessional'
import TeacherTeaching from '../components/teacher-enrollment/TeacherTeaching'
import TeacherIpAgreement from '../components/teacher-enrollment/TeacherIpAgreement'
import TeacherBackground from '../components/teacher-enrollment/TeacherBackground'
import TeacherConstitution from '../components/teacher-enrollment/TeacherConstitution'
import TeacherDocuments from '../components/teacher-enrollment/TeacherDocuments'
import TeacherSignature from '../components/teacher-enrollment/TeacherSignature'

const steps = [
  { id: 'personal', title: 'Personal', subtitle: 'Personal details', path: '/graduate/personal' },
  { id: 'professional', title: 'Professional', subtitle: 'Work details', path: '/graduate/professional' },
  { id: 'teaching', title: 'Teaching', subtitle: 'Teaching info', path: '/graduate/teaching' },
  { id: 'ip-agreement', title: 'IP Agreement', subtitle: 'Content rights', path: '/graduate/ip-agreement' },
  { id: 'background', title: 'Background', subtitle: 'Verification info', path: '/graduate/background' },
  { id: 'constitution', title: 'Constitution', subtitle: 'Accept rules', path: '/graduate/constitution' },
  { id: 'documents', title: 'Documents', subtitle: 'Upload files', path: '/graduate/documents' },
  { id: 'signature', title: 'Signature', subtitle: 'Final consent', path: '/graduate/signature' }
]

const CheckIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
  </svg>
)

const TeacherRegistration = () => {
  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean).pop()
  const currentStep = steps.some((s) => s.id === segment) ? segment : 'personal'
  const currentIndex = steps.findIndex((step) => step.id === currentStep)

  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal':
        return <TeacherPersonal />
      case 'professional':
        return <TeacherProfessional />
      case 'teaching':
        return <TeacherTeaching />
      case 'ip-agreement':
        return <TeacherIpAgreement />
      case 'background':
        return <TeacherBackground />
      case 'constitution':
        return <TeacherConstitution />
      case 'documents':
        return <TeacherDocuments />
      case 'signature':
        return <TeacherSignature />
      default:
        return <TeacherPersonal />
    }
  }

  return (
    <div className='flex min-h-0 flex-1 flex-col'>
      <div className='mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-[34px] px-4 py-6 md:flex-row md:gap-8 md:px-8 md:py-8'>
        <aside className='w-full shrink-0 md:w-[288px]'>
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

            <nav className='mt-6 flex flex-col gap-1' aria-label='Teacher application steps'>
              {steps.map((step, index) => {
                const isActive = step.id === currentStep
                const isCompleted = index < currentIndex

                return (
                  <Link
                    key={step.id}
                    to={step.path}
                    className={`flex items-start gap-3 rounded-lg p-3 transition-colors ${
                      isActive ? 'bg-[#FFF3E0]' : 'hover:bg-[#F9FAFB]'
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

export default TeacherRegistration
