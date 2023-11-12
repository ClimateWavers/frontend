"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Link from 'next/link'
import Button from '@/components/Button'
import {motion} from 'framer-motion'
import { SmsNotification } from "iconsax-react";

const Page = () => {

  const[emailSent, setEmailSent] = useState(false)

  return (
    <div>
      <div className='flex flex-row justify-between pb-4  px-[20px] sm:px-[40px] py-10 '>
        <Image
          alt="logo"
          className=""
          src={"/Groupvaluebox.png"}
          priority
          quality={100}
          width={100}
          height={100}
        />
        <p className='text-primary' ></p>
      </div>
      {
        emailSent === false ? 

      <div
      className='px-10  py-4 mx-0 md:mx-64 lg:mx-96 text-black z-20 bg-white ' >
        <h1 className='text-xl sm:text-2xl md:text-2xl pb-6 text-left font-Ordinary '>Forgot your password?</h1>
        <p className='mb-10' >Enter your email address and we&apos;ll send you a link to reset your password.</p>
        <Formik
           initialValues={{
            password: '',
           }}
          //  validate={LoginSchema}
           onSubmit={(values) => {
             console.log(values)
            //  Send to the server
           }}
        >
        {( formik ) => {
          const { errors, touched, isValid, dirty } = formik;
        return(
          // Create account Form
        <Form className='flex flex-col self-center ' >
            <label htmlFor='email' className='text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] '>Email </label>
            <Field type="email" name="email" placeholder="Your email address" className={errors.name && touched.name ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-6 ' } />
            <ErrorMessage name="email" component="div" />
            {/* <button type="submit" disabled={isSubmitting}>
                Submit
            </button> */}
            <Button
            type="submit" 
            // disabled={isSubmitting}
            className={"text-center my-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "}
            label={"Send Link"}
            color="primary"
            center={true}
            onClick={() => setEmailSent(true)}
            />
        </Form>
        )}}
            </Formik>
            <p><Link className='text-primary' href={'./#'} >Return to login</Link> </p>
      </div>
      :
      <motion.div 
        initial={{
          y: 500,
          opacity:0,
        }}
        whileInView={{
            y: 0,
            opacity:1,
        }}
        className='mx-0 md:mx-64 lg:mx-96 text-black z-20 bg-white px-10  py-4 '
      >
          <SmsNotification color='#135549' size={42} variant="Bulk" className='my-10 mx-auto self-center ' /> 
          <h1 className='text-center text-xl sm:text-2xl md:text-2xl pb-6 font-Ordinary '>Email Sent</h1>
          <p>A reset link has been sent to your mail proceed to your mail and click on the link</p>
          <Button
          type="submit" 
          // disabled={isSubmitting}
          className={" my-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary w-[100%] "}
          label={"Open mail app"}
          color="primary"
          center={true}
          />
      </motion.div>
      }
    </div>
  )
}

export default Page