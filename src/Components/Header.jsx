const Header = () => {
  return (
    <div className="flex justify-center" >
      <div className="w-3/12 mt-9 p-3 font-bold flex justify-between bg-white border border-gray-200 rounded-full shadow-lg ">
        <span className="hover:text-teal-500 cursor-pointer pl-2">Home</span>
        <span className="hover:text-teal-500 cursor-pointer">About</span>
        <span className="hover:text-teal-500 cursor-pointer">Projects</span>
        <span className="hover:text-teal-500 cursor-pointer pr-2">Contact</span>

      </div>
    </div>
  )
}

export default Header
