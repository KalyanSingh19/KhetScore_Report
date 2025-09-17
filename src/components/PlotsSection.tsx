import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Filter, RotateCcw } from 'lucide-react';
import { PlotDetails } from './PlotDetails';
import { SeasonCard } from './SeasonCard';
import { NDVIChart } from './NDVIChart';
import plot1image from '../assets/image111.png';

export function PlotsSection() {
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const plot1Seasons = [
    {
      status: 'Excellent',
      dates: 'Oct 2021 - Jan 2022',
      crop: '🌾 Paddy (Common)',
      score: 49.6,
      metrics: { health: 20.0, nutrients: 6.0, soilMoisture: 7.5, plantMoisture: 7.5 }
    },
    {
      status: 'Good',
      dates: 'Mar 2022 - Jun 2022',
      crop: '🥜 Groundnut',
      score: 31.84,
      metrics: { health: 18.0, nutrients: 1.8, soilMoisture: 1.8, plantMoisture: 1.8 }
    },
    {
      status: 'Fair',
      dates: 'Aug 2022 - Dec 2022',
      crop: '🌾 Paddy/Pearl (Common)',
      score: 32.38,
      metrics: { health: 12.0, nutrients: 1.5, soilMoisture: 6.0, plantMoisture: 6.0 }
    },
    {
      status: 'Very Good',
      dates: 'Feb 2024 - Jun 2024',
      crop: '🥜 Groundnut',
      score: 52.4,
      metrics: { health: 18.0, nutrients: 1.2, soilMoisture: 1.8, plantMoisture: 1.8 }
    }
  ];

  const plot2Seasons = [
    {
      status: 'Good',
      dates: 'Jan 2022 - May 2022',
      crop: '🌽 Maize',
      score: 42.5,
      metrics: { health: 16.0, nutrients: 4.5, soilMoisture: 6.0, plantMoisture: 5.5 }
    },
    {
      status: 'Fair',
      dates: 'Jun 2022 - Oct 2022',
      crop: '🍅 Tomato',
      score: 35.2,
      metrics: { health: 14.0, nutrients: 3.2, soilMoisture: 4.5, plantMoisture: 4.0 }
    },
    {
      status: 'Excellent',
      dates: 'Nov 2022 - Mar 2023',
      crop: '🥬 Cabbage',
      score: 48.8,
      metrics: { health: 19.0, nutrients: 5.8, soilMoisture: 7.0, plantMoisture: 6.5 }
    }
  ];

  const filterSeasons = (seasons: any[]) => {
    return seasons.filter(season => {
      const cropMatch = selectedCrop === 'all' || season.crop.toLowerCase().includes(selectedCrop.toLowerCase());
      const seasonMatch = selectedSeason === 'all' || 
        (selectedSeason === 'winter' && (season.dates.includes('Oct') || season.dates.includes('Nov') || season.dates.includes('Dec') || season.dates.includes('Jan') || season.dates.includes('Feb'))) ||
        (selectedSeason === 'summer' && (season.dates.includes('Mar') || season.dates.includes('Apr') || season.dates.includes('May') || season.dates.includes('Jun'))) ||
        (selectedSeason === 'monsoon' && (season.dates.includes('Jul') || season.dates.includes('Aug') || season.dates.includes('Sep')));
      const statusMatch = selectedStatus === 'all' || season.status.toLowerCase() === selectedStatus.toLowerCase();
      return cropMatch && seasonMatch && statusMatch;
    });
  };

  const resetFilters = () => {
    setSelectedCrop('all');
    setSelectedSeason('all');
    setSelectedStatus('all');
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
            🌱
          </div>
          <h2 className="text-2xl font-semibold text-green-900">Farm Plots Overview</h2>
        </div>
        
        {/* Filters */}
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-gray-600" />
          <Select value={selectedCrop} onValueChange={setSelectedCrop}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Crop" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Crops</SelectItem>
              <SelectItem value="paddy">Paddy</SelectItem>
              <SelectItem value="groundnut">Groundnut</SelectItem>
              <SelectItem value="maize">Maize</SelectItem>
              <SelectItem value="tomato">Tomato</SelectItem>
              <SelectItem value="cabbage">Cabbage</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedSeason} onValueChange={setSelectedSeason}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Season" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Seasons</SelectItem>
              <SelectItem value="winter">Winter</SelectItem>
              <SelectItem value="summer">Summer</SelectItem>
              <SelectItem value="monsoon">Monsoon</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
              <SelectItem value="very good">Very Good</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetFilters}
            className="flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </Button>
        </div>
      </div>

      <Accordion type="single" collapsible className="border-green-200 border-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
        <AccordionItem value="plot1">
          <AccordionTrigger className="px-6 py-4 text-lg hover:bg-green-100 font-semibold text-green-900">
            🌾 Plot 1 - Paddy & Groundnut
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              <PlotDetails
                plotName="Plot 1"
                plotGeomId="166916_21022024_EJGQAV75"
                surveyNo="N/A"
                area="2.6"
                seasons="6"
                lastHarvest="2024-06-07"
                areaScore="5.0"
                croppingScore="35.0"
                plotScore="75.43"
              />
              
              <div>
                <h3 className="text-lg mb-4">📅 Seasonal Performance History</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filterSeasons(plot1Seasons).map((season, index) => (
                    <SeasonCard key={index} {...season} />
                  ))}
                </div>
                {filterSeasons(plot1Seasons).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No seasons match the selected filters.</p>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg mb-4">📍 Farm Location</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Replace the icon+text block with the image */}
<div className="bg-green-100 rounded-lg p-6 border border-green-200 flex flex-col items-center">
  <img
    src={plot1image}
    alt="Plot 1 Location Map"
    className="w-full h-40 object-cover rounded-md shadow-md border border-green-300"
    style={{ maxWidth: '100%', maxHeight: '180px' }}
  />
  <p className="mb-2 mt-4 font-semibold text-green-900">Interactive Farm Map</p>
  <p className="text-sm text-green-700">Lat: 20.0226, Long: 86.0047 • Mulshi, Pune</p>
  <p className="mt-4 text-sm text-green-800">
    <strong>💡 Tip:</strong> Your farm location shows good access to water sources and favorable climate conditions.
  </p>
</div>

                  <NDVIChart 
                    plotName="Plot 1" 
                    data={[
                      { date: 'Jan', ndvi: 0.25, health: 'Low' },
                      { date: 'Feb', ndvi: 0.38, health: 'Low' },
                      { date: 'Mar', ndvi: 0.52, health: 'Moderate' },
                      { date: 'Apr', ndvi: 0.71, health: 'Good' },
                      { date: 'May', ndvi: 0.84, health: 'Very High' },
                      { date: 'Jun', ndvi: 0.89, health: 'Very High' },
                      { date: 'Jul', ndvi: 0.91, health: 'Very High' },
                      { date: 'Aug', ndvi: 0.86, health: 'Very High' },
                      { date: 'Sep', ndvi: 0.78, health: 'High' },
                      { date: 'Oct', ndvi: 0.65, health: 'Good' },
                      { date: 'Nov', ndvi: 0.48, health: 'Moderate' },
                      { date: 'Dec', ndvi: 0.32, health: 'Low' }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="plot2">
          <AccordionTrigger className="px-6 py-4 text-lg hover:bg-green-100 font-semibold text-green-900">
            🥬 Plot 2 - Mixed Vegetables & Grains
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              <PlotDetails
                plotName="Plot 2"
                plotGeomId="167890_22032024_KMNPQR89"
                surveyNo="Survey-45B"
                area="1.8"
                seasons="4"
                lastHarvest="2023-11-15"
                areaScore="4.2"
                croppingScore="28.5"
                plotScore="65.75"
              />
              
              <div>
                <h3 className="text-lg mb-4">📅 Seasonal Performance History</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterSeasons(plot2Seasons).map((season, index) => (
                    <SeasonCard key={index} {...season} />
                  ))}
                </div>
                {filterSeasons(plot2Seasons).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No seasons match the selected filters.</p>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg mb-4">📍 Farm Location</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-emerald-100 rounded-lg p-6 text-center border border-emerald-200">
                    <div className="text-4xl mb-2">🗺</div>
                    <p className="mb-2 font-semibold text-emerald-900">Interactive Farm Map</p>
                    <p className="text-sm text-emerald-700">Lat: 20.0285, Long: 86.0089 • Mulshi, Pune</p>
                    <p className="mt-4 text-sm text-emerald-800"><strong>💡 Tip:</strong> This plot shows good potential for vegetable cultivation with proper drainage management.</p>
                  </div>
                  <NDVIChart 
                    plotName="Plot 2" 
                    data={[
                      { date: 'Jan', ndvi: 0.18, health: 'Low' },
                      { date: 'Feb', ndvi: 0.29, health: 'Low' },
                      { date: 'Mar', ndvi: 0.44, health: 'Moderate' },
                      { date: 'Apr', ndvi: 0.63, health: 'Good' },
                      { date: 'May', ndvi: 0.76, health: 'High' },
                      { date: 'Jun', ndvi: 0.81, health: 'Very High' },
                      { date: 'Jul', ndvi: 0.87, health: 'Very High' },
                      { date: 'Aug', ndvi: 0.82, health: 'Very High' },
                      { date: 'Sep', ndvi: 0.74, health: 'High' },
                      { date: 'Oct', ndvi: 0.59, health: 'Moderate' },
                      { date: 'Nov', ndvi: 0.41, health: 'Moderate' },
                      { date: 'Dec', ndvi: 0.26, health: 'Low' }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}