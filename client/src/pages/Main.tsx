
import { Testimony } from '../components'
import { MainHeader, MainPopular, MainPresentation } from '../containers'
import MainCategory from '../containers/Main/MainCategory'
import MainTestimony from '../containers/Main/MainTestimony'

type Props = {}

function Main({}: Props) {
  return (
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