import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Clock } from 'lucide-react';

const courseModules = [
  {
    title: 'Módulo 1: Fundamentos dos Redutores',
    lessons: [
      'Aula 1 - Introdução a redutor',
      'Aula 2 - Componentes de um redutor',
      'Aula 13 - Caixas de engrenagens',
      'Aula 15 - Configuração de redutores'
    ]
  },
  {
    title: 'Módulo 2: Tipos de Engrenagens',
    lessons: [
      'Aula 3 - Tipos de engrenagens - cônica',
      'Aula 4 - Tipos de engrenagens - rosca sem fim',
      'Aula 5 - Tipos de engrenagens - cilíndrica',
      'Aula 6 - Tipos de engrenagens - planetária'
    ]
  },
  {
    title: 'Módulo 3: Componentes Auxiliares',
    lessons: [
      'Aula 7 - Vedação para redutores',
      'Aula 8 - Tipos de rolamentos aplicado em redutores',
      'Aula 9 - Introdução a chavetas',
      'Aula 10 - Tipos de chaveta'
    ]
  },
  {
    title: 'Módulo 4: Sistemas de Ventilação e Manutenção',
    lessons: [
      'Aula 11 - Respiros',
      'Aula 12 - Importância dos respiros',
      'Aula 14 - Solução de vazamento em redutor'
    ]
  },
  {
    title: 'Módulo 5: Técnicas Preditivas',
    lessons: [
      'Aula 16 - Técnicas preditivas para redutores',
      'Aula 17 - Análise de vibração para redutores',
      'Aula 18 - Termografia para redutores',
      'Aula 19 - Ultrasom para redutores'
    ]
  },
  {
    title: 'Módulo 6: Testes e Análises Avançadas',
    lessons: [
      'Aula 20 - O que é backlash',
      'Aula 21 - Teste de contato de engrenagens'
    ]
  }
];

const CourseContentSection: React.FC = () => {
  const [openModules, setOpenModules] = useState<number[]>([]);

  const toggleModule = (index: number) => {
    setOpenModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="curso" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Conteúdo do Curso
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            <span className="font-bold text-blue-600">21 aulas completas</span> divididas em 6 módulos práticos 
            que vão transformar você em um especialista em manutenção de redutores
          </p>
          <div className="flex justify-center items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>15+ horas de conteúdo</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span>Aulas práticas</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {courseModules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{module.title}</h3>
                </div>
                {openModules.includes(index) ? (
                  <ChevronDown className="w-6 h-6 text-slate-600" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-slate-600" />
                )}
              </button>
              
              {openModules.includes(index) && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-14 space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <Play className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://pay.hotmart.com/W75668712R?off=iqyoym9b&checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300 inline-block text-center animate-pulse"
          >
            Realizar Inscrição
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;