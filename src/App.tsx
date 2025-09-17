import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header';
import { SummaryCards } from './components/SummaryCards';
import { PlotsSection } from './components/PlotsSection';
import { WeatherSection } from './components/WeatherSection';
import { InsightsSection } from './components/InsightsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [showReport, setShowReport] = useState(false);

  const handleOpenReport = () => {
    setShowReport(true);
  };

  const handleBackToLanding = () => {
    setShowReport(false);
  };

  if (!showReport) {
    return <LandingPage onOpenReport={handleOpenReport} />;
  }

  return (
    <div className="min-h-screen p-5" style={{background: 'linear-gradient(90deg, #0cc0df, #ffde59)'}}>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Back button */}
        <button
          onClick={handleBackToLanding}
          className="absolute top-4 right-4 z-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{background: 'linear-gradient(45deg, #0cc0df, #ffde59)'}}
        >
          ← Back to Home
        </button>
        
        <Header />
        
        <div className="p-8">
          <SummaryCards />
          <PlotsSection />
          <WeatherSection />
          <InsightsSection />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}