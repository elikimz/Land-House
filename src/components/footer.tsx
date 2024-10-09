// src/components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center mb-2">&copy; 2024 Land & House Sales. All rights reserved.</p>
        <p className="text-center">
          Powered by <span className="font-semibold">KimTech Limited</span>
        </p>
        <p className="text-center mb-4">
          <a href="mailto:elijahkimani1293@gmail.com" className="hover:underline">elijahkimani1293@gmail.com</a>
        </p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
