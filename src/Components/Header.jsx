import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=""> 
       <img className='rounded-full w-20 h-20 fixed left-28 top-8' src='https://reactfolio.tharindu.dev/logo.png'/>
      <div className="flex justify-center">
        <div className="w-3/12 mt-9 p-3 font-bold flex justify-between bg-white border border-gray-200 rounded-full shadow-lg hover:border-teal-500 fixed">
          <Link to ="/"> <span className="hover:text-teal-500 cursor-pointer pl-2">Home</span></Link>
          <span className="hover:text-teal-500 cursor-pointer">About</span>
          <span className="hover:text-teal-500 cursor-pointer">Projects</span>
          <Link to="/contact"><span className="hover:text-teal-500 cursor-pointer pr-2">
            Contact
          </span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
