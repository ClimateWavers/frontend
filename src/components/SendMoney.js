import React, {useState} from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { SendMoneySchema } from '@/utils/sendMoneyValidationSchema'
import Button from './Button'
import Pin from './Pin'
import { nigerianBanks } from '@/utils/nigerianBanksData'

const SendMoney = () => {

    const [isValidated, setIsValidated] = useState(false)

    const initialValues ={
        bank:'',
        accountNumber:'',
        amount:'',
    }


  return (
    <div className='bg-white w-[100vw] sm:w-auto sm:static py-10 '>
        <div className='px-10 md:px-34 lg:px-56 text-black z-20 flex flex-col' onClick={e => e.stopPropagation()} >
            {
                isValidated ?
                    <Pin />
                :
            
            <div className=' font-SF '>
                <div className='pb-5 font-semibold text-center '>
                    Send money to friends and family from your wallet
                    <p className='text-sm text-gray font-normal text-center '>Note that there is a 5% charge for sending money</p>
                </div>
                {/* Form to send cash */}
                <Formik 
                    initialValues={initialValues}
                    validate={SendMoneySchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {
                        ({isSubmitting, errors, touched, values, handleSubmit }) => {
                            return(
                                <Form className='flex flex-col gap-3 '>
                                    <label htmlFor='bank' className='text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px]' >Bank:</label>
                                    <Field name="bank" as="select" className={errors.bank && touched.bank ? 'border-[1.5px] border-red-600 p-2 bg-red-200 ' : 'border-[1.5px] border-gray-main p-2'} >
                                        <option>-Select-</option>
                                        {
                                            nigerianBanks.map(({name, id}) => {
                                                return(
                                                    <option key={id}>{name}</option>
                                                )
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage name="bank" component="div" />
                                    <label htmlFor='accountNumber' className='text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px]' >Account Number:</label>
                                    <Field type="srting" name="accountNumber" className={errors.accountNumber && touched.accountNumber ? 'border-[1.5px] border-red-600 p-2 bg-red-200 ' : 'border-[1.5px] border-gray-main p-2'} />
                                    <ErrorMessage name="accountNumber" component="div" />
                                    <label htmlFor='amount' className='text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px]' >Amount:</label>
                                    <Field type="srting" name="amount" className={errors.amount && touched.amount ? 'border-[1.5px] border-red-600 p-2 bg-red-200 ' : 'border-[1.5px] border-gray-main p-2'} />
                                    <ErrorMessage name="amount" component="div" />
                                    {
                                        values.bank ?
                                            <div className='text-primary flex flex-col '>
                                                <div className='flex flex-row justify-between items-center gap-2 px-5 py-3 bg-background-mint '>
                                                    <p className='font-semibold'>Api Name</p>
                                                    <p>{values.bank}<br/>{values.accountNumber}</p>
                                                </div>
                                                <div className='flex flex-row justify-between items-center justify-items-center gap-2 px-2 py-1'>
                                                    <p>Fee</p>
                                                    <p>N100.00</p>
                                                </div>
                                                <div className='flex flex-row justify-between items-center gap-2 px-2 py-1 font-semibold '>
                                                    <p>Total</p>
                                                    <p>{values.amount + 100}.00</p>
                                                </div>
                                            </div>
                                        :
                                            null
                                    }
                                    <Button 
                                    label={'Proceed'}
                                    center={true}
                                    onClick={() => {
                                        setIsValidated(true)
                                        handleSubmit()
                                    }}
                                    type={'submit'}
                                    />
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
            }
        </div>
    </div>
  )
}

export default SendMoney