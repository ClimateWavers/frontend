import LoadingSpinner from '@/components/LoadingSpinner'
import React from 'react'

const loading = () => {
  return (
    <div className=' w-[85%] p-2 pr-[20px] sm:pr-[40px] '>
        <h1 className='grid place-items-center h-[100%] '>
            <LoadingSpinner />
        </h1>
    </div>
  )
}

export default loading