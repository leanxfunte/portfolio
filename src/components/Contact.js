import React, { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';
import Title from "./Title"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    axios.post('http://localhost:3001/send-email', {
      name,
      email,
      message,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // Display a modal or alert to indicate success
          alert('Email sent successfully!');
          setSubmitted(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitted(false);
      });
  };

  return (
    <section id="contact" className="bg-bg3 py-20 bg-[#111] bg-fixed bg-cover bg-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="Contact" titlebg="get in touch" />
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-0">
            <label className="block">
              <span className="text-white font-normal text-[16px]">Name</span>
              <input
                type="text"
                name="name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-0 py-3 px-4 mb-3 leading-tight focus:outline-none  focus:bg-white"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="text-white font-normal text-[16px]">Email</span>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-0 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"    type="email"
                name="email" placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </label>
            <label className="block">
              <span className="text-white font-normal text-[16px]">Message</span>
              <textarea
                name="message"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded-0 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                rows="3"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className=" bg-red border-red hover:bg-[#990000] hover:border-[#990000] text-white font-bold py-2 px-4 w-full rounded-0 focus:outline-none focus:shadow-outline float-right" disabled={submitted ? true : false }>
            {submitted ? "Sending" : "Send Message"}
          </button>
        </form>
            {
              submitted ? 
              <Alert/> : "Send Message"
            }
        
      </div>
    </section>
  );
}

export default ContactForm;
