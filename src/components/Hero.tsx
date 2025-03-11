
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="max-w-xl space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-pace-blue/10 text-pace-blue font-medium text-sm animate-fade-in">
                Run Smarter, Connect Deeper
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
                Your Running <span className="gradient-text">Journey</span>, <br />
                Enhanced.
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Track your runs, join challenges, connect with fellow runners, 
                and share your achievements in a vibrant community focused on fitness.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <a href="#download" className="pace-btn-primary flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download Now</span>
                </a>
                <a href="#features" className="pace-btn-outline flex items-center justify-center space-x-2">
                  <span>Explore Features</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="w-full md:w-1/2 relative">
            <div className="device-frame animate-float">
              {/* Screen Content */}
              <div className="h-full w-full bg-pace-light overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-pace-blue/10 to-pace-green/10 p-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-semibold">9:41</div>
                    <div className="flex space-x-1">
                      <div className="w-5 h-2 bg-pace-blue/80 rounded-sm"></div>
                      <div className="w-5 h-2 bg-pace-blue/80 rounded-sm"></div>
                      <div className="w-5 h-2 bg-pace-blue/80 rounded-sm"></div>
                      <div className="w-5 h-2 bg-pace-blue rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Screen */}
                  <div className="bg-white rounded-2xl shadow-lg h-[calc(100%-2rem)] p-4 overflow-hidden">
                    {/* App Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pace-blue/20 flex items-center justify-center text-pace-blue">
                          🏃
                        </div>
                        <h3 className="ml-2 text-lg font-bold">PACE RUN</h3>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <div className="w-6 h-6 text-slate-600">👤</div>
                      </div>
                    </div>
                    
                    {/* Running Stats */}
                    <div className="bg-pace-blue/5 rounded-xl p-4 mb-4">
                      <h4 className="text-sm font-medium text-slate-600 mb-2">Today's Run</h4>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-2xl font-bold text-pace-blue">5.2</p>
                          <p className="text-xs text-slate-500">km</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-pace-blue">27:14</p>
                          <p className="text-xs text-slate-500">time</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-pace-blue">5:12</p>
                          <p className="text-xs text-slate-500">pace</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Map Preview */}
                    <div className="bg-slate-200 rounded-xl h-40 mb-4 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-pace-light to-pace-blue/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-pace-blue/20 animate-pulse-soft flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-pace-blue/40 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-pace-blue flex items-center justify-center text-white">
                              ▶️
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Route Line */}
                      <svg width="100%" height="100%" className="absolute inset-0">
                        <path 
                          d="M50,120 Q90,80 130,100 Q160,120 180,90 Q200,60 240,70" 
                          fill="none" 
                          stroke="#2E86C1" 
                          strokeWidth="3" 
                          strokeLinecap="round"
                          strokeDasharray="1, 0"
                        />
                      </svg>
                    </div>
                    
                    {/* Challenges */}
                    <h4 className="text-sm font-medium text-slate-600 mb-2">Challenges</h4>
                    <div className="space-y-2">
                      <div className="bg-white border border-slate-200 rounded-lg p-3 flex justify-between items-center">
                        <div>
                          <p className="text-xs text-pace-green font-medium">Weekly Challenge</p>
                          <p className="text-sm font-semibold">Run 20km this week</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-pace-green/10 flex items-center justify-center text-pace-green">
                          🏆
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-pace-blue/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
            <div className="absolute -left-8 bottom-20 w-40 h-40 bg-pace-green/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
