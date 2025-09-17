import { Sun, CloudRain, Droplets } from "lucide-react";

// You can swap these SVGs for richer .png icons to match MSN Weather
const icons = {
  Optimal: <Sun className="w-7 h-7 text-[#7ebf3c]" />,
  Flood: <CloudRain className="w-7 h-7 text-[#47a5e5]" />,
  Drought: <Sun className="w-7 h-7 text-[#ffb92e]" />,
};

// Use small round colored dots for category backgrounds
const categoryColors = {
  Optimal: "#e1ffd2",
  Flood: "#cbebfd",
  Drought: "#fff6cc",
};

const bandColors = {
  Optimal: 'bg-[#e6fede]',
  Flood: 'bg-[#e7f6fe]',
  Drought: 'bg-[#fff1ce]',
}

const monthVals = [
  { mon: 'JAN', cat: 'Optimal', temp: 24, rain: 10, humid: 55, note: 'Cool season crops.' },
  { mon: 'FEB', cat: 'Optimal', temp: 27, rain: 17, humid: 53, note: 'Pre-monsoon sowing.' },
  { mon: 'MAR', cat: 'Optimal', temp: 31, rain: 12, humid: 48, note: 'Rabi harvesting.' },
  { mon: 'APR', cat: 'Drought', temp: 36, rain: 7, humid: 33, note: 'Water demand up.' },
  { mon: 'MAY', cat: 'Drought', temp: 39, rain: 9, humid: 29, note: 'Protect new plants.' },
  { mon: 'JUN', cat: 'Flood', temp: 34, rain: 96, humid: 70, note: 'Monsoon begins.' },
  { mon: 'JUL', cat: 'Flood', temp: 30, rain: 224, humid: 89, note: 'Heavy rainfall.' },
  { mon: 'AUG', cat: 'Flood', temp: 29, rain: 180, humid: 93, note: 'Peak monsoon.' },
  { mon: 'SEP', cat: 'Optimal', temp: 29, rain: 98, humid: 85, note: 'Late monsoon.' },
  { mon: 'OCT', cat: 'Optimal', temp: 28, rain: 44, humid: 79, note: 'Harvest Kharif.' },
  { mon: 'NOV', cat: 'Drought', temp: 25, rain: 13, humid: 60, note: 'Timely irrigation.' },
  { mon: 'DEC', cat: 'Optimal', temp: 22, rain: 6, humid: 57, note: 'New crop cycle.' },
];

export function WeatherSection() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-2 flex flex-col items-center bg-gradient-to-br from-[#e7f6d7] via-[#e2f1fa] to-[#fff8e1]">
      <div className="text-2xl font-bold text-[#294a15] mb-2 flex gap-2 items-center">
        <Sun className="w-6 h-6 text-[#9dac17]" /> Monthly Agri-Weather Trend
      </div>
      <div className="text-sm text-[#74981e] mb-5 opacity-80">Weather dashboard </div>
      <div className="overflow-x-auto w-full">
        <div className="flex flex-row shadow-xl rounded-2xl bg-white">
          {/* Column header band */}
          {monthVals.map((m) => (
            <div
              key={m.mon}
              className={`flex-1 flex flex-col text-center min-w-[120px] max-w-[120px] border-r last:border-r-0 border-[#e8e8e8]`}
              style={{background: categoryColors[m.cat]}}
            >
              {/* Month & Icon */}
              <div className="flex flex-col justify-center items-center py-3 relative">
                <div className="mb-1">{icons[m.cat]}</div>
                <span className="text-md font-semibold tracking-tight uppercase text-[#47543e]">{m.mon}</span>
                <div className={`absolute right-2 top-3 w-3 h-3 rounded-full ${bandColors[m.cat]}`}></div>
              </div>
              {/* Temperature */}
              <div className="flex flex-col gap-0.5 items-center pb-2">
                <span className="font-bold text-lg text-[#132f12]">{m.temp}°</span>
                <span className="text-xs text-[#99b83a]">{m.cat}</span>
              </div>
              {/* Weather Stats Band */}
              <div className="flex flex-col gap-0.5 px-3 pb-3">
                <div className="flex items-center justify-between text-xs text-[#41794f] font-medium mb-1">
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>{m.temp}°C</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#357971] font-medium mb-1">
                  <CloudRain className="w-4 h-4 text-blue-400" />
                  <span>{m.rain}mm</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#748080] font-medium">
                  <Droplets className="w-4 h-4 text-emerald-400" />
                  <span>{m.humid}%</span>
                </div>
              </div>
              {/* Footer note band */}
              <div className="text-xs text-[#74981e] font-medium bg-[#f4fbe8] border-t border-[#e3eadc] px-2 py-2 min-h-[36px] flex items-center justify-center">
                <span className="mr-1">
                  {m.cat === "Flood" ? "🌧️" : m.cat === "Drought" ? "☀️" : "🌱"}
                </span>
                {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
