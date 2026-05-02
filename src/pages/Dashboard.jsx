import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <div className='flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16'>
    <p className='text-center text-[18px] font-semibold text-[#111111]'>Learner dashboard</p>
    <p className='max-w-md text-center text-[15px] text-[#666666]'>Your personalized dashboard will appear here once your enrollment is approved.</p>
    <Link to='/' className='rounded-lg bg-[#FF9800] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#F57C00]'>
      Back to home
    </Link>
  </div>
)

export default Dashboard
