import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='w-full max-w-[1336px] mx-auto h-[80px] flex items-center '>
                <div className='w-[711px] h-[58px] flex gap-[16px] flex items-center '>
                    <div className='w-[61px] h-[56px]'>
                        <img src="/assets/images/logo.png" className='w-full h-full object-conver' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-[#111111] text-[32px] font-bold'>Seekheed UniverCity Enrollment Syatem</h1>
                        <p className='text-[#7C8091] text-[14px]'>University Enrollment Path</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer