import * as Yup from "yup";

export const SignupSchema = () => ( Yup.object().shape({
    name:Yup.string()
        .min(2, "Too short!!")
        .max(50, "Too long!!")
        .required("Full name is Required!!"),
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    phoneNumber: Yup.number()
        .min(11, "Please enter a valid phone number")
        .required("Phone number is required"),
    refCode: Yup.string()
        .min(4, "Please enter a valid Referal Code"),
    bvn: Yup.number()
        .min(10, "Please enter a valid BVN Number"),
    validId: Yup.number()
        .required("Please enter a valid"),
    docNumber: Yup.number()
        .required("Please enter a valid Document Number"),
    password: Yup.string()
        .min(6, "Minimum of 6 characters")
        .required("Paasword is reqiued")
    // confirmPassword: " ",

  }));

