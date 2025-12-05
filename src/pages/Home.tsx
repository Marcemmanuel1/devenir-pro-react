import { useEffect } from "react";
import Navbar from "../components/navbar";

function Home() {
  // S'assurer que le thème est initialisé correctement
  useEffect(() => {
    // Vérifier si darkMode existe dans localStorage, sinon l'initialiser à false
    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'false');
    }

    // Appliquer le thème initial
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode ? JSON.parse(savedMode) : false;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-[#061222] dark:to-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500">
      <Navbar />

      {/* Contenu principal */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Bienvenue sur{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              mon portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Développeur passionné créant des expériences web modernes et innovantes
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Découvrir mes projets
          </button>
        </section>

        {/* Sections d'exemple */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Design Moderne</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interfaces utilisateur élégantes et intuitives avec une attention particulière aux détails.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Développement Web</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Applications performantes et réactives utilisant les dernières technologies.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Expérience Utilisateur</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Focus sur l'expérience utilisateur pour des produits accessibles et agréables.
            </p>
          </div>
        </section>

        {/* Section Contact */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Intéressé par mon travail ?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.
          </p>
          <button className="border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300">
            Me contacter
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 pb-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Développé avec React, TypeScript et Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;