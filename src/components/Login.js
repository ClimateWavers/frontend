import React from 'react'
import {motion} from 'framer-motion'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import {LoginSchema} from '../utils/loginValidationSchema'

function Login({login, setLogin}) {





  return (
    // Background Overlay
    // onClick={setLogin(false)} 
    <motion.div 
    className='h-screen w-screen bg-dark bg-opacity-50 absolute top-0 z-10 grid place-content-center overscroll-y-none backdrop-blur-sm ' 
    onClick={() => setLogin(false)}
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
            <div className='px-10 md:px-34 lg:px-56 text-black z-20 ' onClick={e => e.stopPropagation()} >
                <h1 className='text-[5.6vw] sm:text-[3vw] md:text-[2.5vw] text-center pb-6 '>Log in to your account</h1>
                <Formik
                   initialValues={{ email: '', password: '' }}
                  //  validate={values => {
                  //    const errors = {};
                  //    if (!values.email) {
                  //      errors.email = 'Required';
                  //    } else if (
                  //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  //    ) {
                  //      errors.email = 'Invalid email address';
                  //    }
                  //    return errors;
                  //  }}
                   validate={LoginSchema}
                   onSubmit={(values) => {
                     console.log(values)
                    //  Send to the server
                   }}
                >
                {( formik ) => {
                  const { errors, touched, isValid, dirty } = formik;
                return(
                <Form className='flex flex-col' >
                    <label htmlFor='email' className='pb-2 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px] '>Email: </label>
                    <Field type="email" name="email" className={errors.email && touched.email ? 'border-[1.5px] border-red-600 p-2 bg-red-200 ' : 'border-[1.5px] border-gray-main p-2' } />
                    <ErrorMessage name="email" component="div" />
                    <label htmlFor='email' className='pb-2 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px]'  >Password: </label>
                    <Field type="password" name="password" className={errors.password && touched.password ? 'border-[1.5px] border-red-600 p-2 bg-red-200 ' : 'border-[1.5px] border-gray-main p-2' } />
                    <ErrorMessage name="password" component="div" />
                    {/* <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button> */}
                    <Button
                    type="submit" 
                    // disabled={isSubmitting}
                    className={"text-center text-[16px] sm:text-[20px] md:text-[22px] lg:text-[36px] my-4"}
                    label={"Login"}
                    color="primary"
                    />
                </Form>
                )}}
                    </Formik>
                    <p>Forgot your password? <Link className='text-primary' href={'./#'} >Reset it here</Link> </p>
                </div>
            </div>
    </motion.div>
  )
}

export default Login