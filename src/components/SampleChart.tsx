import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface SampleChartProps {
  title: string;
  color: string;
}

export function SampleChart({ title, color }: SampleChartProps) {
  const data = [
    { month: 'Jan', value: 0.45 },
    { month: 'Feb', value: 0.55 },
    { month: 'Mar', value: 0.60 },
    { month: 'Apr', value: 0.70 },
    { month: 'May', value: 0.65 },
  ];

  return (
    <div className="h-32">
      <h5 className="text-sm mb-2">{title} (Sample)</h5>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}