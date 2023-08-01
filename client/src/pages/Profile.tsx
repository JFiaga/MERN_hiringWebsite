import React, { createContext, useState } from 'react'
import { ProfileHeader, ProfileMain } from '../containers'
import { AddExperience } from '../components'
import {  useLocation } from 'react-router-dom'




export const ModalContext = createContext<any>(null)

const NewGigs = () => {

  const {pathname} = useLocation()

  console.log(pathname)

  const [modalStatus, setModalStatus] = useState<boolean>(false)  

  const toggleModal = () =>{
    setModalStatus(!modalStatus)
  }
  
  // console.log(currentUser)
  // if(pathname.includes('myDashboard') ){
  //   if(!currentUser || currentUser?.isEmployee===false){
      
  //     console.log(currentUser)
  //     // return <Navigate to="/" />
  //   }
  // }
  //asynchronous

  return (
   <ModalContext.Provider value={{toggleModal,modalStatus}}>
<div className='bg-white relative min-h-[100vh]'>
      <AddExperience />
      <ProfileHeader/>
      <ProfileMain/>
    </div>
   </ModalContext.Provider>
  )
}

export default NewGigs