

import { MainHeader, MainPopular, MainParallax,MainTestimony } from '../containers'




function Main() {



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