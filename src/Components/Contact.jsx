import React from "react";
import { useSelector } from "react-redux";
import github from "../assets/github.png";
import linkdin from "../assets/linkdin.png";
import instagram from "../assets/instagram.png";

const Contact = () => {
  const theme = useSelector((store) => store.Toggle.theme);

  // Define the deeper brown and dark content background colors consistent with About component
  const darkMainBg = "#4E3C2B"; // Approximate deeper brown
  const darkContentBg = "#292826"; // Dark gray for content area

  return (
    <div
      className={`min-h-screen px-4 py-8 transition duration-300 flex flex-col items-center justify-center
        ${
          theme
            ? `bg-[${darkMainBg}] text-[#F4EDE4]` // Dark earthy theme
            : "bg-[#F9F5EF] text-[#3E3A36]" // Light earthy theme
        }`}
    >
      <div
        className={`w-full max-w-4xl p-6 sm:p-8 rounded-3xl shadow-lg transition duration-300 text-center
          ${
            theme
              ? `bg-[${darkContentBg}] text-[#F4EDE4]`
              : "bg-[#FFF8F0] text-[#3E3A36]"
          }`}
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Let's Get in Touch: Ways to Connect with Me
        </h1>
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 font-serif leading-relaxed
            ${theme ? "text-[#E0E0E0]" : "text-gray-700"}`}
        >
          Thank you for your interest in getting in touch! I genuinely welcome
          your feedback, questions, and ideas. If you'd like to reach out
          directly, feel free to email me at{" "}
          <a
            href="mailto:jayasuryasurya933@gmail.com"
            className={`font-medium underline transition-colors
              ${
                theme
                  ? "text-amber-300 hover:text-amber-200"
                  : "text-amber-700 hover:text-amber-800"
              }`}
          >
            jayasuryasurya933@gmail.com
          </a>{" "}
          — I do my best to respond within 24 hours, though it might take a bit
          longer during busy times. Prefer chatting professionally? You can also
          connect and message me on LinkedIn — I’m always open to meaningful
          conversations, collaborations, or simply geeking out over front-end
          tech. And if you're into casual updates, feel free to drop by
          Instagram where I occasionally share what I’m working on. Thanks again
          for stopping by — I look forward to hearing from you!
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 sm:w-10 sm:h-10 my-2 inline mr-2" src={github} alt="GitHub" />
            <a
              href="https://github.com/Jayasuriya-R"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg sm:text-xl font-medium transition-colors
                ${
                  theme
                    ? "text-amber-300 hover:text-amber-200"
                    : "text-amber-700 hover:text-amber-800"
                }`}
            >
              <span>Follow on GitHub</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 sm:w-10 sm:h-10 my-2 inline mr-2" src={linkdin} alt="LinkedIn" />
            <a
              href="https://www.linkedin.com/in/jayasuriya-r/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg sm:text-xl font-medium transition-colors
                ${
                  theme
                    ? "text-amber-300 hover:text-amber-200"
                    : "text-amber-700 hover:text-amber-800"
                }`}
            >
              <span>Follow on LinkedIn</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 sm:w-10 sm:h-10 my-2 inline mr-2" src={instagram} alt="Instagram" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg sm:text-xl font-medium transition-colors
                ${
                  theme
                    ? "text-amber-300 hover:text-amber-200"
                    : "text-amber-700 hover:text-amber-800"
                }`}
            >
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;