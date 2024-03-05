import React from "react";
import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().min(5).required("Message is required"),
});
