import * as Yup from "yup";

export const SendMoneySchema = () => ( Yup.object().shape({
    bank: Yup.string().required("Bank is required"),
  
    accountNumber: Yup.string()
      .required("Account number is required")
      .min(10, "Account number is too short - should be 10 chars minimum"),
    amount: Yup.number()
    .required("Amount to transfer number is required")
    .min(1000, "You can transfer minimumof NGN 1000"),
  }));

