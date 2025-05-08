import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Telescope, Globe, Rocket, ThermometerSnowflake, Droplets, Wind } from 'lucide-react';

interface ExoplanetData {
  id: string;
  name: string;
  distance: number;
  size: number;
  temperature: number;
  habitabilityScore: number;
  atmosphere: string;
  imageUrl: string;
  starType: string;
  discoveryYear: number;
}

const PlanetPredictor: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('predictor');
  const [results, setResults] = useState<ExoplanetData[]>([]);
  
  // Filter state
  const [planetSize, setPlanetSize] = useState([1]); // Earth sizes
  const [temperature, setTemperature] = useState([250]); // Kelvin
  const [orbitPeriod, setOrbitPeriod] = useState([200]); // Days
  
  // Simulation state
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    // Rotate planet in visualization
    const rotationInterval = setInterval(() => {
      setRotationAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 100);
    
    return () => clearInterval(rotationInterval);
  }, []);

  const handleSearch = () => {
    setLoading(true);
    
    // Simulate API call to NASA Exoplanet Archive
    setTimeout(() => {
      const mockResults: ExoplanetData[] = [
        {
          id: "kepler-1649c",
          name: "Kepler-1649c",
          distance: 301,
          size: 1.06,
          temperature: 278,
          habitabilityScore: 0.82,
          atmosphere: "Unknown",
          starType: "M-dwarf",
          discoveryYear: 2020,
          imageUrl: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=600"
        },
        {
          id: "teegarden-b",
          name: "Teegarden b",
          distance: 12.5,
          size: 1.05,
          temperature: 265,
          habitabilityScore: 0.95,
          atmosphere: "Potentially Earth-like",
          starType: "M-dwarf",
          discoveryYear: 2019,
          imageUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=600"
        },
        {
          id: "proxima-centauri-b",
          name: "Proxima Centauri b",
          distance: 4.2,
          size: 1.27,
          temperature: 260,
          habitabilityScore: 0.87,
          atmosphere: "Possible atmosphere",
          starType: "M-dwarf",
          discoveryYear: 2016,
          imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600"
        }
      ];
      
      setResults(mockResults);
      setLoading(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Space Planet Predictor
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover potentially habitable exoplanets using NASA's database and our advanced prediction algorithms
          </motion.p>
        </div>
        
        <Tabs defaultValue="predictor" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full glass">
            <TabsTrigger value="predictor" className="text-sm flex items-center">
              <Telescope className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Exoplanet</span> Predictor
            </TabsTrigger>
            <TabsTrigger value="habitability" className="text-sm flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Habitability</span> Analyzer
            </TabsTrigger>
            <TabsTrigger value="simulation" className="text-sm flex items-center">
              <Rocket className="mr-2 h-4 w-4" />
              3D <span className="hidden md:inline">Orbital</span> Simulation
            </TabsTrigger>
          </TabsList>
          
          {/* Predictor Tab */}
          <TabsContent value="predictor" className="space-y-6">
            <motion.div 
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Telescope className="mr-2 h-5 w-5 text-[#4AB8FF]" />
                Exoplanet Search Parameters
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Planet Size (Earth radius)</label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#4AB8FF]">0.5</span>
                    <Slider 
                      value={planetSize} 
                      onValueChange={setPlanetSize} 
                      max={5} 
                      step={0.1} 
                      min={0.5} 
                      className="flex-1"
                    />
                    <span className="text-sm text-[#4AB8FF]">5.0</span>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm font-medium">{planetSize[0]}x Earth</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Surface Temperature (K)</label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#FF6B4A]">150</span>
                    <Slider 
                      value={temperature} 
                      onValueChange={setTemperature} 
                      max={500} 
                      step={5} 
                      min={150} 
                      className="flex-1"
                    />
                    <span className="text-sm text-[#FF6B4A]">500</span>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm font-medium">{temperature[0]}K ({(temperature[0] - 273.15).toFixed(1)}°C)</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Orbital Period (Earth days)</label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#50E3C2]">10</span>
                    <Slider 
                      value={orbitPeriod} 
                      onValueChange={setOrbitPeriod} 
                      max={1000} 
                      step={10} 
                      min={10} 
                      className="flex-1"
                    />
                    <span className="text-sm text-[#50E3C2]">1000</span>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm font-medium">{orbitPeriod[0]} days</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleSearch} 
                className="mt-6 w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Searching NASA Exoplanet Database...
                  </>
                ) : (
                  'Find Potentially Habitable Exoplanets'
                )}
              </Button>
            </motion.div>
            
            {/* Results section */}
            {results.length > 0 && (
              <motion.div 
                className="mt-8 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold">Discovered Exoplanets ({results.length})</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.map((planet) => (
                    <motion.div 
                      key={planet.id}
                      className="glass rounded-xl overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={planet.imageUrl} 
                          alt={planet.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-2 left-3">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm font-semibold text-white">Discovered {planet.discoveryYear}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{planet.name}</h3>
                        
                        <div className="mt-3 space-y-2">
                          <div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Habitability Score</span>
                              <span>{(planet.habitabilityScore * 100).toFixed(0)}%</span>
                            </div>
                            <Progress value={planet.habitabilityScore * 100} className="h-1.5" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                            <div className="flex items-center text-gray-300">
                              <Globe className="h-3.5 w-3.5 mr-1.5 text-[#4AB8FF]" />
                              <span>{planet.size}x Earth</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <Rocket className="h-3.5 w-3.5 mr-1.5 text-[#FF6B4A]" />
                              <span>{planet.distance} light-years</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <ThermometerSnowflake className="h-3.5 w-3.5 mr-1.5 text-[#50E3C2]" />
                              <span>{planet.temperature}K</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <Wind className="h-3.5 w-3.5 mr-1.5 text-[#5B3DC8]" />
                              <span>{planet.atmosphere}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="secondary" size="sm" className="w-full mt-4 text-xs">
                          View Detailed Analysis
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </TabsContent>
          
          {/* Habitability Analyzer Tab */}
          <TabsContent value="habitability">
            <motion.div 
              className="glass rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="py-20">
                <h3 className="text-xl font-bold mb-4">Habitability Analysis Tool</h3>
                <p className="text-gray-300 mb-6">
                  Use the predictor tab to search for exoplanets first, then analyze their habitability potential in detail.
                </p>
                <Button variant="outline" onClick={() => setActiveTab('predictor')}>
                  Go to Planet Predictor
                </Button>
              </div>
            </motion.div>
          </TabsContent>
          
          {/* 3D Simulation Tab */}
          <TabsContent value="simulation">
            <motion.div 
              className="glass rounded-xl p-6 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ minHeight: '500px' }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Rocket className="mr-2 h-5 w-5 text-[#FF6B4A]" />
                3D Orbital Simulation
              </h3>
              
              {results.length > 0 ? (
                <div className="relative h-96 flex items-center justify-center">
                  {/* Central star */}
                  <div className="absolute w-20 h-20 rounded-full bg-yellow-500 animate-pulse-slow glow-effect"></div>
                  
                  {/* Orbital paths */}
                  <div className="absolute w-64 h-64 rounded-full border border-gray-700 border-dashed"></div>
                  <div className="absolute w-96 h-96 rounded-full border border-gray-700 border-dashed"></div>
                  <div className="absolute w-[30rem] h-[30rem] rounded-full border border-gray-700 border-dashed"></div>
                  
                  {/* Planets */}
                  <motion.div 
                    className="absolute w-6 h-6 rounded-full bg-blue-400"
                    style={{ 
                      transform: `rotate(${rotationAngle}deg) translateX(8rem)` 
                    }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute w-8 h-8 rounded-full bg-red-400"
                    style={{ 
                      transform: `rotate(${rotationAngle * 0.7}deg) translateX(12rem)` 
                    }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute w-5 h-5 rounded-full bg-green-400"
                    style={{ 
                      transform: `rotate(${rotationAngle * 0.4}deg) translateX(15rem)` 
                    }}
                  ></motion.div>
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-300 mb-6">
                    Use the predictor tab to search for exoplanets first, then visualize their orbits here.
                  </p>
                  <Button variant="outline" onClick={() => setActiveTab('predictor')}>
                    Go to Planet Predictor
                  </Button>
                </div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default PlanetPredictor;