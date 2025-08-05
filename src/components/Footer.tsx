import React from 'react';
import { Mail, Phone, Clock, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/LOGO.jpg" 
                alt="Mecânica Total Logo" 
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center';
                  fallback.innerHTML = '<span class="text-white font-bold text-xs">MT</span>';
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
              <span className="text-xl font-bold">Mecânica Total®</span>
            </div>
            <p className="text-slate-400 mb-4">
              Transformando profissionais através da educação técnica de qualidade.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4" />
                <span>CNPJ: 29.705.491/0001-58</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-slate-400">suporte@mecanicatotalbrasil.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-slate-400">+55 27 99322-2442</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <div className="text-slate-400">
                  <div>Segunda a Sexta</div>
                  <div>08:00 às 18:00</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block text-slate-400 hover:text-orange-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Mecânica Total®. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;