import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface SeasonCardProps {
  status: string;
  dates: string;
  crop: string;
  score: number;
  metrics: {
    health: number;
    nutrients: number;
    soilMoisture: number;
    plantMoisture: number;
  };
}

export function SeasonCard({ status, dates, crop, score, metrics }: SeasonCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'very good': return 'bg-blue-100 text-blue-800';
      case 'good': return 'bg-yellow-100 text-yellow-800';
      case 'fair': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'excellent': return 'text-green-600';
      case 'very good': return 'text-blue-600';
      case 'good': return 'text-yellow-600';
      case 'fair': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <Badge className={getStatusColor(status)}>{status}</Badge>
        <span className="text-sm text-gray-600">{dates}</span>
      </div>
      
      <div className="mb-3">{crop}</div>
      
      <div className={`text-2xl mb-4 ${getScoreColor(status)}`}>
        {score}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded p-2 text-center">
          <div className="text-xs text-gray-600 mb-1">Health</div>
          <div className="text-sm">{metrics.health}</div>
        </div>
        <div className="bg-gray-50 rounded p-2 text-center">
          <div className="text-xs text-gray-600 mb-1">Nutrients</div>
          <div className="text-sm">{metrics.nutrients}</div>
        </div>
        <div className="bg-gray-50 rounded p-2 text-center">
          <div className="text-xs text-gray-600 mb-1">Soil Moisture</div>
          <div className="text-sm">{metrics.soilMoisture}</div>
        </div>
        <div className="bg-gray-50 rounded p-2 text-center">
          <div className="text-xs text-gray-600 mb-1">Plant Moisture</div>
          <div className="text-sm">{metrics.plantMoisture}</div>
        </div>
      </div>
    </Card>
  );
}