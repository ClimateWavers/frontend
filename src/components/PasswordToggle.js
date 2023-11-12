import { useState } from "react"



export const PasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false)


    return (
      <div className='border-[1.5px] border-gray-main p-2 mb-2 flex flex-row justify-between '>
        <input
          type = { showPassword === true ? "text": "password" }
          className="border-0 outline-0 border-transparent text-black w-[80%] "
        />
        <p className='text-primary text-right' onClick={() => setShowPassword(!showPassword)} >{!showPassword ? "Show" : "Hide"}</p>
      </div>
    )
}