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

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="bg-cover bg-center bg-no-repeat relative min-h-screen w-full text-[#F8FAFC]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

        <div className="relative z-20">
          <Navbar />

          <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-10 lg:mb-14 px-2">
              Vous recherchez un développeur ?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-6 md:mb-8 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2 leading-relaxed md:leading-loose">
              Passionné par le développement, je crée des applications modernes,
              rapides et bien structurées. Chaque projet est pour moi une occasion
              d'innover et d'apprendre. Parcourez mon Portfolio et découvrez mon
              univers de développeur.
            </p>
          </div>

          <button
            onClick={scrollToNextSection}
            className="relative bottom-0 left-1/2 transform -translate-x-1/2 z-10 group"
            aria-label="Descendre vers la section suivante"
          >
            <div className="animate-bounce bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            <div className="absolute -inset-4">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;