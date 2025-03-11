
import React from 'react';
import { BarChart, LineChart, Activity, ArrowUp, TrendingUp } from 'lucide-react';

const RunningStats = () => {
  return (
    <section id="challenges" className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-pace-green/10 text-pace-green font-medium text-sm mb-4">
            Weekly Challenges
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Set Goals, Earn Rewards</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Challenge yourself and other runners with weekly goals, compete for the top spots, and earn animated medals for your achievements.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Challenges */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <div className="glass-card rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Your Weekly Progress</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-pace-blue"></div>
                      <span className="text-xs font-medium">This Week</span>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-48 w-full flex items-end justify-between pt-4">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div 
                          className="bg-pace-blue/80 w-8 rounded-t-md transition-all duration-700 ease-out"
                          style={{ 
                            height: `${[30, 45, 65, 25, 80, 60, 0][i]}%`,
                            animationDelay: `${i * 100}ms`
                          }}
                        ></div>
                        <div className="mt-2 text-xs font-medium text-slate-500">{day}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="feature-card flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pace-blue/10 flex items-center justify-center text-pace-blue">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Total Distance</div>
                  <div className="text-2xl font-bold">24.8 km</div>
                </div>
              </div>
              
              <div className="feature-card flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pace-green/10 flex items-center justify-center text-pace-green">
                  <Activity size={22} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Calories Burned</div>
                  <div className="text-2xl font-bold">1,465</div>
                </div>
              </div>
              
              <div className="feature-card flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <ArrowUp size={22} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Elevation Gain</div>
                  <div className="text-2xl font-bold">283 m</div>
                </div>
              </div>
              
              <div className="feature-card flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <BarChart size={22} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Weekly Rank</div>
                  <div className="text-2xl font-bold">#14</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Challenges List */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-slide-up">
                <div className="bg-pace-blue/10 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-pace-blue">Weekly Distance</h3>
                  <div className="w-12 h-12 rounded-full bg-pace-blue/20 flex items-center justify-center text-pace-blue">
                    🏃
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Run at least 30km this week to earn the Silver Runner medal.
                  </p>
                  
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">24.8km / 30km</span>
                    <span className="text-xs font-medium text-pace-blue">82%</span>
                  </div>
                  
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-pace-blue rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '82%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="bg-pace-green/10 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-pace-green">Calorie Challenge</h3>
                  <div className="w-12 h-12 rounded-full bg-pace-green/20 flex items-center justify-center text-pace-green">
                    🔥
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Burn 2,000 calories through running activities to complete this challenge.
                  </p>
                  
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">1,465 / 2,000 cal</span>
                    <span className="text-xs font-medium text-pace-green">73%</span>
                  </div>
                  
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-pace-green rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '73%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="bg-purple-500/10 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-purple-500">Consistency Streak</h3>
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                    ⚡
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Run at least 3km for 5 consecutive days to earn the Consistency badge.
                  </p>
                  
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">3 / 5 days</span>
                    <span className="text-xs font-medium text-purple-500">60%</span>
                  </div>
                  
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningStats;
