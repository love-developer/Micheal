import React from 'react'
import { Link } from 'react-router-dom'

const ArrowLeft = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
  </svg>
)

const ArrowRight = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
  </svg>
)

/**
 * Main content card + title block + footer nav matching enrollment reference UI.
 */
const EnrollmentStepLayout = ({
  title,
  description,
  children,
  backHref,
  nextHref,
  showBack = true,
  backLabel = 'Back',
  nextLabel = 'Continue',
  progress = null,
  primarySlot = null,
  topRightSlot = null,
  footerDivider = false,
  footerClassName = '',
  titleClassName = ''
}) => {
  return (
    <div className='relative flex min-h-0 flex-1 flex-col'>
      {progress != null && (
        <div className='pointer-events-none absolute right-0 top-0 z-10 flex items-center gap-2 rounded-full bg-[#374151] px-3 py-1.5 text-white shadow-md'>
          <span className='flex h-6 w-6 items-center justify-center rounded-md bg-[#6B7280] text-[9px] font-bold'>
            SJ
          </span>
          <span className='pr-1 text-xs font-medium'>{progress}%</span>
        </div>
      )}

      <div className='rounded-xl border border-[#E8EAED] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] md:p-10'>
        <div
          className={`mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between ${progress != null ? 'pr-24' : ''} ${topRightSlot ? '' : ''}`}
        >
          <div className='max-w-[720px] min-w-0 flex-1'>
            <h2
              className={`text-[24px] font-bold leading-tight text-[#111111] md:text-[28px] ${titleClassName}`.trim()}
            >
              {title}
            </h2>
            {description && <p className='mt-2 text-[15px] leading-relaxed text-[#666666]'>{description}</p>}
          </div>
          {topRightSlot && (
            <div className='shrink-0 self-start sm:ml-4'>{topRightSlot}</div>
          )}
        </div>

        <div>{children}</div>

        {(showBack || nextHref || primarySlot) && (
          <>
            {footerDivider && <div className='my-10 border-t border-[#EAEAEA]' aria-hidden />}
            <div
              className={`flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center ${footerDivider ? '' : 'mt-10'} ${footerClassName}`}
            >
              {showBack && backHref ? (
                <Link
                  to={backHref}
                  className='inline-flex items-center justify-center gap-2 rounded-lg border border-[#E0E0E0] bg-[#FAFAFA] px-5 py-3 text-[15px] font-semibold text-[#333333] transition-colors hover:bg-[#F0F0F0]'
                >
                  <ArrowLeft />
                  {backLabel}
                </Link>
              ) : (
                <span />
              )}
              {primarySlot ? (
                primarySlot
              ) : nextHref ? (
                <Link
                  to={nextHref}
                  className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF9800] px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#F57C00]'
                >
                  {nextLabel}
                  <ArrowRight />
                </Link>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default EnrollmentStepLayout
