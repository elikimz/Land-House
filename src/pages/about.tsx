
import Footer from '../components/footer'

import Navbar from '../components/navbar';

const About = () => {
  return (
    <>
    <div>
      <Navbar />
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">We are dedicated to helping you find your ideal property with a team of experienced professionals who understand the market.</p>
          <p className="text-lg mb-4">Our mission is to simplify the property buying process while providing exceptional customer service.</p>
          <p className="text-lg mb-4">Whether you're looking to buy, sell, or rent, we are here to help you every step of the way.</p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default About;
