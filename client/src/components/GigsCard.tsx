import {Link} from 'react-router-dom'
import { GrLocation} from 'react-icons/gr'

import { mainHeaderImg2 } from '../assets'
import Certified from './Certified'

type Props = {}

const GigsCard = (props: Props) => {

  const id  = '64b12a4b3a3e8c26cd6813b2'

  const isCertified = true
  return (
    <div className='text-black  bg-white   flex flex-col items-center space-y-4 w-[90%] sm:max-w-[350px] h-[600px]shadow-sm border border-black/10 rounded-md relative   overflow-hidden px-4 ml-4 mb-4 pb-5'>
      <div className='absolute w-[100px] h-[100px] rounded-full bg-primary top-[-5%] left-[-15%] '></div>
        <div className='h-[150px] w-[150px] rounded-full overflow-hidden border border-primary'>
              <img src={mainHeaderImg2} alt="" className='object-cover h-full w-full' />
        </div>
        {isCertified && <div><Certified/></div>}
        <div className='flex flex-col items-center'>
          <span className='font-bold'>Jayden Fiaga</span>
          <span className='font-semibold'><span className='text-primary'>Backend</span> developper</span>
        <div className='flex justify-center items-center space-x-1 flex-wrap'>
          <GrLocation className='text-xl mr-1'/>
          <span>Douala</span>
          <span>-</span>
          <span>Yaounde</span>
        </div>
        <span className='text-sm text-gray-700 text-center'>Je suis un dev back end specialise dans les api et les microservices, jai effectue plus de 30 mission freelance</span>
        </div>
        <div className='flex w-full text-white font-semibold '>
       
          <Link to={`/gigs/category=backend/${id}`} className='w-full bg-primary text-center capitalize rounded-md py-3 transition-all duration-500 border border-transparent hover:border-primary hover:bg-transparent hover:text-primary'> view Profile</Link>
        </div>
        <div className='text-black/80 text-center flex space-x-3 flex-wrap w-[90%] items-center justify-center  space-y-1'>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>Laravel</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>node</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>c#</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>Typescript</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>Vue</button>
        </div>
    </div>
  )
}

export default GigsCard