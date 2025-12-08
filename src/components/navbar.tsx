import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("home");
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveLink(section);
    setClickedLink(section);

    // Animation feedback
    setTimeout(() => setClickedLink(null), 800);

    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled
          ? " "
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* LOGO avec effet glow */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <h1 className="text-white text-4xl font-bold tracking-wide relative z-10">
              Br<span className="text-[#8B7BFF] animate-pulse">.</span>
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B7BFF]/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          </motion.div>

          {/* MENU DESKTOP avec effet glass amélioré */}
          <div
            className="
              hidden md:flex relative px-10 py-4 rounded-[50px]
              bg-gradient-to-br from-white/8 to-white/4 
              border border-white/30 backdrop-blur-2xl
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.25)]
              before:absolute before:inset-0 before:rounded-[50px] before:bg-gradient-to-br 
              before:from-white/20 before:via-transparent before:to-transparent before:opacity-40 before:pointer-events-none
              after:absolute after:inset-0 after:rounded-[50px] after:bg-gradient-to-tl 
              after:from-white/15 after:via-transparent after:to-transparent after:opacity-30 after:pointer-events-none
            "
          >
            <div className="flex items-center gap-12 text-[1.1rem] font-medium relative z-10">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  initial={false}
                  animate={clickedLink === item ? { scale: 0.95 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <span
                    onClick={() => handleNavClick(item)}
                    className={`
                      px-6 py-3 rounded-[50px] cursor-pointer transition-all duration-500 relative overflow-hidden
                      ${activeLink === item
                        ? "text-white bg-gradient-to-r from-[#8B7BFF]/40 via-[#8B7BFF]/25 to-[#8B7BFF]/40 shadow-[0_0_30px_#8B7BFF,inset_0_1px_1px_rgba(255,255,255,0.4)] border border-[#8B7BFF]/50"
                        : "text-gray-200 hover:text-white bg-gradient-to-r from-white/0 via-white/5 to-white/0 hover:bg-gradient-to-r hover:from-white/10 hover:via-white/15 hover:to-white/10"
                      }
                    `}
                  >

                    {/* Effet de bordure lumineuse */}
                    {activeLink === item && (
                      <div className="absolute inset-0 rounded-[50px] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    )}

                    <span className="relative z-10 tracking-wide">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>

                    {/* Point indicateur actif */}
                    {activeLink === item && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8B7BFF] shadow-[0_0_10px_#8B7BFF]"
                      />
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MENU BURGER MOBILE */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white text-3xl z-50 relative p-3 rounded-[50px] bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoClose /> : <IoMenu />}
          </motion.button>
        </div>
      </div>

      {/* MENU MOBILE avec effet glass */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="
              md:hidden fixed top-0 right-0 h-full w-72 
              bg-gradient-to-br from-white/12 via-white/8 to-white/4 
              backdrop-blur-2xl border-l border-white/25
              shadow-[inset_2px_0_8px_rgba(255,255,255,0.1),-8px_0_32px_rgba(0,0,0,0.3)]
              overflow-hidden
            "
          >
            {/* Effet de brillance */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B7BFF] to-transparent"></div>

            <div className="flex flex-col items-start p-8 gap-4 mt-24">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <motion.span
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleNavClick(item);
                      setMobileOpen(false);
                    }}
                    className={`
                      flex items-center justify-between text-lg font-medium cursor-pointer 
                      px-6 py-4 rounded-[50px] w-full transition-all duration-500 relative overflow-hidden
                      ${activeLink === item
                        ? "text-white bg-gradient-to-r from-[#8B7BFF]/40 to-[#8B7BFF]/30 shadow-[0_0_25px_#8B7BFF,inset_0_1px_1px_rgba(255,255,255,0.4)] border border-[#8B7BFF]/50"
                        : "text-gray-300 hover:text-white bg-gradient-to-r from-white/5 to-transparent hover:from-white/10"
                      }
                    `}
                  >
                    {/* Effet glass au clic */}
                    {clickedLink === item && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40"
                        style={{ mixBlendMode: "overlay" }}
                      />
                    )}

                    <span className="relative z-10 tracking-wide">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>

                    {activeLink === item && (
                      <div className="relative z-10 w-2 h-2 rounded-full bg-[#8B7BFF] shadow-[0_0_10px_#8B7BFF]"></div>
                    )}
                  </motion.span>
                </motion.div>
              ))}

              {/* Effet de décoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <span>Navigation</span>
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}