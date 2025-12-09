import { useEffect } from "react";
import Navbar from "../components/navbar";
import bgImage from "../assets/images/bg-hero.png";

// Import des images disponibles
import reactLogo from "../assets/images/logos/reactjs.png";
import nextjsLogo from "../assets/images/logos/nextjs.png";
import typescriptLogo from "../assets/images/logos/typescript.png";
import expressjs from "../assets/images/logos/expressjs.png";
import nodejsLogo from "../assets/images/logos/nodejs.png";
import tailwindLogo from "../assets/images/logos/tailwindcss.png";
import jsLogo from "../assets/images/logos/js.webp";
import phpLogo from "../assets/images/logos/php.png";
import mysqlLogo from "../assets/images/logos/mysql.png";
import dockerLogo from "../assets/images/logos/docker.svg";
import gitLogo from "../assets/images/logos/git.png";
import vscodeLogo from "../assets/images/logos/vscode.png";
import figmaLogo from "../assets/images/logos/figma.png";
import html from "../assets/images/logos/html.png";
import css from "../assets/images/logos/css.png";
import reactnative from "../assets/images/logos/reactnative.png";
import flutter from "../assets/images/logos/flutter.png";

// Interface pour les technologies
interface Technology {
  name: string;
  logo: string;
  color: string;
}

// Interface pour les props du composant TechnologyLogo
interface TechnologyLogoProps {
  tech: Technology;
  size?: "small" | "large";
}

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
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tableau des technologies avec leurs logos
  const technologyData: Technology[] = [
    { name: "React", logo: reactLogo, color: "bg-white" },
    { name: "Next.js", logo: nextjsLogo, color: "bg-white" },
    { name: "TypeScript", logo: typescriptLogo, color: "bg-white" },
    { name: "Node.js", logo: nodejsLogo, color: "bg-white" },
    { name: "Tailwind CSS", logo: tailwindLogo, color: "bg-white" },
    { name: "JavaScript", logo: jsLogo, color: "bg-white" },
    { name: "PHP", logo: phpLogo, color: "bg-white" },
    { name: "MySQL", logo: mysqlLogo, color: "bg-white" },
    { name: "Express", logo: expressjs, color: "bg-white" },
    { name: "Docker", logo: dockerLogo, color: "bg-white" },
    { name: "Git", logo: gitLogo, color: "bg-white" },
    { name: "VSCode", logo: vscodeLogo, color: "bg-white" },
    { name: "Figma", logo: figmaLogo, color: "bg-white" },
    { name: "html", logo: html, color: "bg-white" },
    { name: "css", logo: css, color: "bg-white" },
    { name: "React Native", logo: reactnative, color: "bg-white" },
    { name: "Flutter", logo: flutter, color: "bg-white" },
  ];

  // Composant pour afficher un logo ou un fallback
  const TechnologyLogo: React.FC<TechnologyLogoProps> = ({ tech, size = "large" }) => {
    const isLarge = size === "large";

    return (
      <img
        src={tech.logo}
        alt={tech.name}
        className={`w-full h-full object-contain ${isLarge ? '' : 'opacity-80 group-hover:opacity-100'} transition-opacity duration-300`}
        onError={(e) => {
          // Fallback si l'image échoue à charger
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;

          if (parent) {
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = 'text-center';
            fallbackDiv.innerHTML = `
              <div class="${isLarge ? 'text-3xl' : 'text-2xl'} font-bold text-white/80">${tech.name.charAt(0)}</div>
              ${isLarge ? '<div class="text-xs text-white/60 mt-1">Logo</div>' : ''}
            `;
            parent.appendChild(fallbackDiv);
          }
        }}
      />
    );
  };

  return (
    <>
      {/* Section Hero */}
      <div className="relative min-h-screen">
        <div
          className="bg-cover bg-center bg-no-repeat relative min-h-screen w-full text-[#F8FAFC]"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

          <div className="relative z-20 h-screen">
            <Navbar />

            <div className="relative z-10 flex flex-col items-center justify-center text-center h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-10 lg:mb-14 px-2">
                Vous recherchez un développeur ?
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-6 md:mb-8 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2 leading-relaxed md:leading-loose">
                Passionné par le développement, je crée des applications modernes,
                rapides et bien structurées. Chaque projet est pour moi une occasion
                d'innover et d'apprendre. Parcourez mon Portfolio et découvrez mon
                univers de développeur.
              </p>
            </div>

            {/* Flèche positionnée en bas au centre */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full flex justify-center">
              <button
                onClick={scrollToNextSection}
                className="group animate-bounce"
                aria-label="Descendre vers la section suivante"
              >
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300">
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième Section - Faisons connaissance */}
      <section
        id="about-section"
        className="min-h-screen relative bg-gradient-to-b from-[#090919] via-[#3B1E7A] to-[#000000] overflow-hidden"
      >
        {/* Overlay avec effet de texture */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/70"></div>

        {/* Effet de lumière animé */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          {/* Titre principal */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
              Faisons connaissance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full"></div>
          </div>

          {/* Bloc parent positionné en relatif */}
          <div className="relative w-full min-h-[500px]">
            {/* --- Texte en haut à gauche avec bordures arrondies --- */}
            <div className="absolute top-0 left-0 w-full md:w-[48%] p-6 md:p-8 
            bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm
            rounded-tr-3xl rounded-br-3xl
            border-r-2 border-t-2 border-b-2 border-purple-500/50
            shadow-lg shadow-purple-500/20
            hover:shadow-purple-500/40 transition-all duration-500
            hover:scale-[1.02] transform">

              {/* Coin décoratif en haut à droite */}
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-2xl"></div>

              {/* Coin décoratif en bas à droite */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-purple-400 rounded-br-2xl"></div>

              <h1 className="text-gray-300 text-lg md:text-xl leading-relaxed md:leading-loose relative z-10">
                Je m'appelle{' '}
                <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Marc Brou
                </span>
                , développeur web passionné, curieux et toujours en quête de nouveaux défis.
                Mon parcours est né d'une envie simple : créer des solutions utiles, belles,
                fiables et capables de faciliter la vie des gens.
              </h1>

              {/* Points décoratifs */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>

            {/* --- Texte en bas à droite avec bordures arrondies --- */}
            <div className="absolute bottom-0 right-0 w-full md:w-[48%] p-6 md:p-8
            bg-gradient-to-tl from-blue-900/20 to-transparent backdrop-blur-sm
            rounded-tl-3xl rounded-bl-3xl
            border-l-2 border-t-2 border-b-2 border-blue-500/50
            shadow-lg shadow-blue-500/20
            hover:shadow-blue-500/40 transition-all duration-500
            hover:scale-[1.02] transform
            mt-64 md:mt-0">

              {/* Coin décoratif en haut à gauche */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-2xl"></div>

              {/* Coin décoratif en bas à gauche */}
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-2xl"></div>

              <h1 className="text-gray-300 text-lg md:text-xl leading-relaxed md:leading-loose relative z-10">
                Au fil de mes projets, j'ai touché à{' '}
                <span className="text-purple-400 font-semibold">PHP</span>,{' '}
                <span className="text-blue-400 font-semibold">MySQL</span>,{' '}
                <span className="text-yellow-400 font-semibold">JavaScript</span>,{' '}
                <span className="text-green-400 font-semibold">Node.js</span>,{' '}
                <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
                <span className="text-white font-semibold">Next.js</span>,
                en construisant des plateformes complètes, des dashboards admin,
                des systèmes d'authentification sécurisés, des apps de messagerie,
                des pages vitrines, jusqu'à des APIs robustes.
              </h1>

              {/* Points décoratifs */}
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>

            {/* Ligne de connexion centrale décorative */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Technologies Défilantes */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Technologies & Outils
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              L'ensemble des technologies que j'utilise pour créer des applications modernes
            </p>
          </div>

          {/* Premier carrousel - défile de gauche à droite */}
          <div className="relative mb-16">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex animate-slide">
                {[...technologyData, ...technologyData].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[160px] mx-4"
                  >
                    <div className={`w-32 h-32 rounded-2xl ${tech.color} backdrop-blur-sm border border-white/10 flex items-center justify-center p-6 group hover:scale-110 hover:border-purple-500/30 transition-all duration-300`}>
                      <div className="w-20 h-20 flex items-center justify-center">
                        <TechnologyLogo tech={tech} size="large" />
                      </div>
                    </div>
                    <span className="mt-4 text-gray-300 font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deuxième carrousel - défile de droite à gauche (inverse) */}
          <div className="relative">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex animate-slide-reverse">
                {[...technologyData.slice().reverse(), ...technologyData.slice().reverse()].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[140px] mx-3"
                  >
                    <div className={`w-24 h-24 rounded-xl ${tech.color} backdrop-blur-sm border border-white/10 flex items-center justify-center p-5 group hover:scale-105 hover:border-blue-500/30 transition-all duration-300`}>
                      <div className="w-16 h-16 flex items-center justify-center">
                        <TechnologyLogo tech={tech} size="small" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;