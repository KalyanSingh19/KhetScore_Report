import { useState } from 'react';
import { User, MapPin, Calendar, Crop, Phone, Mail } from 'lucide-react';
import { CreditScoreGauge } from './CreditScoreGauge';
import { CreditScoreGaugeCompact } from './CreditScoreGaugeCompact';
import dvaraLogo from 'figma:asset/a4104b700310f35b1ef86cd7143af4b14c572060.png';
import satelliteBackground from 'figma:asset/2092a2927da2efdd2499cbe7a72fabe7c9aadf03.png';

export function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-white" style={{background: 'linear-gradient(90deg, #0cc0df, #ffde59)'}}>
      {/* Main Header - Always Visible */}
      <div 
        className="p-8 cursor-pointer hover:bg-white/5 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-lg">
              <img src={dvaraLogo} alt="Dvara E-Registry" className="h-12 w-auto opacity-95" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-white leading-tight">🌾 Khet Score Report</h1>
              <p className="text-xl text-white/90 mt-1">Swarna Farm • Mulshi, Pune • Total Area: 2.5 Acres</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <CreditScoreGaugeCompact score={70} />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
        {isExpanded && (
          <div className="relative">
            {/* Satellite Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage: `url(${satelliteBackground})`,
              }}
            />
            
            {/* Content Overlay */}
            <div className="relative z-10 p-8 pt-0 space-y-8">
              
              {/* Top Section: Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Farmer Details */}
                <div className="backdrop-blur-md rounded-2xl border border-cyan-400/30 p-4" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.3), rgba(255, 222, 89, 0.2))'}}>
                  <h2 className="mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-300" />
                    Farmer Details
                  </h2>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="opacity-75">Name</p>
                      <p className="font-medium">Rajesh Kumar Singh</p>
                    </div>
                    <div>
                      <p className="opacity-75">Father's Name</p>
                      <p className="font-medium">Mohan Singh</p>
                    </div>
                    <div>
                      <p className="opacity-75">Age</p>
                      <p className="font-medium">45 years</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 opacity-75" />
                      <div>
                        <p className="opacity-75">Contact</p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Details */}
                <div className="backdrop-blur-md rounded-2xl p-6 border border-yellow-400/30" style={{background: 'linear-gradient(135deg, rgba(255, 222, 89, 0.3), rgba(12, 192, 223, 0.2))'}}>
                  <h2 className="text-xl mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-yellow-300" />
                    Registration Details
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-75">DER Farmer ID:</span>
                      <span className="font-mono">91785</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">Request ID:</span>
                      <span className="font-mono text-xs">91785_08012025_142648</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">Registration Date:</span>
                      <span>Jan 08, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">Last Assessment:</span>
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">Status:</span>
                      <span className="text-cyan-300 font-medium">Active</span>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="backdrop-blur-md rounded-2xl p-6 border border-cyan-400/30" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.3), rgba(255, 222, 89, 0.2))'}}>
                  <h2 className="text-xl mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-300" />
                    Location Details
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-75">Village:</span>
                      <span>Panasa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">District:</span>
                      <span>Jajpur</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">State:</span>
                      <span>Odisha</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">PIN Code:</span>
                      <span>755007</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-75">Coordinates:</span>
                      <span className="font-mono text-xs">20.0226, 86.0047</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Farm Summary with Credit Score */}
              <div className="backdrop-blur-md rounded-2xl p-8 border border-white/40" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.4), rgba(255, 222, 89, 0.3))'}}>
                <h2 className="text-2xl mb-6 flex items-center justify-center gap-2">
                  <Crop className="w-6 h-6 text-white" />
                  Farm Summary
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">2.5</p>
                    <p className="text-sm opacity-75">Total Acres</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">2</p>
                    <p className="text-sm opacity-75">Active Plots</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">6</p>
                    <p className="text-sm opacity-75">Crop Varieties</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">22</p>
                    <p className="text-sm opacity-75">Years Experience</p>
                  </div>
                </div>

                {/* Credit Score Gauge - Centered */}
                <div className="flex justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h3 className="text-center text-white text-lg mb-4">Farm Credit Score</h3>
                    <CreditScoreGauge score={70} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}