import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Rocket, Star, Atom, RadioTower } from 'lucide-react';

const SpaceCalculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orbital');
  
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
            Space Calculators
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced tools to calculate and visualize essential space physics parameters
          </motion.p>
        </div>
        
        <Tabs defaultValue="orbital" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 w-full glass">
            <TabsTrigger value="orbital" className="text-xs md:text-sm flex items-center">
              <Rocket className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Orbital</span> Mechanics
            </TabsTrigger>
            <TabsTrigger value="fuel" className="text-xs md:text-sm flex items-center">
              <Calculator className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Rocket</span> Fuel
            </TabsTrigger>
            <TabsTrigger value="stellar" className="text-xs md:text-sm flex items-center">
              <Star className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Stellar</span> Lifecycle
            </TabsTrigger>
            <TabsTrigger value="gravity" className="text-xs md:text-sm flex items-center">
              <Atom className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Gravity</span> Well
            </TabsTrigger>
            <TabsTrigger value="radiation" className="text-xs md:text-sm flex items-center">
              <RadioTower className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Radiation</span> Calc
            </TabsTrigger>
          </TabsList>
          
          {/* Orbital Mechanics Calculator */}
          <TabsContent value="orbital">
            <OrbitalMechanicsCalculator />
          </TabsContent>
          
          {/* Rocket Fuel Efficiency Simulator */}
          <TabsContent value="fuel">
            <RocketFuelCalculator />
          </TabsContent>
          
          {/* Stellar Lifecycle Estimator */}
          <TabsContent value="stellar">
            <StellarLifecycleCalculator />
          </TabsContent>
          
          {/* Gravity Well Visualizer */}
          <TabsContent value="gravity">
            <GravityWellCalculator />
          </TabsContent>
          
          {/* Radiation Exposure Calculator */}
          <TabsContent value="radiation">
            <RadiationCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

const OrbitalMechanicsCalculator: React.FC = () => {
  const [mass, setMass] = useState(1000);
  const [altitude, setAltitude] = useState(400);
  const [planet, setPlanet] = useState('earth');
  const [results, setResults] = useState({
    escapeVelocity: 0,
    orbitalVelocity: 0,
    orbitalPeriod: 0
  });
  const [animationProgress, setAnimationProgress] = useState(0);
  
  useEffect(() => {
    // Earth constants
    const G = 6.67430e-11; // Gravitational constant
    const earthMass = 5.972e24; // kg
    const earthRadius = 6371; // km
    
    const planetData = {
      earth: { mass: earthMass, radius: earthRadius },
      mars: { mass: 6.39e23, radius: 3389.5 },
      moon: { mass: 7.342e22, radius: 1737.4 }
    };
    
    const selectedPlanet = planetData[planet as keyof typeof planetData];
    const radiusInMeters = (selectedPlanet.radius + altitude) * 1000;
    
    // Calculations
    const escapeVelocity = Math.sqrt(2 * G * selectedPlanet.mass / (radiusInMeters));
    const orbitalVelocity = Math.sqrt(G * selectedPlanet.mass / radiusInMeters);
    const orbitalPeriod = 2 * Math.PI * radiusInMeters / orbitalVelocity;
    
    setResults({
      escapeVelocity: escapeVelocity / 1000, // km/s
      orbitalVelocity: orbitalVelocity / 1000, // km/s
      orbitalPeriod: orbitalPeriod / 3600 // hours
    });
    
    // Animate
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [mass, altitude, planet]);
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Rocket className="mr-2 h-5 w-5 text-[#FF6B4A]" />
            Orbital Mechanics Calculator
          </CardTitle>
          <CardDescription>
            Calculate orbital parameters for satellites and spacecraft
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="planet">Celestial Body</Label>
            <select 
              id="planet"
              value={planet}
              onChange={(e) => setPlanet(e.target.value)}
              className="w-full rounded-md bg-background/30 border border-white/10 p-2"
            >
              <option value="earth">Earth</option>
              <option value="mars">Mars</option>
              <option value="moon">Moon</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mass">Spacecraft Mass (kg)</Label>
            <Input 
              id="mass" 
              type="number" 
              value={mass}
              onChange={(e) => setMass(Number(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="altitude">Orbital Altitude (km)</Label>
            <Input 
              id="altitude" 
              type="number" 
              value={altitude}
              onChange={(e) => setAltitude(Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass">
        <CardHeader>
          <CardTitle>Orbital Parameters</CardTitle>
          <CardDescription>Visualization and results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Visualization */}
          <div className="aspect-square max-w-[300px] mx-auto relative">
            {/* Planet */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-500 opacity-80"></div>
            
            {/* Orbit path */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gray-400 border-dashed"></div>
            
            {/* Satellite */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full shadow-glow"
              style={{ 
                transform: `rotate(${animationProgress}deg) translateX(8rem) rotate(-${animationProgress}deg)` 
              }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 text-center">
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-xs text-gray-400">Orbital Velocity</div>
              <div className="text-xl font-bold text-[#4AB8FF]">{results.orbitalVelocity.toFixed(2)} km/s</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <div className="text-xs text-gray-400">Escape Velocity</div>
                <div className="text-lg font-bold text-[#FF6B4A]">{results.escapeVelocity.toFixed(2)} km/s</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <div className="text-xs text-gray-400">Orbital Period</div>
                <div className="text-lg font-bold text-[#50E3C2]">{results.orbitalPeriod.toFixed(2)} hours</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const RocketFuelCalculator: React.FC = () => {
  const [rocketMass, setRocketMass] = useState(10000);
  const [propellantMass, setPropellantMass] = useState(15000);
  const [specificImpulse, setSpecificImpulse] = useState(350);
  const [deltaV, setDeltaV] = useState(0);
  const [fuelPercentage, setFuelPercentage] = useState(100);
  
  useEffect(() => {
    const g0 = 9.80665; // standard gravity
    
    // Tsiolkovsky rocket equation
    const massRatio = rocketMass / (rocketMass - propellantMass * (fuelPercentage / 100));
    const dV = specificImpulse * g0 * Math.log(massRatio);
    
    setDeltaV(isNaN(dV) || !isFinite(dV) ? 0 : dV);
    
    // Simulate fuel burn
    const interval = setInterval(() => {
      setFuelPercentage(prev => {
        if (prev <= 0) return 100;
        return prev - 1;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [rocketMass, propellantMass, specificImpulse, fuelPercentage]);
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="mr-2 h-5 w-5 text-[#FF6B4A]" />
            Rocket Fuel Efficiency
          </CardTitle>
          <CardDescription>
            Calculate delta-V and fuel requirements for space missions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rocketMass">Dry Mass (kg)</Label>
            <Input 
              id="rocketMass" 
              type="number" 
              value={rocketMass}
              onChange={(e) => setRocketMass(Number(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="propellantMass">Propellant Mass (kg)</Label>
            <Input 
              id="propellantMass" 
              type="number" 
              value={propellantMass}
              onChange={(e) => setPropellantMass(Number(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specificImpulse">Specific Impulse (s)</Label>
            <Input 
              id="specificImpulse" 
              type="number" 
              value={specificImpulse}
              onChange={(e) => setSpecificImpulse(Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass">
        <CardHeader>
          <CardTitle>Fuel Simulation</CardTitle>
          <CardDescription>Visualization and results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Rocket Visualization */}
          <div className="h-52 relative flex items-center justify-center">
            <div className="relative w-20 h-48 bg-gray-700 rounded-t-full overflow-hidden">
              {/* Rocket body */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-800"></div>
              
              {/* Windows */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-400"></div>
              
              {/* Fuel tank */}
              <div className="absolute bottom-10 left-0 right-0 h-20 bg-gray-600 overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF6B4A] to-[#FFBA4A] transition-all duration-200"
                  style={{ height: `${fuelPercentage}%` }}
                ></div>
              </div>
              
              {/* Exhaust */}
              <div 
                className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-10 
                ${fuelPercentage > 0 ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="w-6 h-16 mx-auto bg-gradient-to-t from-transparent to-[#FF6B4A] rounded-b-lg blur-sm"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center mt-4">
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-xs text-gray-400">Fuel Remaining</div>
              <div className="text-xl font-bold text-[#FFBA4A]">{fuelPercentage}%</div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-xs text-gray-400">Delta-V</div>
              <div className="text-xl font-bold text-[#4AB8FF]">{deltaV.toFixed(0)} m/s</div>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/5 text-center">
            <div className="text-xs text-gray-400">Mission Capability</div>
            <div className="text-sm font-medium mt-1">
              {deltaV > 9000 ? (
                <span className="text-green-400">Interplanetary Capable</span>
              ) : deltaV > 4000 ? (
                <span className="text-yellow-400">Earth Orbit & Lunar</span>
              ) : (
                <span className="text-red-400">Suborbital Only</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StellarLifecycleCalculator: React.FC = () => {
  const [stellarMass, setStellarMass] = useState(1);
  const [spectralType, setSpectralType] = useState('G');
  const [lifespan, setLifespan] = useState(10);
  const [currentAge, setCurrentAge] = useState(4.6);
  const [lifestage, setLifestage] = useState('Main Sequence');
  
  useEffect(() => {
    // Calculate stellar lifespan based on mass
    // L ∝ M^3.5, and t ∝ M/L so t ∝ M/M^3.5 = M^-2.5
    const calculatedLifespan = 10 * Math.pow(stellarMass, -2.5);
    setLifespan(calculatedLifespan);
    
    // Determine life stage
    const agePercentage = currentAge / calculatedLifespan;
    
    if (agePercentage < 0.1) {
      setLifestage('Protostar');
    } else if (agePercentage < 0.9) {
      setLifestage('Main Sequence');
    } else if (agePercentage < 0.95) {
      setLifestage('Red Giant');
    } else if (stellarMass < 8) {
      setLifestage('White Dwarf');
    } else {
      setLifestage('Supernova');
    }
    
  }, [stellarMass, spectralType, currentAge]);
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5 text-[#FFBA4A]" />
            Stellar Lifecycle Estimator
          </CardTitle>
          <CardDescription>
            Predict a star's lifespan and evolution
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stellarMass">Stellar Mass (Solar masses)</Label>
            <Input 
              id="stellarMass" 
              type="number" 
              min="0.1"
              max="50"
              step="0.1"
              value={stellarMass}
              onChange={(e) => setStellarMass(Number(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="spectralType">Spectral Type</Label>
            <select 
              id="spectralType"
              value={spectralType}
              onChange={(e) => setSpectralType(e.target.value)}
              className="w-full rounded-md bg-background/30 border border-white/10 p-2"
            >
              <option value="O">O (Blue, &gt;33,000 K)</option>
              <option value="B">B (Blue-white, 10,000-33,000 K)</option>
              <option value="A">A (White, 7,500-10,000 K)</option>
              <option value="F">F (Yellow-white, 6,000-7,500 K)</option>
              <option value="G">G (Yellow, 5,200-6,000 K)</option>
              <option value="K">K (Orange, 3,700-5,200 K)</option>
              <option value="M">M (Red, 2,400-3,700 K)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="currentAge">Current Age (Billion years)</Label>
            <Input 
              id="currentAge" 
              type="number"
              min="0"
              max={lifespan}
              step="0.1"
              value={currentAge > lifespan ? lifespan : currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass">
        <CardHeader>
          <CardTitle>Stellar Evolution</CardTitle>
          <CardDescription>Visualization and results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Star Visualization */}
          <div className="h-52 relative flex items-center justify-center">
            {/* Star */}
            <div 
              className={`rounded-full animate-pulse-slow ${
                lifestage === 'Protostar' ? 'bg-orange-600' :
                lifestage === 'Main Sequence' ? 
                  (spectralType === 'O' ? 'bg-blue-400' :
                  spectralType === 'B' ? 'bg-blue-300' :
                  spectralType === 'A' ? 'bg-blue-100' :
                  spectralType === 'F' ? 'bg-yellow-100' :
                  spectralType === 'G' ? 'bg-yellow-400' :
                  spectralType === 'K' ? 'bg-orange-400' :
                  'bg-red-600') :
                lifestage === 'Red Giant' ? 'bg-red-500' :
                lifestage === 'White Dwarf' ? 'bg-blue-100' :
                'bg-purple-600'
              }`}
              style={{ 
                width: `${lifestage === 'Red Giant' ? 160 : 
                        lifestage === 'White Dwarf' ? 40 : 
                        stellarMass * 60}px`,
                height: `${lifestage === 'Red Giant' ? 160 : 
                        lifestage === 'White Dwarf' ? 40 : 
                        stellarMass * 60}px`,
              }}
            >
              {lifestage === 'Supernova' && (
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-50"></div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center mt-4">
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-xs text-gray-400">Estimated Lifespan</div>
              <div className="text-xl font-bold text-[#4AB8FF]">{lifespan.toFixed(1)} Gyr</div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-xs text-gray-400">Current Life Stage</div>
              <div className="text-xl font-bold text-[#FFBA4A]">{lifestage}</div>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/5">
            <div className="text-xs text-gray-400 mb-2">Stellar Lifecycle</div>
            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500"
                style={{ width: `${(currentAge / lifespan) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1 text-xs">
              <span>Formation</span>
              <span>{stellarMass >= 8 ? 'Supernova' : 'White Dwarf'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GravityWellCalculator: React.FC = () => {
  return (
    <motion.div 
      className="glass rounded-xl p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="py-20">
        <Atom className="h-16 w-16 mx-auto mb-6 text-[#4AB8FF]" />
        <h3 className="text-xl font-bold mb-4">Gravity Well Visualizer</h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          This interactive tool for calculating and animating gravitational forces between celestial bodies is coming soon!
        </p>
        <Button variant="outline">Get Notified When Available</Button>
      </div>
    </motion.div>
  );
};

const RadiationCalculator: React.FC = () => {
  return (
    <motion.div 
      className="glass rounded-xl p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="py-20">
        <RadioTower className="h-16 w-16 mx-auto mb-6 text-[#FF6B4A]" />
        <h3 className="text-xl font-bold mb-4">Radiation Exposure Calculator</h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          This tool for estimating radiation doses for missions to specific planets or orbits is coming soon!
        </p>
        <Button variant="outline">Get Notified When Available</Button>
      </div>
    </motion.div>
  );
};

export default SpaceCalculators;