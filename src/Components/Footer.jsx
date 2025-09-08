import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Keep Link for potential "back to top" or logo link
import github from '../assets/github.png'; // Assuming these paths are correct
import linkdin from '../assets/linkdin.png';
import instagram from '../assets/instagram.png';

const Footer = () => {
  const theme = useSelector(store => store.Toggle.theme);

  // Define colors consistent with the overall theme
  const darkMainBg = "#333"; // Deeper brown
  const lightMainBg = "#F9F5EF"; // Creamy off-white/beige
  const darkMainText = "#F4EDE4"; // Creamy off-white for dark mode text
  const lightMainText = "#3E3A36"; // Dark brownish-gray for light mode text

  const darkBorderColor = "border-stone-700"; // Darker stone for separation
  const lightBorderColor = "border-amber-200"; // Lighter amber for separation

  const darkCopyrightText = "text-gray-400"; // Slightly muted for copyright
  const lightCopyrightText = "text-gray-600"; // Slightly muted for copyright

  // Accent colors for social icons
  const darkSocialBg = "bg-[#A47551]"; // From Home component social icons
  const darkSocialHoverBg = "hover:bg-[#C8A97E]";
  const lightSocialBg = "bg-[#D9B382]";
  const lightSocialHoverBg = "hover:bg-[#C9973E]";


  return (
    
    <div
      className={`w-full py-8 px-4 sm:px-6 md:px-8 mt-12 transition-colors duration-500
        ${theme ? `bg-[${darkMainBg}] text-[${darkMainText}]` : `bg-[${lightMainBg}] text-[${lightMainText}]`}`}
    >
      {/* Horizontal Rule (Divider) - theme-aware */}
      <hr className={`border-t-2 mb-6 ${theme ? "bg-white" : lightBorderColor}`}></hr>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between space-y-6 md:space-y-0 md:flex-row">

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/Jayasuriya-R" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img
              className={`w-10 h-10 rounded-full p-2 transition-colors duration-200
                ${theme ? darkSocialBg : lightSocialBg} ${theme ? darkSocialHoverBg : lightSocialHoverBg}`}
              src={github}
              alt="GitHub"
            />
          </a>
          <a href="https://linkedin.com/in/jayasuriya-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img
              className={`w-10 h-10 rounded-lg p-2 transition-colors duration-200
                ${theme ? darkSocialBg : lightSocialBg} ${theme ? darkSocialHoverBg : lightSocialHoverBg}`}
              src={linkdin}
              alt="LinkedIn"
            />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img
              className={`w-10 h-10 rounded-xl p-2 transition-colors duration-200
                ${theme ? darkSocialBg : lightSocialBg} ${theme ? darkSocialHoverBg : lightSocialHoverBg}`}
              src={instagram}
              alt="Instagram"
            />
          </a>
        </div>

        {/* Copyright Text - theme-aware */}
        <div className={`text-center text-sm sm:text-base font-semibold ${theme ? darkCopyrightText : lightCopyrightText}`}>
          © {new Date().getFullYear()} Jayasuriya. All Rights Reserved.
        </div>

      </div>
    </div>
  );
};

export default Footer;
