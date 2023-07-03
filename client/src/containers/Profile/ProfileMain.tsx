import React from 'react'
import { LastExperiencesCard } from '../../components'

type Props = {}

const ProfileMain = (props: Props) => {
  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10  justify-center text-black">
    <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between bg-red-50">
          <div className='bg-blue-100 w-[70%]'>
                <div className=''>
                  <h4 className='font-medium'>About me</h4>
                 <p className='border border-black w-[60%]'>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam fuga quos obcaecati nemo rem iste ad magnam natus, necessitatibus, enim assumenda illo nesciunt porro quas. Officia, laudantium laborum dolorem iure molestias perferendis consectetur distinctio voluptatem ab corporis? Hic recusandae at ipsa quos asperiores eum cumque perferendis corporis consectetur aperiam, iure quo, illum quidem sed doloremque neque expedita blanditiis tenetur quis veniam quia vitae repellendus molestiae maxime! Officia, excepturi. Vero quas tenetur deserunt, quia culpa illum a ab maiores nesciunt laudantium est adipisci, unde suscipit sint! Fugit tempora nam minima! Accusantium quaerat minus molestias consequatur similique necessitatibus debitis cupiditate corrupti atque.
                 </p>
                </div>

                  <h3 className='font-medium'>Last Experiences</h3>
                <div className='flex flex-col space-y-4'>
                      <LastExperiencesCard/>
                      <LastExperiencesCard/>
                    
                </div>

                <div>

                </div>
          </div>
          <div>
            l
          </div>
      </div>
      </section>
  )
}

export default ProfileMain