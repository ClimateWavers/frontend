import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import {LoginSchema} from '../utils/loginValidationSchema'
import {Lock} from 'iconsax-react'
import PinInput from 'react-pin-input';
import OverLayScreen from './OverLayScreen';
import PinSuccess from './PinSuccess';
import PinFailure from './PinFailure';

function Pin({}) {

    const [pinNumber, setPinNumber] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)

    const submitHandler = () => {
        pinNumber == '2023' ? setIsCorrect(true) : setIsCorrect(false)
        // return(isCorrect === true  ? <PinSuccess /> : <PinFailure />)
        if (isCorrect === true) {
            return(
                <PinSuccess />
            )
        } else {
            return(
                <PinFailure />
            )
        }
    }

    

    console.log(pinNumber)
    console.log(isCorrect)

  return (
    // <OverLayScreen component={<PinSuccess />} header={'Transaction Succefull'} isRightOrLeft={'right'} setCloser={() => setIsCorrect(!isCorrect)}  /> 
    <>
    { isCorrect === true  ? <PinSuccess /> 
    :
    <div className='bg-white w-[100vw] sm:w-auto sm:static py-10 '>
        <div className='px-10 md:px-34 lg:px-56 text-black z-20 flex flex-col ' onClick={e => e.stopPropagation()} >
            <div className=' pb-6 self-center '><Lock size={50} /></div>
            <h1 className='text-[5.6vw] sm:text-[3vw] md:text-[2.5vw] text-center'>Transaction Pin</h1>
            <p className='py-3 text-center '>Input Pin to confirm this transaction</p>
            <PinInput 
                length={4} 
                initialValue=""
                secret
                secretDelay={100} 
                onChange={(value, index) => {}} 
                type="numeric" 
                inputMode="numeric"
                style={{padding: '20px 30px',
                        margin: '10px auto' ,
                        }}  
                inputStyle={{borderColor: 'grey'}}
                inputFocusStyle={{borderColor: 'primary'}}
                onComplete={(value, index) => setPinNumber(value)}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
            <Button
                type="submit" 
                // disabled={isSubmitting}
                className={" text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "}
                label={"Confirm transaction"}
                color="primary"
                center={true}
                onClick={() => submitHandler()}
            />
            <p className='pt-3'>Forgot your Pin? <Link className='text-primary' href={'./#'} >Reset it here</Link> </p>
        </div>
    </div>
    } 
    </>
  )
}

export default Pin