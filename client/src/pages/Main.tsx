
import { Navigate } from 'react-router-dom'
import { MainHeader, MainPopular, MainParallax,MainTestimony } from '../containers'




function Main() {

  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string)


  return  currentUser && currentUser.isEmployee ? (
    <Navigate to={`/profile/:${currentUser._id}`} />
  ) : (
    <>
    <MainHeader/>
    <MainPopular/>
    <MainParallax/>
    <MainTestimony />
    </>
  )
}

export default Main