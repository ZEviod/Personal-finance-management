"use client";
import React from "react";

const Contact: React.FC = () => {
  const FormSubmittion = (formData: object) => {
    console.log(formData);
  };
  return (
    <div className="min-h-[80vh] bg-purple-100">
      <div className="w-full justify-between flex p-[1rem] md:p-[3rem]">
        <div className="w-[50%] sm:flex hidden md:w-[50%] lg:w-[60%]  ">
          <div>
            <h3 className="text-[4rem] font-semibold md">Contact Us</h3>
            <p className="w-[22rem] text-slate-500 ">
              Email, call, or complete the form to learn how Personal Finance
              Tracker can solve your messaging problem.
            </p>
            <h3 className="my-[1rem] text-slate-500">
              hello@PersonalFinanceTracker.in
            </h3>
            <h3 className="my-[1rem] text-slate-500">123-345-567</h3>
            <h3 className="my-[1rem] text-black underline cursor-pointer">
              Customer Support
            </h3>
            <div className="mt-[3rem] flex flex-wrap gap-[2.5rem]">
              <div>
                <h3 className="font-semibold text-[1.2rem]">
                  Customer Support
                </h3>
                <p className="text-[0.9rem] text-slate-500 w-[15rem]">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1.2rem]">
                  Feedback and Suggestions
                </h3>
                <p className="text-[0.9rem] text-slate-500 w-[15rem]">
                  We value your feedback and are continuously working to improve
                  Personal Finance Tracker. Your input is crucial in shaping the
                  future of Us.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1.2rem]">
                  Finance Inquiries
                </h3>
                <p className="text-[0.9rem] text-slate-500 w-[15rem]">
                  For Finance-related questions or any help, please contact us
                  at Finance@PersonalFinanceTracker.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] sm:w-[80%]  md:w-[50%] lg:w-[35%]">
          <form
            onSubmit={(form) => {
              form.preventDefault();
              const formData = {
                fullName: form.currentTarget.fullName.value,
                email: form.currentTarget.email.value,
                message: form.currentTarget.message.value,
              };
              FormSubmittion(formData);
            }}
            className="p-[1.5rem] bg-white rounded-xl"
          >
            <div className="mb-[1rem]">
              <h3 className="text-[2.3rem] font-semibold">Get in Touch</h3>
              <p className="text-slate-500">You can reach us anytime</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  required={true}
                  placeholder="Full name"
                  className="bg-white border-2 border-slate-200 focus:outline-slate-300 rounded-full px-[10px] pl-[45px] py-[9px] w-full"
                />
                <div className="absolute left-[15px] top-[50%] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    fill="#94a3b8"
                    width="20"
                    height="20"
                  >
                    <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                    <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required={true}
                  placeholder="Your email"
                  className="bg-white border-2 border-slate-200 focus:outline-slate-300 rounded-full px-[10px] pl-[45px] py-[9px] w-full"
                />
                <div className="absolute left-[15px] top-[50%] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="#94a3b8"
                    width="20"
                    height="20"
                  >
                    <path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  required={true}
                  placeholder="How can we help?"
                  className="bg-white border-2 border-slate-200 focus:outline-slate-300 rounded-[20px] px-[10px] pl-[45px] py-[9px] w-full"
                  rows={7}
                ></textarea>
                <div className="absolute left-[15px] top-[15px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="#94a3b8"
                    width="20"
                    height="20"
                  >
                    <path d="m12.836.029c-3.474-.235-6.875,1.036-9.328,3.492S-.211,9.378.03,12.854c.44,6.354,6.052,11.146,13.054,11.146h5.917c2.757,0,5-2.243,5-5v-6.66C24,5.862,19.096.454,12.836.029Zm-5.836,13.471c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm5,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z" />
                  </svg>
                </div>
              </div>
              <button className="w-full rounded-full py-[1rem] bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
