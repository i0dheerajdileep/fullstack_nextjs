import Image from 'next/image'
import React from 'react'
import fb from '@/assets/fb.png'

function Footer() {
  return (
    <div className='h-[50px] items-center justify-between flex'>
      <div>Copyrights reserved by Dheeraj dileep</div>
      <div className='h-[18px] w-[18px] relative cursor-pointer'>
        <Image src={fb} fill={true}/>
      </div>
    </div>
  )
}

export default Footer
