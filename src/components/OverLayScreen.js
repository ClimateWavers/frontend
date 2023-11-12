import React from 'react'
import {motion} from 'framer-motion'
import useScreenSize from '@/hooks/useScreenSize'
import Section from './Section'

const OverLayScreen = ({component, isRightOrLeft, header, setCloser}) => {
  
    const isDesktop = useScreenSize(640)

    const variants = isDesktop ? {
        initial: {
            x: -100,
            opacity: 0.2,
        },
        animate:{
            x:0,
            opacity: 1,
        }
    }
    : {
        initial: {
            y:  isRightOrLeft == 'right' ? +200 : -200,
            opacity: 0.2,
        },
        animate:{
            y:0,
            opacity: 1,
        }
    }

  return (
    <motion.div 
    className='bg-dark bg-opacity-50 backdrop-blur-sm w-[100%] h-[100%] sm:h-[1000px] absolute top-0 left-0 z-50 '
    onClick={setCloser}
    variants={variants}
    initial={variants.initial}
    animate={variants.animate}
    >
        <motion.div className={` w-[100%] h-[100%] sm:w-[70%] sm:h-[100%] bg-white ${ isRightOrLeft == 'right' ? 'sm:right-0' : 'sm:left-0'  } absolute bottom-0 top-32 sm:top-0 `} onClick={e => e.stopPropagation()} drag onDragEnd={setCloser} >
            <h1 className='text-3xl text-primary font-Ordinary py-6 border-b-[1px] border-gray-main '>
                <Section >
                    {header}
                </Section>
            </h1>
            {
                component
            }
        </motion.div>
    </motion.div>
  )

}

export default OverLayScreen