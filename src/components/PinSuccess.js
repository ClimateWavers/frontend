import React from 'react'
import { TickCircle } from 'iconsax-react'
import Button from './Button'

const PinSuccess = () => {

    const timeStamp = new Date().getTime()

  return (
    <div className='bg-white w-[100vw] sm:w-auto sm:static py-10 '>
        <div className='px-10 md:px-34 lg:px-56 text-black z-20 flex flex-col ' onClick={e => e.stopPropagation()} >
            <div className=' pb-6 self-center '><TickCircle size={160} color='#38D103' /></div>
            <p className='py-3 font-SF font-semibold text-2xl text-center '>Transaction Successful</p>
            <p className='py-3 font-Ordinary text-xs text-center text-gray '>{timeStamp}</p>
            <Button
                type="submit" 
                // disabled={isSubmitting}
                className={" text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary mb-8 "}
                label={"Share Reciept"}
                color="secondary"
                center={true}
                // onClick={() => submitHandler()}
            />
            <Button
                type="submit" 
                // disabled={isSubmitting}
                className={" text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "}
                label={"Go home"}
                color="primary"
                center={true}
                // onClick={() => submitHandler()}
            />
        </div>
    </div>
  )
}

export default PinSuccess