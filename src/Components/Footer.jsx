import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Name + About */}
        <h3 className="text-xl font-bold mb-2">Bejide Mofiyinfoluwa Israel</h3>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-4">
          Frontend Developer passionate about building clean, modern, and
          accessible web experiences. Always open to collaborations and new
          opportunities.
        </p>

        {/* Contact Email */}
        <p className="text-gray-300 text-sm mb-6">
          📧{" "}
          <a
            href="mailto:isbejide10@gmail.com"
            className="hover:underline hover:text-blue-400"
          >
            isbejide10@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="mailto:isbejide10@gmail.com"
            className="text-gray-400 hover:text-red-500 transition"
            title="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Bejide-123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bejide-israel-8a2144377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition"
            title="Instagram"
          >
            <FaInstagram />
          </a> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bejide Mofiyinfoluwa Israel. All rights
            reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition-all duration-300 text-sm"
          >
            <span>Back to Top</span>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
