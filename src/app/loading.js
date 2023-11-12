import React from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

const loading = () => {
  return (
    <div className='grid place-items-center h-[100%] '>
      <LoadingSpinner />
    </div>
  )
}

export default loading