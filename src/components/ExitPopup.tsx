import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';

interface ExitPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ isVisible, onClose }) => {
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
        onClose();
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
        onClose();
      }, 1000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center animate-bounce">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🚨 Espere! Não vá embora!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            Antes de sair, que tal garantir <span className="font-bold text-red-600">10% de desconto</span> na sua matrícula?
          </p>
          
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 font-semibold">
              🎁 Use o cupom <span className="bg-yellow-300 px-2 py-1 rounded font-bold">ALUNO10</span> e economize!
            </p>
          </div>
          
          <button
            onClick={handleCouponClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse mb-4 flex items-center justify-center gap-2"
          >
            <ArrowRight className="w-5 h-5" />
            Usar meu cupom agora
          </button>
          
          {copied && (
            <div className="animate-fade-in">
              <p className="text-green-600 font-semibold text-sm">
                ✅ Cupom copiado! Aplicaremos automaticamente no checkout.
              </p>
            </div>
          )}
          
          <button
            onClick={onClose}
            className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
          >
            Não, obrigado
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;