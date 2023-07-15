import React from 'react'
import { ProfileHeader, ProfileMain } from '../containers'

type Props = {}

const NewGigs = (props: Props) => {
  return (
    <div className='bg-white h-full'>
      <ProfileHeader/>
      <ProfileMain/>
    </div>
  )
}

export default NewGigs