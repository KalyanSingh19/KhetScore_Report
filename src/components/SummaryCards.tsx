import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card className="p-6 border-l-4 hover:shadow-xl transition-all duration-300 border-cyan-200" style={{borderLeftColor: '#0cc0df', background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.05))'}}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Overall Farm Health</h3>
          <Badge className="text-white hover:shadow-lg px-3 py-1" style={{background: 'linear-gradient(45deg, #0cc0df, #ffde59)'}}>Excellent</Badge>
        </div>
        <div className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #0cc0df, #ffde59)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>75.0</div>
        <div className="rounded-lg p-4 border" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.1), rgba(255, 222, 89, 0.1))', borderColor: 'rgba(12, 192, 223, 0.3)'}}>
          <h4 className="mb-2 font-semibold text-gray-800">🌱 Great Work!</h4>
          <p className="text-gray-700">Your farm is performing excellently. Continue current practices and consider expanding successful crops.</p>
        </div>
      </Card>

      <Card className="p-6 border-l-4 hover:shadow-xl transition-all duration-300 border-yellow-200" style={{borderLeftColor: '#ffde59', background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.05))'}}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Total Farm Area</h3>
          <Badge className="text-white hover:shadow-lg px-3 py-1" style={{background: 'linear-gradient(45deg, #ffde59, #0cc0df)'}}>6 Crops</Badge>
        </div>
        <div className="text-4xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #ffde59, #0cc0df)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          2.6 <span className="text-lg">ACRES</span>
        </div>
        <div className="rounded-lg p-4 border" style={{background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.1), rgba(12, 192, 223, 0.1))', borderColor: 'rgba(255, 222, 89, 0.3)'}}>
          <h4 className="mb-2 font-semibold text-gray-800">🌾 Diversification</h4>
          <p className="text-gray-700">Good crop diversity. Consider rotating between Paddy and Groundnut for soil health.</p>
        </div>
      </Card>
    </div>
  );
}