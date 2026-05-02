import React from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const PlayLarge = () => (
  <svg className='h-14 w-14 text-[#FF9800]' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
    <path d='M8 5v14l11-7L8 5z' />
  </svg>
)

const PlaySmall = () => (
  <svg className='h-5 w-5 shrink-0 text-[#FF9800]' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
    <path d='M8 5v14l11-7L8 5z' />
  </svg>
)

const constitutionArticles = [
  {
    title: 'Article I – Purpose & Mission',
    body: `Seekheed UniverCity exists to provide rigorous, ethical, and inclusive education that empowers learners 
    to thrive in society. We uphold academic honesty, curiosity, respect for peers, and a commitment to the common good.`
  },
  {
    title: 'Article II – Conduct & Accountability',
    body: `All members contribute to a learning environment free from harassment, discrimination, and intimidation.
    Participation requires honesty in coursework, safeguarding community resources, and following applicable laws and policies.`
  },
  {
    title: 'Article III – Technology & Intellectual Property',
    body: `Use of university systems shall be lawful, respectful of privacy, and aligned with licensing rules. Scholars 
    acknowledge that shared materials belong to creators unless otherwise expressly granted.`
  },
  {
    title: 'Article IV – Amendment & Acceptance',
    body: `The institution may revise this constitution through transparent governance procedures. Enrollment constitutes 
    agreement to abide by the current constitution and accompanying policies.`
  }
]

const Constitution = () => {
  return (
    <EnrollmentStepLayout
      title='Seekheed UniverCity Constitution'
      description='Please watch the welcome video and read our constitution before proceeding.'
      backHref='/undergraduate/age-category'
      nextHref='/undergraduate/safety'
      nextLabel='Continue'
      showBack
    >
      <div className='space-y-6'>
        <a
          href='#video-briefing'
          className='inline-flex items-center gap-2 text-[15px] font-semibold text-[#FF9800] hover:text-[#F57C00]'
        >
          <PlaySmall />
          <span className='underline-offset-4 hover:underline'>Welcome Video & Briefing</span>
        </a>

        <div
          id='video-briefing'
          className='flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#D0D0D0] bg-[#FAFAFA] px-6 py-16 text-center transition-colors hover:border-[#FF9800]/50 hover:bg-[#FFF9F3]'
          role='button'
          tabIndex={0}
        >
          <div className='rounded-full bg-white p-5 shadow-[0_4px_20px_rgba(255,152,0,0.2)]'>
            <PlayLarge />
          </div>
          <p className='mt-4 text-[16px] font-semibold text-[#333333]'>Click to watch the welcome briefing</p>
          <p className='mt-1 text-[13px] text-[#888888]'>(Required before enrollment)</p>
        </div>

        <div className='rounded-xl border border-[#E0E0E0] bg-[#FCFCFC] p-6 md:p-8'>
          <h3 className='text-[18px] font-bold text-[#111111]'>Seekheed UniverCity Constitution</h3>
          <div className='mt-5 space-y-5'>
            {constitutionArticles.map((a) => (
              <article key={a.title}>
                <h4 className='text-[15px] font-bold text-[#333333]'>{a.title}</h4>
                <p className='mt-2 whitespace-pre-line text-[14px] leading-relaxed text-[#666666]'>{a.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className='rounded-xl border border-[#E8EAED] bg-[#F7F8FA] p-5'>
          <p className='mb-3 text-[13px] font-semibold uppercase tracking-wide text-[#757575]'>Acknowledgements</p>
          <div className='space-y-3'>
            {[
              'I have read and understood the Seekheed UniverCity Constitution *',
              'I have watched the complete welcome video briefing *',
              'I affirm that I accept and will abide by the Seekheed UniverCity Constitution *'
            ].map((label) => (
              <label key={label} className='flex cursor-pointer items-start gap-3 text-[14px] text-[#333333]'>
                <input type='checkbox' className='mt-1 h-4 w-4 shrink-0 rounded border-[#C4C4C4] accent-[#FF9800]' />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <p className='mt-3 text-[12px] text-[#888888]'>* Required for continuation</p>
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Constitution
