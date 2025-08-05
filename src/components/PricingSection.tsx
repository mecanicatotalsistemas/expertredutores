import React from 'react';
import { CreditCard, DollarSign, Star, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          💰 Investimento que Transforma sua Carreira
        </h2>
        
        <p className="text-xl mb-12 text-green-100">
          Escolha a forma de pagamento que melhor se adapta ao seu orçamento
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pagamento à Vista */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-green-200">Pagamento à Vista</h3>
            
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-white mb-2">R$ 117,00</div>
              <div className="text-green-200">Pagamento único</div>
            </div>
            
            <div className="space-y-2 text-sm text-green-100">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                <span>Sem juros</span>
              </div>
            </div>
          </div>
          
          {/* Pagamento Parcelado - DESTAQUE */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 border-4 border-yellow-300 relative transform scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                MAIS POPULAR
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Parcelado no Cartão</h3>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-black text-white mb-2 animate-pulse">
                12x R$ 12,82
              </div>
              <div className="text-white/90 text-lg">*no cartão de crédito</div>
              <div className="text-white/80 text-sm mt-2">Total: R$ 153,84</div>
            </div>
            
            <div className="space-y-2 text-sm text-white/90">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                <span>Cabe no seu orçamento</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                <span>Menos de R$ 13 por mês</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h4 className="text-xl font-bold mb-4 text-yellow-300">
            💡 Por que o parcelado é a melhor opção?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">R$ 12,82</div>
              <div className="text-white/80">Menos que um almoço</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">12x</div>
              <div className="text-white/80">Sem comprometer o orçamento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">Imediato</div>
              <div className="text-white/80">Acesso liberado na hora</div>
            </div>
          </div>
        </div>
        
        <a 
          href="https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-button bg-white text-green-600 font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse inline-block text-center"
        >
          <ArrowRight className="w-8 h-8 inline mr-3" />
          ESCOLHER FORMA DE PAGAMENTO
          <div className="text-lg mt-2 text-green-700">
            <div>💳 À vista ou parcelado</div>
            <div className="text-base">Você escolhe na próxima tela</div>
          </div>
        </a>
        
        <div className="mt-8 text-sm text-white/80">
          <p>✅ Pagamento 100% seguro via Hotmart</p>
          <p>✅ Acesso liberado automaticamente</p>
          <p>✅ Suporte ao cliente 24/7</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;