import React from 'react'
import { ProfileHeader, ProfileMain } from '../containers'
import { AddExperience } from '../components'

type Props = {}

const NewGigs = (props: Props) => {
  
  return (
    <div className='bg-white relative h-full'>
      <AddExperience />
      <ProfileHeader/>
      <ProfileMain/>
    </div>
  )
}

export default NewGigs