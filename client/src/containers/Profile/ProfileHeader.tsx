import React from 'react'
import { Certified } from '../../components'
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { mainHeaderImg2 } from '../../assets'

type Props = {}

const ProfileHeader = (props: Props) => {
  return (
    <section className="text-black mt-10 w-[100vw] flex justify-center py-10 px-8">
    <div className="w-full max-w-[1400px] flex flex-col items-center space-y-5">
    <div className='h-[150px] w-[150px] rounded-full overflow-hidden border border-primary'>
              <img src={mainHeaderImg2} alt="" className='object-cover h-full w-full' />
        </div>
          <Certified/>
    <div className="flex space-x-2 justify-center  items-center">
            <h3 className="font-medium text-xl md:text-2xl">Jayden Fiaga</h3>
            <span className='font-bold text-xl'>-</span>
          <h3 className="font-bold text-xl md:text-2xl text-primary">Backend Developper</h3>
        </div>

        <div>
          <button className="bg-primary text-white px-4 py-2 rounded-sm font-bold cursor-pointer transition-all duration-500 hover:bg-transparent border border-transparent hover:border-primary hover:text-primary flex items-center justify-center space-x-2">
            <span>Download my resume</span>
            <FiDownload className='text-xl'/>
          </button>
        </div>

    <div className=' flex space-x-4'>
    <a href='https://github.com/' className='h-[60px] w-[60px] bg-black text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-black hover:bg-white hover:text-black cursor-pointer overflow-hidden transition-all duration-500'>
          <FiGithub/>
        </a>      
          <a href='https://linkedin.com/' className='h-[60px] w-[60px] bg-blue-600 text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-blue-600 hover:bg-white hover:text-blue-600 overflow-hidden cursor-pointer transition-all duration-500'>
          <FiLinkedin/>
        </a>    
            <a href='https://twitter.com/' className='h-[60px] w-[60px] bg-blue-400 text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-blue-400 hover:bg-white hover:text-blue-400 overflow-hidden cursor-pointer transition-all duration-500'>
          <FiTwitter/>
        </a>
    </div>
    </div>
    </section>
  )
}

export default ProfileHeader