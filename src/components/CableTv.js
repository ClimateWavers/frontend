import React from 'react'

const CableTv = () => {
  return (
    <div className='bg-white w-[100vw] sm:w-auto sm:static py-10 '>
      <div className='px-10 md:px-34 lg:px-56 text-black z-20 flex flex-col ' onClick={e => e.stopPropagation()} >
        The contents would be here
      </div>
    </div>

  )
}

export default CableTv