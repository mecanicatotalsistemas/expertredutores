import React, { useState } from 'react';
import { Copy, Gift, ArrowRight } from 'lucide-react';

const CouponSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCouponClick = async () => {
    try {
      // Copiar cupom para área de transferência
      await navigator.clipboard.writeText('ALUNO10');
      
      // Mostrar mensagem de confirmação
      setCopied(true);
      
      // Esconder mensagem após 3 segundos
      setTimeout(() => {
        setCopied(false);
      }, 3000);
      
      // Redirecionar para checkout com cupom após pequeno delay
      setTimeout(() => {
        window.open('https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10&coupon=ALUNO10', '_blank');
      }, 1000);
      
    } catch (err) {
      // Fallback caso clipboard não funcione
      console.log('Cupom: ALUNO10');
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
      
      setTimeout(() => {
        window.open('https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10&coupon=ALUNO10', '_blank');
      }, 1000);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center animate-bounce">
              <Gift className="w-8 h-8 text-yellow-800" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎁 Oferta Especial por Tempo Limitado!
          </h2>
          
          <p className="text-xl mb-6 text-green-100">
            Use o cupom <span className="bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full font-bold">ALUNO10</span> e ganhe <strong>10% de desconto</strong> na sua matrícula!
          </p>
          
          <div className="mb-6">
            <div className="bg-white/20 rounded-lg p-4 inline-block">
              <div className="flex items-center gap-3">
                <Copy className="w-5 h-5" />
                <span className="font-mono text-xl font-bold">ALUNO10</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleCouponClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse inline-flex items-center gap-3 neon-button"
          >
            <ArrowRight className="w-6 h-6" />
            Usar meu cupom agora
          </button>
          
          {copied && (
            <div className="mt-4 animate-fade-in">
              <p className="text-green-200 font-semibold">
                ✅ Cupom copiado! Aplicaremos automaticamente no checkout.
              </p>
            </div>
          )}
          
          <p className="text-sm text-green-200 mt-4 opacity-80">
            ⏰ Oferta válida por tempo limitado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouponSection;