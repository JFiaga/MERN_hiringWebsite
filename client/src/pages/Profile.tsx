import React, { createContext, useState } from 'react'
import { ProfileHeader, ProfileMain } from '../containers'
import { AddExperience } from '../components'

type Props = {}


export const ModalContext = createContext<any>(null)

const NewGigs = () => {
  const [modalStatus, setModalStatus] = useState<boolean>(false)  

  const toggleModal = () =>{
    setModalStatus(!modalStatus)
  }

  return (
   <ModalContext.Provider value={{toggleModal,modalStatus}}>
<div className='bg-white relative h-full'>
      <AddExperience />
      <ProfileHeader/>
      <ProfileMain/>
    </div>
   </ModalContext.Provider>
  )
}

export default NewGigs