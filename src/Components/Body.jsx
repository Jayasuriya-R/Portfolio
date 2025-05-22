import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Body = () => {
  const theme = useSelector(store => store.Toggle.theme);

  return (
    <div
      className={`min-h-screen ${
        theme 
          ? "bg-[#4E3C2B] text-[#3E3A36]"  // warm dark brown background + warm off-white text
          : "bg-[#F9F5EF] text-[#F4EDE4]"  // light warm beige bg + deep brown text
      } transition-colors duration-500`}
    >
      <Header />
      <main className="ml-4 md:my-[2%] mt-12 md:mt-[12%] px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;
