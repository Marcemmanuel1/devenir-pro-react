import { useState, useEffect } from "react";
import { IoMoonSharp, IoSunny, IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState("FR");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du thème sombre
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Gestion du scroll pour l'effet de background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer menu mobile quand on change de page
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'backdrop-blur-md shadow-lg py-2'
      : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="text-4xl md:text-5xl font-bold">
            <h1 className="text-gray-800 dark:text-white">
              Br <span className="text-blue-500">.</span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                         p-3 rounded-[50px] backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-8 lg:gap-12 text-[1.1rem] font-medium">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 
                          transition-all duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/50"
                onClick={handleNavClick}
              >
                Accueil
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 
                          transition-all duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/50"
                onClick={handleNavClick}
              >
                À propos
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 
                          transition-all duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/50"
                onClick={handleNavClick}
              >
                Projets
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 
                          transition-all duration-300 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/50"
                onClick={handleNavClick}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-4">
            {/* LANG BUTTON */}
            <div className="relative">
              <div
                className="bg-gradient-to-br from-white to-gray-100 
                          p-2 rounded-full cursor-pointer flex justify-center items-center w-10 h-10 
                          border border-gray-200 shadow-sm hover:shadow-md 
                          transition-all duration-300"
                onClick={() => setShowLang(!showLang)}
              >
                <span className="font-bold text-gray-800 text-[0.9rem]">{lang}</span>
              </div>

              {showLang && (
                <div className="absolute right-0 mt-2 bg-white text-gray-800 
                              shadow-xl rounded-xl py-2 w-32 border border-gray-100 
                              animate-fadeIn z-50">
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left 
                             transition-colors duration-200"
                    onClick={() => {
                      setLang("FR");
                      setShowLang(false);
                    }}
                  >
                    🇫🇷 Français
                  </button>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left 
                             transition-colors duration-200 border-t border-gray-100"
                    onClick={() => {
                      setLang("EN");
                      setShowLang(false);
                    }}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>

            {/* DARK MODE BUTTON */}
            <div
              className="bg-gradient-to-br from-white to-gray-100 
                        p-2 rounded-full cursor-pointer flex items-center justify-center w-10 h-10 
                        border border-gray-200 shadow-sm hover:shadow-md 
                        transition-all duration-300 relative overflow-hidden group"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {/* Fond d'animation */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 
                              transition-all duration-500 
                              ${darkMode ? 'opacity-100' : 'opacity-0'}`} />

              {/* Icônes */}
              <IoSunny
                size={18}
                className={`relative text-yellow-500 transition-all duration-500 z-10 
                          ${darkMode ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
              />
              <IoMoonSharp
                size={18}
                className={`absolute text-blue-500 transition-all duration-500 z-10 
                          ${darkMode ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'}`}
              />
            </div>

            {/* Menu Mobile Button */}
            <button
              className="md:hidden bg-gradient-to-br from-white to-gray-100 
                        p-2 rounded-full cursor-pointer flex items-center justify-center w-10 h-10 
                        border border-gray-200 shadow-sm hover:shadow-md 
                        transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <IoClose size={24} className="text-gray-800" />
              ) : (
                <IoMenu size={24} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border 
                           border-white/20 shadow-xl">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-800 hover:text-blue-600 
                            text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100/50 
                            transition-all duration-300"
                  onClick={handleNavClick}
                >
                  Accueil
                </a>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-blue-600 
                            text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100/50 
                            transition-all duration-300"
                  onClick={handleNavClick}
                >
                  À propos
                </a>
                <a
                  href="#projects"
                  className="text-gray-800 hover:text-blue-600 
                            text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100/50 
                            transition-all duration-300"
                  onClick={handleNavClick}
                >
                  Projets
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-blue-600 
                            text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100/50 
                            transition-all duration-300"
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fond pour fermer le menu mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;