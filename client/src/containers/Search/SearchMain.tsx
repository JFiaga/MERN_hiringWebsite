import React from 'react'
import {  SearchCard } from '../../components'
import { newRequest } from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';


const SearchMain = ( ) => {


  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/user/`).then((res) => {
        const data = res.data;
        return data;
      }),
  });

  console.log(data)
  return (
    <section className="text-white mt-10 w-[100vw] py-10 px-8  flex flex-col items-start justify-center bg-black ">
      {isLoading ? 'Loading':
    <div className="w-full flex flex-col">
      <span className='font-medium'> {data && data.length} developper{data && data.length>1 &&'s'} available</span>
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