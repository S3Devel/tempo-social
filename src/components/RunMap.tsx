
import React from 'react';
import { Play, Pause, Heart, Timer } from 'lucide-react';

const RunMap = () => {
  return (
    <section className="section overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content - Phone Mockup */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="device-frame mx-auto lg:ml-0 lg:mr-auto animate-float" style={{ animationDelay: '500ms' }}>
              {/* Screen Content */}
              <div className="h-full w-full bg-slate-100 overflow-hidden">
                {/* Map Interface */}
                <div className="relative h-full w-full bg-gray-200">
                  {/* Map Background with simulated route */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-pace-light">
                      {/* Stylized map elements */}
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full"></div>
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/30 rounded-full"></div>
                      
                      {/* Park area */}
                      <div className="absolute top-[30%] left-[20%] w-[60%] h-[25%] bg-pace-green/10 rounded-xl"></div>
                      
                      {/* Roads */}
                      <div className="absolute top-[15%] left-0 w-full h-[3%] bg-white/40"></div>
                      <div className="absolute top-[45%] left-0 w-full h-[3%] bg-white/40"></div>
                      <div className="absolute top-[65%] left-0 w-full h-[3%] bg-white/40"></div>
                      <div className="absolute top-0 left-[25%] w-[3%] h-full bg-white/40"></div>
                      <div className="absolute top-0 left-[50%] w-[3%] h-full bg-white/40"></div>
                      <div className="absolute top-0 left-[75%] w-[3%] h-full bg-white/40"></div>
                      
                      {/* Route path */}
                      <svg width="100%" height="100%" className="absolute inset-0">
                        <path 
                          d="M75,500 C100,450 150,475 175,450 C200,425 225,400 250,350 C275,300 300,250 325,225 C350,200 375,175 400,150"
                          fill="none" 
                          stroke="#2E86C1" 
                          strokeWidth="6" 
                          strokeLinecap="round"
                          strokeDasharray="1, 0"
                          className="animate-draw"
                        />
                        {/* Pulsing current location */}
                        <circle cx="75" cy="500" r="8" fill="#2E86C1">
                          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                    </div>
                  </div>
                  
                  {/* UI Overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col">
                    {/* Top Status Bar */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium text-pace-blue">
                        Recording...
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-1.5 bg-pace-blue/80 rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-pace-blue/80 rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-pace-blue/80 rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-pace-blue rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Running Stats */}
                    <div className="glass-card rounded-xl mx-4 mb-auto p-4">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-3xl font-bold text-pace-blue">2.8</p>
                          <p className="text-xs text-slate-600">kilometers</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-pace-blue">14:22</p>
                          <p className="text-xs text-slate-600">duration</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-pace-blue">5:08</p>
                          <p className="text-xs text-slate-600">pace/km</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="mt-auto flex justify-center items-center py-4">
                      <div className="glass-card rounded-full p-2 flex space-x-4 items-center">
                        <button className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-pace-blue">
                          <Heart size={20} />
                        </button>
                        <button className="w-16 h-16 rounded-full bg-pace-blue flex items-center justify-center text-white">
                          <Pause size={28} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-pace-blue">
                          <Timer size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-2 rounded-full bg-pace-blue/10 text-pace-blue font-medium text-sm mb-4 animate-fade-in">
                Advanced Tracking
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Track Every Step With <span className="gradient-text">Precision</span>
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                PACE RUN uses advanced GPS technology to track your runs with exceptional accuracy, 
                providing real-time data on distance, pace, elevation, and calories burned.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '300ms' }}>
                  <div className="w-6 h-6 rounded-full bg-pace-blue/10 flex-shrink-0 flex items-center justify-center mt-1 text-pace-blue">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">High-Precision GPS</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Track your routes with pinpoint accuracy, even in areas with challenging GPS reception.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '400ms' }}>
                  <div className="w-6 h-6 rounded-full bg-pace-green/10 flex-shrink-0 flex items-center justify-center mt-1 text-pace-green">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Detailed Metrics</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Monitor pace, heart rate, elevation gain, cadence, and stride length in real-time.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '500ms' }}>
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex-shrink-0 flex items-center justify-center mt-1 text-amber-500">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Offline Mode</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Continue tracking your runs even without internet connectivity, with seamless syncing when back online.
                    </p>
                  </div>
                </li>
              </ul>
              
              <a href="#download" className="pace-btn-primary inline-flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <Play size={20} />
                <span>Start Your Journey</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunMap;
