import React from 'react';
import { Award, Clock, BookOpen, TrendingUp, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Certificação Reconhecida',
    description: 'Aumente sua credibilidade no mercado com certificado válido nacionalmente'
  },
  {
    icon: Clock,
    title: 'Acesso Vitalício',
    description: 'Estude quando e onde quiser, no seu ritmo, sem pressa'
  },
  {
    icon: BookOpen,
    title: 'Conteúdo Completo',
    description: 'Do básico ao avançado sobre redutores e engrenagens'
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Profissional',
    description: 'Destaque-se e conquiste melhores oportunidades no mercado'
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: '30 dias de garantia ou seu dinheiro de volta'
  },
  {
    icon: Users,
    title: 'Suporte Especializado',
    description: 'Tire suas dúvidas com nossa equipe de especialistas'
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Course Image */}
        <div className="text-center mb-16">
          <img 
            src="/CAPA - REDUTOR copy copy.jpg" 
            alt="Curso Redutor e Engrenagens - Mecânica Total" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl animate-fade-in"
          />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Por que escolher nosso curso?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforme sua carreira com o curso mais completo de manutenção de redutores do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse inline-block text-center"
          >
            Ver Conteúdo Completo do Curso
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;