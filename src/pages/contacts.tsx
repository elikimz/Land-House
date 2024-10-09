
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-lg mb-6">Have any questions or inquiries? Feel free to reach out to us!</p>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
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
      <Footer />
    </>
  );
};

export default Contact;
