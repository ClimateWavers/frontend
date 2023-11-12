import React from 'react'
import {motion} from 'framer-motion'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import {LoginSchema} from '../utils/loginValidationSchema'
import {Lock} from 'iconsax-react'

function AddPin({pin, setPin}) {





  return (
    // Background Overlay
    // onClick={setLogin(false)} 
    <motion.div 
    className='h-screen w-screen bg-dark bg-opacity-50 absolute top-0 z-50 grid place-content-center overscroll-y-none backdrop-blur-sm ' 
    onClick={() => setPin(false)}
    initial={{
        y: 500,
        opacity:0,
    }}
    whileInView={{
        y: 0,
        opacity:1,
    }}
    > 
        {/* Inner form Component */}
        <div className='bg-white h-[80vh] w-[100vw] md:w-[70vw] absolute sm:static bottom-0 '>
            <div className='flex flex-row justify-between p-10'>
                <Image
                      alt="logo"
                      className="object-contain"
                      src={"/Groupvaluebox.png"}
                      priority
                      quality={100}
                      width={100}
                      height={100}
                    />
                <Link className='text-primary' href={'./#'} > Create Account </Link>
            </div>
            <div className='px-10 md:px-34 lg:px-56 text-black z-20 flex flex-col ' onClick={e => e.stopPropagation()} >
                <div className=' pb-6 self-center '><Lock size={50} /></div>
                <h1 className='text-[5.6vw] sm:text-[3vw] md:text-[2.5vw] text-center'>Transaction Pin</h1>
                <p className='py-3'>Set up a 4-digit transaction PIN for your account</p>
                <p>Form</p>
                <Button
                    type="submit" 
                    // disabled={isSubmitting}
                    className={" text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "}
                    label={"Set Pin"}
                    color="primary"
                    center={true}
                />
                <p>Forgot your Pin? <Link className='text-primary' href={'./#'} >Reset it here</Link> </p>
                </div>
            </div>
    </motion.div>
  )
}

export default AddPin