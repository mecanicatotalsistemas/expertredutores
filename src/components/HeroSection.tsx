import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🔧 <span className="text-orange-400">Torne-se Referência</span> em 
            <br />Inspeção e Manutenção de Redutores!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Aprenda com aulas práticas, conquiste sua <span className="text-green-400 font-semibold">Certificação</span> e 
            dê um salto no crescimento profissional!
          </p>
          
          <a 
            href="https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse mb-8 inline-block text-center"
          >
            <ArrowRight className="w-6 h-6 inline mr-2" />
            Realizar Inscrição
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400">21</div>
              <div className="text-slate-300">Aulas Completas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-slate-300">Acesso Vitalício</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400">Certificado</div>
              <div className="text-slate-300">Reconhecido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;