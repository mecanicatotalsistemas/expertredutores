import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const salesData = [
  { name: 'Renata S.', location: 'Salvador - BA' },
  { name: 'André L.', location: 'Curitiba - PR' },
  { name: 'Paulo R.', location: 'Fortaleza - CE' },
  { name: 'Marina C.', location: 'Rio de Janeiro - RJ' },
  { name: 'Carlos M.', location: 'Belo Horizonte - MG' },
  { name: 'Fernanda L.', location: 'Porto Alegre - RS' },
  { name: 'Roberto S.', location: 'Brasília - DF' },
  { name: 'Ana P.', location: 'São Paulo - SP' },
  { name: 'João S.', location: 'Recife - PE' },
  { name: 'Juliana F.', location: 'Goiânia - GO' },
  { name: 'Pedro A.', location: 'Manaus - AM' },
  { name: 'Camila R.', location: 'Florianópolis - SC' },
  { name: 'Lucas M.', location: 'Vitória - ES' },
  { name: 'Patrícia S.', location: 'Campo Grande - MS' },
  { name: 'Rafael C.', location: 'Natal - RN' }
];

const SalesNotifications: React.FC = () => {
  const [notification, setNotification] = useState<{
    name: string;
    location: string;
    position: 'top-left' | 'top-right';
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);
  const [lastUsedIndex, setLastUsedIndex] = useState<number | null>(null);

  const getRandomPosition = (): 'top-left' | 'top-right' => {
    return Math.random() < 0.5 ? 'top-left' : 'top-right';
  };

  const getNextNotification = () => {
    let availableIndices = salesData
      .map((_, index) => index)
      .filter(index => index !== lastUsedIndex);

    // Se todos foram usados, reinicia a lista excluindo apenas o último usado
    if (availableIndices.length === 0) {
      availableIndices = salesData
        .map((_, index) => index)
        .filter(index => index !== lastUsedIndex);
      setUsedIndices([]);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const selectedData = salesData[randomIndex];

    setLastUsedIndex(randomIndex);
    setUsedIndices(prev => [...prev, randomIndex]);

    return {
      ...selectedData,
      position: getRandomPosition()
    };
  };

  useEffect(() => {
    const showNotification = () => {
      const notificationData = getNextNotification();
      setNotification(notificationData);
      setIsVisible(true);

      // Esconder após 5 segundos
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setNotification(null);
        }, 300); // Aguarda a animação de fade-out
      }, 5000);
    };

    // Primeira notificação após 3 segundos
    const initialTimer = setTimeout(showNotification, 3000);

    // Notificações subsequentes a cada 12 segundos
    const interval = setInterval(showNotification, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const closeNotification = () => {
    setIsVisible(false);
    setTimeout(() => {
      setNotification(null);
    }, 300);
  };

  if (!notification) return null;

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4'
  };

  return (
    <div 
      className={`fixed ${positionClasses[notification.position]} z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 leading-tight">
                ✅ <span className="font-semibold">{notification.name}</span> de{' '}
                <span className="font-medium">{notification.location}</span>{' '}
                já é nosso aluno
              </p>
            </div>
          </div>
          <button
            onClick={closeNotification}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesNotifications;