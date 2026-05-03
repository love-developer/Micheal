import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminIdentity from '../components/admin-enrollment/AdminIdentity'
import AdminRole from '../components/admin-enrollment/AdminRole'
import AdminEthics from '../components/admin-enrollment/AdminEthics'
import AdminDataProtection from '../components/admin-enrollment/AdminDataProtection'
import AdminSecurity from '../components/admin-enrollment/AdminSecurity'
import AdminOath from '../components/admin-enrollment/AdminOath'
import AdminDocuments from '../components/admin-enrollment/AdminDocuments'
import AdminSignature from '../components/admin-enrollment/AdminSignature'

const base = '/professional-development'

const steps = [
  { id: 'identity', title: 'Identity', subtitle: 'Personal details', path: `${base}/identity` },
  { id: 'role', title: 'Role', subtitle: 'Admin responsibilities', path: `${base}/role` },
  { id: 'ethics', title: 'Ethics', subtitle: 'Code of conduct', path: `${base}/ethics` },
  { id: 'data-protection', title: 'Data Protection', subtitle: 'Privacy agreement', path: `${base}/data-protection` },
  { id: 'security', title: 'Security', subtitle: 'System responsibility', path: `${base}/security` },
  { id: 'oath', title: 'Oath', subtitle: 'Service commitment', path: `${base}/oath` },
  { id: 'documents', title: 'Documents', subtitle: 'Upload files', path: `${base}/documents` },
  { id: 'signature', title: 'Signature', subtitle: 'Final consent', path: `${base}/signature` }
]

const CheckIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
  </svg>
)

const AdminRegistration = () => {
  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean).pop()
  const currentStep = steps.some((s) => s.id === segment) ? segment : 'identity'
  const currentIndex = steps.findIndex((step) => step.id === currentStep)

  const renderStepContent = () => {
    switch (currentStep) {
      case 'identity':
        return <AdminIdentity />
      case 'role':
        return <AdminRole />
      case 'ethics':
        return <AdminEthics />
      case 'data-protection':
        return <AdminDataProtection />
      case 'security':
        return <AdminSecurity />
      case 'oath':
        return <AdminOath />
      case 'documents':
        return <AdminDocuments />
      case 'signature':
        return <AdminSignature />
      default:
        return <AdminIdentity />
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

            <nav className='mt-6 flex flex-col gap-1' aria-label='Administrator application steps'>
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

export default AdminRegistration
