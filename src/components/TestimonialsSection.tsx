import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "O curso transformou minha carreira! Hoje sou referência na manutenção de redutores da minha empresa.",
    name: "Carlos Mendes",
    role: "Técnico em Manutenção",
    location: "Belo Horizonte - MG"
  },
  {
    text: "Conteúdo excepcional! As aulas práticas me deram a confiança que eu precisava para trabalhar com redutores complexos.",
    name: "Ana Paula Silva",
    role: "Engenheira Mecânica",
    location: "São Paulo - SP"
  },
  {
    text: "Investimento que valeu cada centavo. Consegui uma promoção 3 meses após concluir o curso!",
    name: "Roberto Santos",
    role: "Supervisor de Manutenção",
    location: "Rio de Janeiro - RJ"
  },
  {
    text: "Professor excelente e material didático top! Recomendo para todos que trabalham com manutenção industrial.",
    name: "Fernanda Costa",
    role: "Técnica Industrial",
    location: "Curitiba - PR"
  },
  {
    text: "Curso completo e detalhado. Me sinto muito mais preparado para enfrentar qualquer desafio com redutores.",
    name: "João Oliveira",
    role: "Mecânico Industrial",
    location: "Porto Alegre - RS"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Histórias reais de profissionais que transformaram suas carreiras
          </p>
        </div>
        
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="border-t border-white/20 pt-6">
              <div className="font-bold text-xl text-orange-400">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-blue-200 mt-1">
                {testimonials[currentTestimonial].role}
              </div>
              <div className="text-blue-300 text-sm mt-1">
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-orange-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 inline-block text-center animate-pulse"
          >
            Realizar Inscrição
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;