import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import About from "../About";
import '../../modules/Allproducts/index.css'
const Contact = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xqkvppvl");
  if (state.succeeded) {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-40 h-40 mb-6 object-cover object-center rounded-full inline-block border-0 border-gray-200 bg-gray-100"
                    src="https://t3.ftcdn.net/jpg/01/57/86/44/360_F_157864480_TFm1nQsUI1o8VLKg6SK6yV9P6tsK4TXN.jpg"
                  />

                  <p className="leading-relaxed text-xl">
                    Message Successfully Send !
                  </p>
                  <span className="inline-block h-1 w-24 rounded bg-indigo-500 mt-4 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Amit Mandal
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
                <button
                  className="  text-white bg-purple-500 border-0 h-8 py-1 px-4 text-center focus:outline-none hover:bg-purple-600 rounded relative bottom-[20%] left-[143%]"
                  onClick={() => navigate("/")}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <About />
      <section className="text-gray-600 body-font ">
        <div className="  display container px-5 py-24 flex flex-row sm:flex-nowrap  ">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  p-5 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0"
              style={{
                width: "100%",
                height: "100%",
                frameborder: "0",
                title: "map",
                marginheight: "0",
                marginwidth: "0",
                scrolling: "no",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796733888!2d77.044170146591!3d28.52755441043883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691652156362!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xqkvppvl"
            method="POST"
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-gray-900 text-2xl mb-4 text-center text-cyan-500 font-medium title-font">
              Feel Free To Contact Us
            </h2>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="username"
                autoComplete="off"
                placeholder="Enter your name"
                required
                className="w-full capitalize bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoCapitalize="off"
                placeholder="Enter your email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
            >
              Send To gmail
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
