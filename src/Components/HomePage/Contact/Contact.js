import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import A1 from "../../../Assets/A1.png"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dp913dl",
        "template_p6guu94",
        form.current,
        "NrsxAVsy7_4nsb4d8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="lg:px-36 px-10 mb-16 mt-5">
      
      <div className="grid border rounded-lg lg:grid-cols-2 grid-cols-1">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="p-5 mt-5 my-auto">
      <h1 className="text-4xl text-center ">Get in Touch</h1>
      <h1 className="text-xl mb-3 text-gray-400 text-center ">FOR ANY QUERY PLEASE CONTACT WITH ME

</h1>
<img className="rounded-lg shadow-lg shadow-gray-400" src={A1} alt="" />
      
      </div>
      
      <form data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full  p-5 mt-5 grid " ref={form} onSubmit={sendEmail}>
        <label className="text-2xl">Name</label>
        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full shadow-lg shadow-gray-600 rounded-lg  max-w-lg" name="user_name" />
        <label className="text-2xl">Email</label>
        <input type="email" placeholder="Type here" className="input input-bordered input-secondary rounded-lg shadow-lg shadow-gray-600 w-full max-w-lg"  name="user_email" />
        <label className="text-2xl">Message</label>
        <textarea className="textarea shadow-lg shadow-gray-600 textarea-bordered w-full max-w-lg rounded-lg " placeholder="Message"  name="message" />
        <input className="btn btn-primary mt-6 shadow-xl shadow-gray-700 w-full max-w-xs rounded-lg " type="submit" value="Send" />
      </form>
      </div>
    </div>
  );
};

export default Contact;
