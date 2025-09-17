import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface NDVIChartProps {
  plotName: string;
  data?: Array<{
    date: string;
    ndvi: number;
    health: string;
  }>;
}

export function NDVIChart({ plotName, data }: NDVIChartProps) {
  // Default NDVI data if none provided
  const defaultData = [
    { date: 'Jan', ndvi: 0.3, health: 'Low' },
    { date: 'Feb', ndvi: 0.45, health: 'Moderate' },
    { date: 'Mar', ndvi: 0.6, health: 'Good' },
    { date: 'Apr', ndvi: 0.75, health: 'High' },
    { date: 'May', ndvi: 0.82, health: 'Very High' },
    { date: 'Jun', ndvi: 0.78, health: 'High' },
    { date: 'Jul', ndvi: 0.85, health: 'Very High' },
    { date: 'Aug', ndvi: 0.72, health: 'High' },
    { date: 'Sep', ndvi: 0.68, health: 'Good' },
    { date: 'Oct', ndvi: 0.55, health: 'Moderate' },
    { date: 'Nov', ndvi: 0.42, health: 'Moderate' },
    { date: 'Dec', ndvi: 0.35, health: 'Low' }
  ];

  const chartData = data || defaultData;

  const getHealthColor = (ndvi: number) => {
    if (ndvi >= 0.8) return '#10b981'; // Emerald
    if (ndvi >= 0.6) return '#84cc16'; // Lime
    if (ndvi >= 0.4) return '#eab308'; // Yellow
    return '#f97316'; // Orange
  };

  const formatTooltip = (value: any, name: string) => {
    if (name === 'ndvi') {
      return [value.toFixed(3), 'NDVI Value'];
    }
    return [value, name];
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
          <p className="font-semibold text-gray-800">{`${label} 2024`}</p>
          <p className="text-green-600">
            <span className="font-medium">NDVI:</span> {data.ndvi.toFixed(3)}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Health:</span> {data.health}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-green-800 flex items-center gap-2">
          🛰️ NDVI Vegetation Index
        </h4>
        <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
          2024 Data
        </div>
      </div>
      
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <defs>
              <linearGradient id="ndviGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#374151' }}
            />
            <YAxis 
              domain={[0, 1]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#374151' }}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="ndvi"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#ndviGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span>Low (0-0.4)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>Moderate (0.4-0.6)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            <span>Good (0.6-0.8)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>High (0.8+)</span>
          </div>
        </div>
      </div>
    </div>
  );
}