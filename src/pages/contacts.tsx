import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast notifications
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the email using EmailJS
    emailjs.sendForm('service_l430ucp', 'template_6znwdcz', formRef.current!, 'fTY7tgcZ9KBK19Ymc')
      .then((result) => {
        // Show success toast
        toast.success('Message sent successfully!');
        console.log(result.text);
        // Reset the form fields
        formRef.current?.reset(); // Reset the form to its default state
      }, (error) => {
        // Show error toast
        toast.error('Failed to send message. Please try again later.');
        console.log(error.text);
      });
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-lg mb-6">Have any questions or inquiries? Feel free to reach out to us!</p>
          {/* Phone number section */}
          <div className="mb-6">
            <p className="text-lg">You can also call us at: 
              <a href="tel:0791337188" className="text-red-600 underline ml-2">0791337188</a>
            </p>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <input
                type="text"
                name="user_name" // Name field to match your EmailJS template
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="user_email" // Email field to match your EmailJS template
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message" // Message field to match your EmailJS template
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} pauseOnHover={false} draggable={false} /> {/* ToastContainer for toasts */}
      <Footer />
    </>
  );
};

export default Contact;
