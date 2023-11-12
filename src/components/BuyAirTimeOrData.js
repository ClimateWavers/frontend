import React, {useState} from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { SendMoneySchema } from '@/utils/sendMoneyValidationSchema'
import Button from './Button'
import Pin from './Pin'
import { nigerianBanks } from '@/utils/nigerianBanksData'
import Image from 'next/image'
import Mtn from '../../public/mtn.png'
import airtel from '../../public/airtel.png'
import etisalat from '../../public/etisalat.png'
import glo from '../../public/glo.png'
import { networkData } from '@/utils/buyAirtimeOrData'



function BuyAirTimeOrData() {

  const [isValidated, setIsValidated] = useState(false)
  const [airTimeOrData , setAirTimeOrData] = useState('airtime')
  
  const initialValues ={
    amount:'',
  }

  // style constants for the Airtime/Data btns
  const btnNormalStyles = 'bg-white border-2 border-gray text-black py-3 px-8'
  const btnActiveStyles = '!bg-primary border-1 border-gray text-secondary py-3 px-8 '
  
  const  NetworkComponent = ({bg, border, name, pic}) => {
    const [network , setNetwork] = useState("")
    return(
      <div className={`${bg} rounded-full ${ network === name && ` border-2 !${border}` } `} onClick={() => setNetwork(name)} >
        <Image src={pic} width={70} height={70}  />
      </div>
    )
  }

  return (
    <div className='bg-white w-[100vw] sm:w-auto sm:static py-10 '>
      {
          isValidated ?
              <Pin />
          :
      <div className='px-10 md:px-34 lg:px-56 text-black z-20 flex flex-col ' onClick={e => e.stopPropagation()} >
        
          
          <div className=' font-SF '>
            <div className='pb-5 font-semibold text-center '>
                <p className='text-sm font-normal text-center '>Get the best deals on airtime and data plans</p>
            </div>
            {/* Split Buttons */}
            <div className=' flex flex-row font-Ordinary justify-center mb-6 w-[100%] '>
              <div className={` ${btnNormalStyles} ${airTimeOrData == 'airtime' && btnActiveStyles}` } onClick={() => setAirTimeOrData('airtime')} >Airtime</div>
              <div className={`${btnNormalStyles} ${airTimeOrData == 'data' && btnActiveStyles}`} onClick={() => setAirTimeOrData('data')} >Data</div>
            </div>
            <div className='flex flex-row gap-2 justify-center py-5 '>
            {
              networkData.map(({id, name, pic, bgColor, borderColor}) => {
                return(
                  <NetworkComponent 
                  name={name}
                  pic={pic}
                  className={className}
                  bg={bgColor}
                  border={borderColor}
                  key={id}  />
                )
              })
            }
            </div>
            {/* Form to Buy Airtime and Data */}
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
                                <label htmlFor='amount' className='text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px]' >Enter amount here</label>
                                <Field type="srting" name="amount" className={errors.amount && touched.amount ? 'border-[1.5px] border-red-600 p-2 bg-red-200 ' : 'border-[1.5px] border-gray-main p-2'} />
                                <ErrorMessage name="amount" component="div" />
                                {
                                    values.amount ?
                                        <div className='text-primary flex flex-col '>
                                            <div className='flex flex-row justify-between items-center gap-2 px-5 py-3 bg-background-mint '>
                                                <p className='font-semibold'>MTN</p>
                                                <p>{values.amount}<br/>{values.amount}</p>
                                            </div>
                                            <div className='flex flex-row justify-between items-center gap-2 px-2 py-1 font-semibold '>
                                                <p>Total</p>
                                                <p>{values.amount }.00</p>
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
      </div>
        }
    </div>
  )
}

export default BuyAirTimeOrData