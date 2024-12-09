import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold mb-2">Customer Service</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-2">Digital Marketing</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Email Marketing
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="font-bold mb-2">Connect with Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fx.kowshi/profilecard/?igsh=OTNhcXdqZmo3amMx"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=digifynix@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-400">© 2024 D-MAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;