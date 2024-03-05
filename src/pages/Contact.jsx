import React, { useState } from "react";
import assessliLogo from "../assets/assessliLogo.png";
import assessli from "../assets/assessli2.png";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useFormik } from "formik";
import { contactSchema } from "../schemas";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setLoading(true);
        toast.loading("Sending your message...");

        axios
          .post(
            "https://sheet.best/api/sheets/79b099f1-8ecf-4d78-86b1-59c4847a0b63",
            values
          )
          .then((response) => {
            console.log(response);
            toast.dismiss();
            toast.success("Thank you for your response!");
          })
          .catch((error) => {
            console.log("Error in submiting", error);
            toast.error("Failed to submit form data!");
          })
          .finally(() => {
            setLoading(false); 
          });

        action.resetForm();
      },
    });

  return (
    <div className=" bg-slate-100 flex justify-center flex-col md:flex-row items-center pt-4 gap-6 md:h-[calc(100vh-80px)]">
      <div className="flex  items-start justify-center flex-col md:w-1/2 md:max-w-lg bg-white rounded-xl shadow-lg pt-5 pb-2  px-10 space-y-3 w-[90%]">
        <div className="flex space-y-1 flex-col">
          <p className="font-semibold text-2xl">Contact Us</p>
        </div>
        <div className="h-[1.2px] bg-slate-300 w-full"></div>

        <div className="w-full ">
          <form
            className="flex flex-col space-y-7 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-2">
              <div>
                <label htmlFor="name" className="font-semibold">
                  Your name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className="py-3 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-slate-800 px-4 bg-gray-100 placeholder:text-slate-500"
                  required
                />
                {errors.name && touched.name ? (
                  <p className="absolute text-red-500 px-1"> {errors.name} </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="">
                <label htmlFor="email" className="font-semibold">
                  Email address
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email address"
                  className="py-3 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-slate-800  px-4 bg-gray-100"
                  required
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 px-1 absolute"> {errors.email} </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div>
                <label htmlFor="name" className="font-semibold">
                  Phone
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="[0-9]{10}"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number"
                  className="py-3 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-slate-800  px-4 bg-gray-100"
                  required
                />
                {errors.phone && touched.phone ? (
                  <p className="text-red-500 px-1  absolute">
                    {" "}
                    {errors.phone}{" "}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div>
                <label htmlFor="name" className="font-semibold">
                  Message
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  id="msg"
                  cols="30"
                  placeholder="Message"
                  rows="3"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full bg-gray-100 ring-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-800 px-4  py-3 resize-none"
                  required
                ></textarea>
                {errors.message && touched.message ? (
                  <p className="text-red-500 px-1 absolute">
                    {" "}
                    {errors.message}{" "}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className={`bg-slate-900 text-white font-bold uppercase px-4 py-2 rounded-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex items-start justify-center md:w-1/2 flex-col max-w-lg w-[90%] space-y-3">
        <div className="bg-white px-10  rounded-xl shadow-lg pt-5 pb-4 ">
          <div className="flex space-x-1 justify-center items-center w-full pb-2">
            <img src={assessliLogo} alt="logo" className="h-10 w-10" />
            <img src={assessli} alt="logo" className="w-20" />
          </div>

          <div>
            <p className="font-semibold">Address</p>
            <p>
              330, KC Dutta road Near Ovoy Ashram, Chakdaha, West Bengal, 741222
            </p>
            <br />
            <p>
              Manjunatha layout, Near pragati High school, Munnekollal,
              Marathahalli, Bengaluru, Karnataka, 560037
            </p>
          </div>
        </div>

        <div className="bg-white px-5 rounded-xl shadow-lg pt-5 space-y-4 pb-4 w-full">
          <div className="flex justify-start items-center space-x-4 w-full bg-gray-100 rounded-lg p-3">
            <div className="bg-gray-300 p-2 rounded-full">
              <MdMailOutline className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>
                <a href="mailto:info@oneoath.in">info@oneoath.in</a>
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center space-x-4 w-full bg-gray-100 rounded-lg p-3">
            <div className="bg-gray-300 p-2 rounded-full">
              <FiPhone className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
