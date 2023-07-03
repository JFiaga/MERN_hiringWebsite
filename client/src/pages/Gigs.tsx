import React from 'react'
import { GigsHeader,GigsMain } from '../containers'


type Props = {}

const Gigs = (props: Props) => {
  return (
    <div className='text-white bg-black w-[100vw]'>
          <GigsHeader/>
          <GigsMain/>
    </div>
  )
}

export default Gigs