import React from "react";
import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneRegEx = /^[0-9]{10}$/;

export const contactSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  //   phone: Yup.string().matches(phoneRegExp,"Phone number is not valid").required("Phone is required"),
  phone: Yup.string()
    .matches(phoneRegEx, "Phone number must be of 10 digit")
    .required("Phone is required"),
  message: Yup.string().min(3).required("Message is required"),
});
