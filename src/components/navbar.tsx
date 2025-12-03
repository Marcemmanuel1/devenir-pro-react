import { IoLanguage, IoMoonSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-5xl font-bold">
        <h1>Br <span className=" text-5xl">.</span></h1>
      </div>
      <div className="bg-none p-4 rounded-[50px] text-white flex items-center gap-12 text-[1.2rem] mr-6  font-medium">

        <a className="hover:text-white/80 transition-all duration-300 cursor-pointer">
          Acceuil
        </a>

        <a className="transition-all duration-300 cursor-pointer">
          A propos
        </a>

        <a className="transition-all duration-300 cursor-pointer">
          Projet
        </a>

        <a className=" transition-all duration-300 cursor-pointer">
          Contact
        </a>
      </div>

      <div className="flex gap-6 p-4">
        <div className="bg-white p-2 rounded-full">
          <IoLanguage size={18} className="text-black" />
        </div>

        <div className="bg-white p-2 rounded-full">
          <IoMoonSharp size={18} className="text-black" />
        </div>


      </div>
    </div>
  );
}

export default Navbar;