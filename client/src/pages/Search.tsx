import React from 'react'
import { GigsHeader,GigsMain } from '../containers'


type Props = {}

const Gigs = (props: Props) => {
  return (
    <section className='min-h-[100vh] bg-black'>
          <GigsHeader/>
          <GigsMain/>
    </section>
  )
}

export default Gigs