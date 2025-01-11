import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4 md:px-20">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
        {/* Left Side: Logo & About */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Crowdfund</h2>
          <p className="text-sm text-gray-400 mt-4">
            Join us in creating a better world through meaningful contributions and impactful campaigns.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex-1">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 mt-4">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/campaigns" className="hover:text-yellow-400">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/start-campaign" className="hover:text-yellow-400">
                Start a Campaign
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Subscribe & Social */}
        <div className="flex-1">
          <h3 className="text-lg font-bold">Stay Connected</h3>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 rounded-full bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="mt-2 w-full md:w-auto px-6 py-2 bg-teal-500 hover:bg-yellow-400 text-white font-bold rounded-full transition">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="#"
              className="bg-teal-500 hover:bg-yellow-400 p-2 rounded-full text-white"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="bg-teal-500 hover:bg-yellow-400 p-2 rounded-full text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-teal-500 hover:bg-yellow-400 p-2 rounded-full text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-teal-500 hover:bg-yellow-400 p-2 rounded-full text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-gray-500 text-sm mt-8">
        © 2025 Crowdfund. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
