import React from 'react'
import Image from 'next/image'
import Hero  from '../assets/hero.png'

function Home() {
  return (
    <div className='flex items-center gap-[100px]'>
      <div className='flex flex-col gap-[50px]'>
      <h1 className="text-7xl font-bold" style={{ fontSize: '72px', background: 'linear-gradient(to bottom, #194c33, #bbb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Better design <br/>for your digital <br/>products</h1>
        <p className=' text-lg'>Turn your ideas into reality.We bring together <br/>the teams from the global tech industry</p>
        <button className='cursor-pointer p-[20px] bg-[#53c28b] max-w-max text-md font-bold text-white  border-none rounded-md'>See our works</button>
      </div>
      <div>
        <Image src={Hero} alt="" className='w-full h-[500px] object-cover'/>
      </div>
    </div>
  )
}

export default Home
