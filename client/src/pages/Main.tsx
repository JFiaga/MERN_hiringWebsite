
import { Navigate } from 'react-router-dom'
import { MainHeader, MainPopular, MainPresentation } from '../containers'
import MainCategory from '../containers/Main/MainCategory'
import MainTestimony from '../containers/Main/MainTestimony'



function Main() {

  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string)


  return  currentUser && currentUser.isEmployee ? (
    <Navigate to={`/profile/:${currentUser._id}`} />
  ) : (
    <>
    <MainHeader/>
    <MainPopular/>
    <MainPresentation/>
    <MainCategory/>
    <MainTestimony />
    </>
  )
}

export default Main