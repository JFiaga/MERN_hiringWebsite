import React from 'react'
import { GigsHeader,GigsMain } from '../containers'


type Props = {}

const Gigs = (props: Props) => {
  return (
    <div className='text-black'>
          <GigsHeader/>
          <GigsMain/>
    </div>
  )
}

export default Gigs