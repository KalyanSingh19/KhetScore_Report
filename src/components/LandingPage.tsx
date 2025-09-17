import React from 'react';
import { CreditScoreGauge } from './CreditScoreGauge';

import backgroundImage from '../assets/LP4.png';
import farmerImage from 'figma:asset/860f810fa2c36ef4e511079e94d68c36de670553.png';
import KS_Logo from '../assets/KS_Logo.png';

interface LandingPageProps {
  onOpenReport: () => void;
}

interface FarmerData {
  name: string;
  id: string;
  area: string;
  location: string;
  cropsGrown: string;
  contact: string;
  creditScore: number;
}

export function LandingPage({ onOpenReport }: LandingPageProps) {
  // Sample farmer data - this could be passed as props or fetched from an API
  const farmerData: FarmerData = {
    name: "Rajesh Kumar Singh",
    id: "SER: 92193",
    area: "2.5 Acres",
    location: "Panasa, Jajpur, Odisha",
    cropsGrown: "Wheat, Rice", 
    contact: "+91 9876 4310",
    creditScore: 75
  };



  return (
    <div className="w-screen h-screen relative overflow-hidden cursor-pointer group" onClick={onOpenReport}>
      {/* Background Image */}
      <img 
        src={backgroundImage}
        alt="Agricultural Landscape"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      
      {/* Central Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          
          {/* Farmer Image - positioned on top of the card */}
         {/* <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
            <img 
              src={farmerImage}
              alt="Farmer Couple"
              className="w-40 h-28 object-contain drop-shadow-2xl"
            />
          </div>
          */}

          <div className="rounded-2xl shadow-2xl border border-cyan-200/60 backdrop-blur-sm p-6 pt-5 w-[420px] max-w-[90vw] transition-all duration-300 group-hover:shadow-3xl group-hover:scale-[1.02]" style={{background: 'linear-gradient(135deg, rgba(12, 192, 223, 0.15), rgba(255, 222, 89, 0.15), rgba(255, 255, 255, 0.9))'}}>
            
            {/* Header with Leaf Icon */}
            <div className="flex flex-col items-center justify-center mb-2">
  <img 
    src={KS_Logo} 
    alt="Khet Score Logo" 
    className="w-14 h-14 mb-2"
  />
</div>


          {/* Credit Score Gauge */}
          

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Farm Details */}
            <div>
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 text-cyan-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <h3 className="font-semibold text-gray-800 text-sm">FARM DETAILS</h3>
              </div>
              
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-gray-600 font-medium">TOTAL AREA:</div>
                  <div className="text-gray-800 font-semibold">{farmerData.area}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">LOCATION:</div>
                  <div className="text-gray-800 font-semibold">{farmerData.location}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">CROPS GROWN:</div>
                  <div className="text-gray-800 font-semibold">{farmerData.cropsGrown}</div>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 text-cyan-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
                <h3 className="font-semibold text-gray-800 text-sm">PERSONAL DETAILS</h3>
              </div>
              
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-gray-600 font-medium">{farmerData.name}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">FARMER ID:</div>
                  <div className="text-gray-800 font-semibold font-mono">{farmerData.id}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">CONTACT:</div>
                  <div className="text-gray-800 font-semibold">{farmerData.contact}</div>
                </div>
              </div>
            </div>
          </div>
         <div className="flex justify-center mb-6">
  <div className="relative">
    <CreditScoreGauge score = {75}
      value={farmerData.creditScore} 
      size={220} 
      thickness={20} 
    />
  </div>
</div>


          {/* Action Button */}
          <button 
            className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            style={{background: 'linear-gradient(45deg, #0cc0df, #ffde59)'}}
          >
            VIEW FULL PROFILE
          </button>
          </div>
        </div>
      </div>

      {/* Click instruction */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium animate-pulse border border-white/20">
          🌾 Click the card to view detailed farm report
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}