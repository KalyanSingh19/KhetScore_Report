import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SampleChart } from './SampleChart';

export function InsightsSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{background: 'linear-gradient(45deg, #0cc0df, #ffde59)'}}>
          💡
        </div>
        <h2 className="text-2xl font-semibold" style={{background: 'linear-gradient(90deg, #0cc0df, #ffde59)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Key Insights & Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4" style={{borderLeftColor: '#0cc0df', background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.05))'}}>
          <h3 className="text-lg mb-3 text-gray-900">🌱 Best Performing Season</h3>
          <p className="mb-4 text-gray-800">
            <strong>Oct 2021 - Jan 2022 (Paddy)</strong><br />
            Score: 49.6 - This was your most successful season with excellent health scores.
          </p>
          <div className="rounded-lg p-3 border" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.1))', borderColor: 'rgba(12, 192, 223, 0.3)'}}>
            <p className="text-gray-800"><strong>Repeat this success:</strong> Use similar practices and timing for future paddy crops.</p>
          </div>
        </Card>

        <Card className="p-6 border-l-4" style={{borderLeftColor: '#ffde59', background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.05))'}}>
          <h3 className="text-lg mb-3 text-gray-900">💧 Drought History</h3>
          <p className="mb-4 text-gray-800">
            <strong>Last Major Drought: 2019</strong><br />
            Severe drought reduced yield by 40%. Water conservation strategies implemented since then.
          </p>
          <div className="rounded-lg p-3 border" style={{background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.1))', borderColor: 'rgba(255, 222, 89, 0.3)'}}>
            <p className="text-gray-800"><strong>Preparedness:</strong> Drip irrigation and rainwater harvesting systems in place.</p>
          </div>
        </Card>

        <Card className="p-6 border-l-4" style={{borderLeftColor: '#0cc0df', background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.05))'}}>
          <h3 className="text-lg mb-3 text-gray-900">🌊 Flood History</h3>
          <p className="mb-4 text-gray-800">
            <strong>Monsoon Flooding: 2021, 2022</strong><br />
            Heavy rainfall caused waterlogging in low-lying areas. Drainage improved since 2023.
          </p>
          <div className="rounded-lg p-3 border" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.1))', borderColor: 'rgba(12, 192, 223, 0.3)'}}>
            <p className="text-gray-800"><strong>Mitigation:</strong> Enhanced drainage channels and raised bed farming adopted.</p>
          </div>
        </Card>

        <Card 
          className="p-6 border-l-4 cursor-pointer hover:shadow-lg transition-shadow" 
          style={{borderLeftColor: '#ffde59', background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.05))'}}
          onClick={() => toggleCard('water')}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg text-gray-900">💧 Water Management</h3>
            {expandedCard === 'water' ? <ChevronUp size={20} className="text-gray-700" /> : <ChevronDown size={20} className="text-gray-700" />}
          </div>
          <p className="mb-4 text-gray-800">
            <strong>Efficient Irrigation</strong><br />
            Your farm shows good access to water sources. Maintain regular irrigation schedules for optimal crop growth.
          </p>
          <div className="rounded-lg p-3 mb-4 border" style={{background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.1))', borderColor: 'rgba(255, 222, 89, 0.3)'}}>
            <p className="text-gray-800"><strong>Tip:</strong> Monitor soil moisture and adjust watering based on crop needs.</p>
          </div>
          
          {expandedCard === 'water' && (
            <div className="space-y-4 border-t pt-4">
              <h4 className="text-base">NDWI, NDRE, NDVI Sample Graphs</h4>
              <SampleChart title="NDVI" color="#4caf50" />
              <SampleChart title="NDWI" color="#2196f3" />
              <SampleChart title="NDRE" color="#ff9800" />
            </div>
          )}
        </Card>

        <Card 
          className="p-6 border-l-4 cursor-pointer hover:shadow-lg transition-shadow" 
          style={{borderLeftColor: '#0cc0df', background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.05))'}}
          onClick={() => toggleCard('pest')}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg text-gray-900">🦠 Pest & Disease Control</h3>
            {expandedCard === 'pest' ? <ChevronUp size={20} className="text-gray-700" /> : <ChevronDown size={20} className="text-gray-700" />}
          </div>
          <p className="mb-4 text-gray-800">
            <strong>Preventive Measures</strong><br />
            No major pest issues detected, but regular monitoring is advised to avoid future outbreaks.
          </p>
          <div className="rounded-lg p-3 mb-4 border" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.1))', borderColor: 'rgba(12, 192, 223, 0.3)'}}>
            <p className="text-gray-800"><strong>Action:</strong> Use integrated pest management and keep records of any incidents.</p>
          </div>
          
          {expandedCard === 'pest' && (
            <div className="space-y-4 border-t pt-4">
              <h4 className="text-base">NDWI, NDRE, NDVI Sample Graphs</h4>
              <SampleChart title="NDVI" color="#4caf50" />
              <SampleChart title="NDWI" color="#2196f3" />
              <SampleChart title="NDRE" color="#ff9800" />
            </div>
          )}
        </Card>

        <Card 
          className="p-6 border-l-4 cursor-pointer hover:shadow-lg transition-shadow" 
          style={{borderLeftColor: '#ffde59', background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.05))'}}
          onClick={() => toggleCard('expansion')}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg text-gray-900">🌾 Expansion Potential</h3>
            {expandedCard === 'expansion' ? <ChevronUp size={20} className="text-gray-700" /> : <ChevronDown size={20} className="text-gray-700" />}
          </div>
          <p className="mb-4 text-gray-800">
            <strong>Ready for Growth</strong><br />
            With consistent performance, consider expanding successful crops or trying new varieties.
          </p>
          <div className="rounded-lg p-3 mb-4 border" style={{background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.1))', borderColor: 'rgba(255, 222, 89, 0.3)'}}>
            <p className="text-gray-800"><strong>Suggestion:</strong> Explore market demand and plan for gradual area increase.</p>
          </div>
          
          {expandedCard === 'expansion' && (
            <div className="space-y-4 border-t pt-4">
              <h4 className="text-base">NDWI, NDRE, NDVI Sample Graphs</h4>
              <SampleChart title="NDVI" color="#4caf50" />
              <SampleChart title="NDWI" color="#2196f3" />
              <SampleChart title="NDRE" color="#ff9800" />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}