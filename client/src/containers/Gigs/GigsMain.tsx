import React from 'react'
import { GigsCard } from '../../components'

type Props = {}

const GigsMain = (props: Props) => {
  return (
    <section className="text-black mt-10 w-[100vw] py-10 px-8  flex flex-col items-start justify-center">
        <span className='font-medium self-start'> 475 developper available</span>
    <div className="w-full max-w-[1400px] flex flex-wrap items-start justify-start">
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
            <GigsCard/>
    </div>
    </section>
  )
}

export default GigsMain