import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import CouponSection from './components/CouponSection';
import CourseContentSection from './components/CourseContentSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import SalesNotifications from './components/SalesNotifications';
import ExitPopup from './components/ExitPopup';

function App() {
  const [showExitPopup, setShowExitPopup] = React.useState(false);
  const [hasShownPopup, setHasShownPopup] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai da área superior da página
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    // Mostrar popup após 30 segundos se não foi mostrado ainda
    timeoutId = setTimeout(() => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timeoutId);
    };
  }, [hasShownPopup]);

  const handleClosePopup = () => {
    setShowExitPopup(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <CouponSection />
      <CourseContentSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <Footer />
      <SalesNotifications />
      <ExitPopup isVisible={showExitPopup} onClose={handleClosePopup} />
    </div>
  );
}

export default App;