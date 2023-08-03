import React from 'react'
import { logoBlack } from '../assets'

type Props = {}

const Loading = (props: Props) => {
  return (
    <section className='min-h-[100vh] w-full flex flex-col  items-center justify-center text-black'>
          <div className='h-[100px] w-[200px]'>
              <img src={logoBlack} className='h-full w-full object-cover animate-bounce' alt="" />
          </div>
          <h2 className='text-2xl font-medium mt-20'>Loading, please wait  . . .</h2>
    </section>
  )
}

export default Loading