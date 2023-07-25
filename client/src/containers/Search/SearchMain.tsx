import React from 'react'
import {  SearchCard } from '../../components'
import { newRequest } from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';


const SearchMain = ( ) => {


  const {id } = useParams()
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/user/${id}`).then((res) => {
        const data = res.data;
        return data;
      }),
  });

  console.log(data)
  return (
    <section className="text-white mt-10 w-[100vw] py-10 px-8  flex flex-col items-center justify-center  h-full">
      {isLoading ? 'Loading':
    <div className="w-full max-w-[1400px] flex flex-col  bg-black">
      <span className='font-semibold text-center mb-10 text-xl md:text-2xl  '>{data && 0<data.length && data.length< 10 && '0'}{data && data.length} Talent{data && data.length>1 &&'s'} available</span>
    <div className="w-full flex flex-wrap items-start justify-center">

     { data ? data.map((user: any) =>(
        <SearchCard
        firstName ={user.firstName}
        lastName={user.lastName}
        specialisation={user.specialisation}
        city={user.city}
        desc={user.desc} 
        id={user._id}
        isCertified={user.isCertified}/> 
      ) )
      : 
      'No user found'
     }

    </div>
    </div>
      }
    </section>
  )
}

export default SearchMain