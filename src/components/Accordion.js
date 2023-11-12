// "use client"

import React, { useState } from 'react'
import {ArrowDown2} from 'iconsax-react'

function Accordion({title, content}) {

    const [acc, setAcc] = useState(false)

  return (
    <div className='my-4'>
        <h1 className='text-semibold flex items-center justify-between p-4 bg-[#1B7464]'>
            {title} 
            <span className=' justify-self-end ' onClick={() => setAcc(!acc)} >
                {
                    acc === false ?
                        <ArrowDown2 color='#fff' size={20} />
                        :
                        <ArrowDown2 color='#fff' size={20} className='rotate-180' />
                }
            </span>
        </h1>
        {
            acc === false ?
            null
        :
            <p className='bg-[#1B7464] p-5 pt-0'> {content} </p>
        }
    </div>
  )
}

export default Accordion