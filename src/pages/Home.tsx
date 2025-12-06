import { useEffect } from "react";
import Navbar from "../components/navbar";
import bgImage from "../assets/images/bg-hero.png";


function Home() {
  useEffect(() => {
    if (localStorage.getItem("darkMode") === null) {
      localStorage.setItem("darkMode", "false");
    }

    const savedMode = localStorage.getItem("darkMode");
    const isDarkMode = savedMode ? JSON.parse(savedMode) : false;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-cover bg-center relative min-h-screen z-10 text-[#F8FAFC]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />

        <div className="flex h-[100vh]  flex-col items-center justify-center text-center px-4 pt-32 pb-16 md:pb-32 lg:pb-48">
          <h1 className="lg:text-[20rem] sm:text-[18rem]  text-[9rem] font-extrabold stroke-white">
            PORT
          </h1>
          <h1 className="lg:text-[18rem] text-[8rem] sm:-mt-40 lg:-mt-50 -mt-20 sm:text-[16rem] font-extrabold stroke-white">
            FOLIO
          </h1>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default Home;