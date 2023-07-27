

import { MainHeader, MainPopular, MainParallax,MainTestimony } from '../containers'




function Main() {

  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string)

  // return  currentUser && currentUser.isEmployee ? (
  //   <Navigate to={`/profile/${currentUser._id}`} />
  // ) : (

  return  (
    <>
    <MainHeader/>
    <MainPopular/>
    <MainParallax/>
    <MainTestimony />
    </>
  )
}

export default Main