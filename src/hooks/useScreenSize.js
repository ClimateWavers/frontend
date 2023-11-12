// Hook to get the screen size 

import React, { useEffect, useState } from 'react'

const useScreenSize = (value) => {

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth
    })

    useEffect(() => {
        const handleScreenSizeChange = () => {
            setScreenSize({with: window.innerWidth})
        }
        window.addEventListener('resize', handleScreenSizeChange);
        return () => {
            window.removeEventListener('resize', handleScreenSizeChange);
        };
    }, [])
    const checker = () => {
        if (value <= screenSize.width){
            return true
        } else if (value === undefined || value === null){
            return undefined
        } else {
            return false
        }
    }

    return checker()

    
    // const getScreenInnerWidth = window.innerWidth
    // const checker = () => {
    //     if (value <= getScreenInnerWidth){
    //         return true
    //     } else if (value === undefined || value === null){
    //         return undefined
    //     } else {
    //         return false
    //     }
    // }
    // checker()
}

export default useScreenSize