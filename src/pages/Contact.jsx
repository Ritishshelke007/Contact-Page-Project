import React, { useState } from "react";
import assessliLogo from "../assets/assessliLogo.png";
import assessli from "../assets/assessli2.png";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className=" bg-slate-100 flex justify-center items-center pt-10 gap-4">
      <div className="flex items-start justify-center flex-col w-1/2 max-w-lg bg-white rounded-xl shadow-lg pt-5 pb-2  px-10 space-y-3">
        <div className="flex space-y-1 flex-col">
          <p className="font-semibold text-2xl">Contact Us</p>
          <p>Have questions or feedback? Send us a message</p>
        </div>
        <div className="h-[1.2px] bg-slate-300 w-full"></div>

        <div className="w-full ">
          <form className="flex flex-col space-y-3  md:w-full" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="font-semibold">
                Your name
              </label>
            </div>
            <div>
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
            </div>

            <div>
              <label htmlFor="email" className="font-semibold">
                Email address
              </label>
            </div>
            <div>
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
            </div>

            <div>
              <label htmlFor="name" className="font-semibold">
                Phone
              </label>
            </div>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone Number"
                className="py-3 ring-gray-300 w-full rounded-lg outline-none focus:ring-2 focus:ring-slate-800  px-4 bg-gray-100"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="font-semibold">
                Message
              </label>
            </div>
            <div>
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

      <div className="flex items-start justify-center w-1/2 flex-col max-w-lg space-y-3">
        <div className="bg-white px-10  rounded-xl shadow-lg pt-5 pb-4">
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

        <div className="bg-white px-10  rounded-xl shadow-lg pt-5 space-y-4 pb-4 w-full">
          <div className="flex justify-start items-center space-x-4 w-full bg-gray-100 rounded-lg p-3">
            <div className="bg-gray-300 p-2 rounded-full">
              <MdMailOutline className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>info@oneoath.in</p>
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
