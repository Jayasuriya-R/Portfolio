import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../Utils/toggleSlice";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.Toggle.theme);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`relative z-50 font-serif transition-colors duration-500 ${
        theme ? "bg-[#3E2C1C] text-[#F5EBDD]" : "bg-[#FAF3E0] text-[#5A3E1B]"
      }`}
    >
      {/* Logo */}
      <img
        className="rounded-full w-14 h-14 md:w-16 md:h-16 fixed left-6 top-4 border-4 border-amber-700 dark:border-amber-400 shadow-md"
        src="https://reactfolio.tharindu.dev/logo.png"
        alt="Logo"
      />

      {/* Theme Toggle Button */}
      <button
        className="fixed top-4 right-6 p-2 hover:scale-105 transition-transform z-50"
        onClick={() => dispatch(changeTheme())}
      >
        <Expand
          duration={750}
          className={`text-[60px] ${
            theme ? "text-amber-300" : "text-amber-700"
          }`}
        />
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed top-20 right-6 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X
            size={28}
            className={theme ? "text-amber-200" : "text-amber-700"}
          />
        ) : (
          <Menu
            size={28}
            className={theme ? "text-amber-200" : "text-amber-700"}
          />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center">
        <div
          className={`w-[400px] mt-3 px-6 py-2 font-semibold justify-between items-center border rounded-full shadow-md fixed top-20 transition-colors duration-300 ${
            theme
              ? "bg-[#4A3525] border-stone-700 text-amber-200"
              : "bg-[#FFF6E5] border-amber-200 text-stone-800"
          } flex`}
        >
          {["Home", "Projects", "About", "Contact"].map((text) => (
            <Link to={`/${text.toLowerCase()}`} key={text}>
              <span
                className={`hover:text-amber-500 dark:hover:text-amber-300 transition`}
              >
                {text}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-24 right-4 left-4 rounded-xl shadow-xl p-4 space-y-4 text-center transition-all duration-300 ${
            theme
              ? "bg-[#4A3525] border border-stone-700 text-amber-200"
              : "bg-[#FFF6E5] border border-amber-200 text-stone-800"
          }`}
        >
          {["Home", "Projects", "About", "Contact"].map((text) => (
            <Link
              to={`/${text.toLowerCase()}`}
              key={text}
              onClick={() => setIsOpen(false)}
              className={`block hover:text-amber-500 dark:hover:text-amber-300`}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
