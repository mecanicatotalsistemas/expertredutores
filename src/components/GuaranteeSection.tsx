import React from 'react';
import { Shield, RefreshCw, CheckCircle } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="py-20 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center animate-pulse">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Garantia de <span className="text-green-600">7 Dias</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Estamos tão confiantes na qualidade do nosso curso que oferecemos uma garantia 
            incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, 
            <strong className="text-green-600"> devolvemos 100% do seu dinheiro</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Sem Riscos</h3>
              <p className="text-slate-600">Garantia de 7 dias após a compra</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Reembolso Rápido</h3>
              <p className="text-slate-600">Devolução em até 7 dias úteis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">100% Seguro</h3>
              <p className="text-slate-600">Sem perguntas, sem complicações</p>
            </div>
          </div>
          
          <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg">
            <p className="text-green-800 font-semibold text-lg">
              💡 <strong>Nossa promessa:</strong> Se você não ficar satisfeito com a qualidade 
              do conteúdo nos primeiros 7 dias, devolvemos seu investimento integral!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;