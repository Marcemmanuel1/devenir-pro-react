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

      </div>
    </div>
  );
}

export default Home;