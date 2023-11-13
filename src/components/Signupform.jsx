// import { useForm } from 'react-hook-form';

// export default function Signupform() {
//   const { 
//     register, 
//     handleSubmit, 
//     getValues,
//     reset,
    
//   } = useForm();
//   const values = getValues()
//   const handleSubmitMine = (e) => {
//     // Send to API
//     e.preventDefault()
//     console.log(values) 
//     reset({
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       password: "",
//       userName:"",
//       email:"",
//     })
//   }

//   const onSubmit = (data) => {
//     console.log(data)
//     reset({
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       password: "",
//       userName: "",
//       email: "",
//     });
//   }

//   // console.log(errors);
  
//   return (
//     <form 
//     onSubmit={handleSubmit(onSubmit)}
//     className="max-w-md mx-auto p-3 md:p-6 bg-white rounded-md shadow-md flex flex-col "
//     >
//       <div className='flex flex-row gap-2 '>
//         <input 
//         type="text" 
//         className="w-full p-2 mb-4 border rounded focus:border-green focus:outline-none"
//         placeholder="First name*" 
//         {...register("firstName", {required: true, maxLength: 80})} />
//         <input 
//         type="text" 
//         placeholder="Last name*" 
//         className="w-full p-2 mb-4 border rounded focus:border-green focus:outline-none"
//         {...register("lastName", {required: true, maxLength: 100})} />
//       </div>
//       <input 
//       type="text" 
//       placeholder="Username*" 
//       className="w-full p-2 mb-4 border rounded focus:border-green focus:outline-none"
//       {...register("userName", {required: true, maxLength: 100})} />
//       <input 
//       type="password" 
//       placeholder="Password*" 
//       className="w-full p-2 mb-4 border rounded focus:border-green focus:outline-none"
//       {...register("password", {required: true, maxLength: 20,})} />
//       <input 
//       type="text" 
//       placeholder="Email" 
//       className="w-full p-2 mb-4 border rounded focus:border-green focus:outline-none"
//       {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input 
//       type="tel" 
//       placeholder="Mobile number" 
//       className="w-full p-2 mb-4 border rounded focus:border-green focus:outline-none"
//       {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
//       {/* <input 
//       className="w-full p-2 bg-green text-white rounded cursor-pointer z-10 "
//       type='submit'
//       /> */}
//       <button 
//       className="w-full p-2 bg-green text-white rounded cursor-pointer z-10 "
//       onClick={(e) => handleSubmitMine(e)}
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function Signupform() {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState,
  } = useForm();

  const formError = formState.errors

  

  const onSubmit = (data) => {
    console.log(data);
    // Send data to API if needed
    const posterFn = async() => {
      await axios.post("https://backend-climatewavers-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api/v1/backend/register", data)
        .then((response) => console.log(response))
        .then((error) => console.log(error))
    }
    toast.promise(
      posterFn,
      {
        pending: 'Singing Up...',
        success: 'Succesful 👌 Please confirm signup in your email',
        error: 'An Error occured 🤯'
      }
    )
    // Reset the form after submission
    reset({
      first_name: "",
      last_name: "",
      mobileNumber: "",
      password: "",
      username: "",
      email: "",
    });
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-3 md:p-6 bg-white rounded-md shadow-md flex flex-col"
    >
      {/* Your input fields go here with register calls */}
      <div className='flex flex-row gap-2 '>
        <input 
        type="text" 
        className="w-full p-2 mb-3 border rounded focus:border-green focus:outline-none"
        placeholder="First name*" 
        {...register("first_name", {required: true, maxLength: 80}, )} />
        
        <input 
        type="text" 
        placeholder="Last name*" 
        className="w-full p-2 mb-3 border rounded focus:border-green focus:outline-none"
        {...register("last_name", {required: true, maxLength: 100})} />
      </div>
      <input 
      type="text" 
      placeholder="Username*" 
      className="w-full p-2 mb-3 border rounded focus:border-green focus:outline-none"
      {...register("username", {required: true, maxLength: 100})} />
      <input 
      type="password" 
      placeholder="Password*" 
      className="w-full p-2 mb-3 border rounded focus:border-green focus:outline-none"
      {...register("password", {required: true, maxLength: 20,})} />
      {
        formError.password && formError.password.type === "maxLength" && <span className='text-red-500 text-sm mb-4 '>Password length is too long</span>
      }
      <input 
      type="text" 
      placeholder="Email" 
      className="w-full p-2 mb-3 border rounded focus:border-green focus:outline-none"
      {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      {
        formError.email && formError.email.type === "pattern" && <span className='text-red-500 text-sm mb-4 '>This is not a valid email!</span>
      }
      <input 
      type="tel" 
      placeholder="Mobile number" 
      className="w-full p-2 mb-3 border rounded focus:border-green focus:outline-none"
      {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12, pattern: /^\d+$/  })} />
      {formError.mobileNumber && formError.mobileNumber.type === "maxLength" && <span className='text-red-500 text-sm mb-4 '>Phone number is too long </span>}
      {formError.mobileNumber && formError.mobileNumber.type === "minLength" && <span className='text-red-500 text-sm mb-4 '>Phone number is too short </span>}
      {formError.mobileNumber && formError.mobileNumber.type === "pattern" && <span className='text-red-500 text-sm mb-4 '>Please make sure this is a valid phone number </span>}
      <button 
        className="w-full p-2 bg-green text-white rounded cursor-pointer z-10"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}