
import { Testimony } from '../components'
import { MainHeader, MainPopular, MainPresentation } from '../containers'
import MainCategory from '../containers/Main/MainCategory'

type Props = {}

function Main({}: Props) {
  return (
    <>
    <MainHeader/>
    <MainPopular/>
    <MainPresentation/>
    <MainCategory/>
    <Testimony />
    </>
  )
}

export default Main