import React from 'react'

const AnnouncementBar = () => {
  return (
    <div className='w-full max-w-[446px] min-h-[36px] bg-[#FF96001A] rounded-full mx-auto flex items-center justify-center p-2'>
      <div className='flex items-center justify-center gap-[10px]'>
        <img src="/assets/images/announcement.svg" />
        <p className='text-[14px] text-[#FF9600] font-[500] text-center'>
          Protected by our Constitution and Digital Ethics Framework
        </p>
      </div>
    </div>
  )
}

export default AnnouncementBar
