import React from 'react'
import { SearchHeader,SearchMain } from '../containers'


type Props = {}

const Gigs = () => {
  return (
    <section className='min-h-[100vh] overflow-hidden bg-black'>
          <SearchHeader/>
          <SearchMain/>
    </section>
  )
}

export default Gigs