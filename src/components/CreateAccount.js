"use client"

import React, { useState } from 'react'
import Section from './Section'
import Image from 'next/image'
import Link from 'next/link'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {LoginSchema} from '../utils/loginValidationSchema'
import { PasswordToggle } from './PasswordToggle'
import Button from './Button';
import {motion} from 'framer-motion'
import { SmsNotification } from "iconsax-react";




function CreateAccount() {

  // Verify email state.
  const [isVerified, setIsVerified] = useState(true)
  const [otp, setOtp] = useState(new Array(6).fill(""))
  const [emailSuccess, setEmailSuccess] = useState(false)
  // Sopposed to dispatch an action on successful account creation

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    refCode: "",
    bvn: "",
    validId: "",
    docNumber: "",
    password: "",
    confirmPassword: "",
  }


  return (
    <div className='py-10 bg-background-mint font-SF  bg-blend-exclusion '>
      <div className="bg-[url('/map.png')] bg-cover bg-center">
      {/* Top Logo and link */}
            <div className='flex flex-row justify-between pb-4  px-[20px] sm:px-[40px] '>
                <Image
                  alt="logo"
                  className=""
                  src={"/Groupvaluebox.png"}
                //   fill
                  priority
                  quality={100}
                  width={100}
                  height={100}
                />
                <p className='text-primary' >Login</p>
            </div>
            {/* Check if user has sent an email for verification */}
            { !isVerified === true ? 
            <motion.div 
            initial={{
              y: 500,
              opacity:0,
            }}
            whileInView={{
                y: 0,
                opacity:1,
            }}
            className='px-10  py-4 mx-0 md:mx-64 lg:mx-96 text-black z-20 bg-white ' >
                <h1 className='text-xl sm:text-2xl md:text-2xl pb-6 text-left font-Ordinary '>Let’s get started</h1>
                <Formik
                   initialValues={initialValues}
                   validate={LoginSchema}
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
                    <label htmlFor='name' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] '>Full name: </label>
                    <Field type="text" name="name" placeholder="Full name" className={errors.name && touched.name ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2 ' } />
                    <ErrorMessage name="name" component="div" />
                    <label htmlFor='email' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Email: </label>
                    <Field type="email" name="email" placeholder="Email address" className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2 ' } />
                    <ErrorMessage name="email" component="div" />
                    <label htmlFor='number' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Phone number: </label>
                    <Field type="number" name="number" placeholder="  " className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } />
                    <ErrorMessage name="number" component="div" />
                    <label htmlFor='refCode' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Referal Code: <span className='text-gray text-sm'>{"(optional)"}</span> </label>
                    <Field type="number" name="refCode" placeholder=" code here " className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } />
                    <ErrorMessage name="refCode" component="div" />
                    <label htmlFor='bvn' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Bank Verification Number: <span className='text-gray text-sm'>{"(BVN)"}</span> </label>
                    <Field type="number" name="refCode" placeholder="BVN Number" className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } />
                    <ErrorMessage name="refCode" component="div" />
                    <label htmlFor='validId' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Valid ID: </label>
                    <Field type="text" name="validId" placeholder=" Upload Valid ID (2mb max) " className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } />
                    <ErrorMessage name="refCode" component="div" />
                    <label htmlFor='docNumber' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Document number: </label>
                    <Field type="text" name="docNumber" placeholder="Document number here" className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } />
                    <ErrorMessage name="refCode" component="div" />
                    <label htmlFor='password' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Password: </label>
                    <Field name="password"  className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } component={PasswordToggle}  />
                    <ErrorMessage name="refCode" component="div" />
                    <label htmlFor='confirmPassword' className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]'  >Confirm Password: </label>
                    <Field name="confirmPassword" className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 mb-2 ' : 'border-[1.5px] border-gray-main p-2 mb-2' } component={PasswordToggle} />
                    <ErrorMessage name="confirmPassword" component="div" />
                    {/* <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button> */}
                    <Button
                    type="submit" 
                    // disabled={isSubmitting}
                    className={"text-center my-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "}
                    label={"Login"}
                    color="primary"
                    center={true}
                    />
                </Form>
                )}}
                    </Formik>
                    <p>Already have an account? <Link className='text-primary' href={'./#'} >Login</Link> </p>
                    

                </motion.div>
                :
                // Account created
                <>
                {
                emailSuccess === false ?
                  <motion.div 
                    initial={{
                      y: 500,
                      opacity:0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity:1,
                    }}
                    className='mx-0 md:mx-64 lg:mx-96 text-black z-20 bg-white '
                  >
                    <h2 className='bg-primary text-white px-10  py-4 text-xl sm:text-2xl md:text-2xl text-left font-Ordinary'>Account Created</h2>
                    <div className='px-10  py-4'>
                      <SmsNotification color='#135549' size={42} variant="Bulk" className='my-10 mx-auto self-center ' /> 
                      <h3 className='text-[18px] sm:text-[22px] md:text-[28px] lg:text-[30px] '>Verify email  </h3>
                      <p className='text-primary text-xs '>We sent a 6-digit code to user001@email.com</p>
                      <div className={` my-16 grid place-content-center grid-cols-6 gap-2 `}>
                      {
                        otp.map((item, index) => {
                          return (
                            <input key={index} maxLength={1} type="password" className='border-[1.5px] border-gray-main p-3 h-8 sm:h-10 md:h-10 lg:h-16 sm:p-4 rounded grid place-content-center ' />
                          )
                        })
                      }
                      </div>
                      <Button
                      type="submit" 
                      // disabled={isSubmitting}
                      className={" my-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary w-[100%] "}
                      label={"Verify mail"}
                      color="primary"
                      center={true}
                      onClick = {() => {setEmailSuccess(true)}}
                      />
                    <p className='mt-5'>Didn’t get Email?  <Link className='text-primary' href={'./#'} >Resend Code</Link> </p>
                    <p className=' text-primary'>Change mail</p>
                    </div>
                  </motion.div>
                :
                  // Email Verified
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
                      <h1 className='text-center text-xl sm:text-2xl md:text-2xl pb-6 font-Ordinary '>Email verified successfully</h1>
                      <p>Your email has been verified, please proceed to your account dashboard.</p>
                      <Button
                      type="submit" 
                      // disabled={isSubmitting}
                      className={" my-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary w-[100%] "}
                      label={"Go home"}
                      color="primary"
                      center={true}
                      />
                  </motion.div>
                }
                </>
              }
        {/* </Section> */}
        </div>
    </div>
  )
}

export default CreateAccount