import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full max-w-[1336px] mx-auto min-h-[90px] flex items-center p-2 px-6'>
                <div className='w-full max-w-[711px] min-h-[58px] flex gap-[16px] flex items-center '>
                    <div className='w-[61px] h-[56px]'>
                        <img src="/assets/images/logo.png" className='w-full h-full object-conver' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[#111111] text-[18px] sm:text-[24px] md:text-[32px] font-bold leading-tight'>Seekheed UniverCity Enrollment Syatem</h1>
                        <p className='text-[#7C8091] text-[14px]'>University Enrollment Path</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[8px] bg-[#FF9600]'></div>
        </div>
    )
}

export default Footer