import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/LOGO.jpg" 
            alt="Mecânica Total Logo" 
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center';
              fallback.innerHTML = '<span class="text-white font-bold text-sm">MT</span>';
              target.parentNode?.insertBefore(fallback, target);
            }}
          />
          <span className="text-xl font-bold">Mecânica Total®</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#curso" className="hover:text-orange-400 transition-colors">
            Sobre o Curso
          </a>
          <a href="#depoimentos" className="hover:text-orange-400 transition-colors">
            Depoimentos
          </a>
          <a href="#garantia" className="hover:text-orange-400 transition-colors">
            Garantia
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;