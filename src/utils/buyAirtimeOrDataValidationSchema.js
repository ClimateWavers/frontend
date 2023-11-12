import * as Yup from "yup";

export const SendMoneySchema = () => ( Yup.object().shape({
    amount: Yup.number()
    .required("Amount to transfer number is required")
    .min(1000, "You can transfer minimumof NGN 1000"),
  }));
