
import React from 'react';
import StoryPreview from './StoryPreview';
import { MessageSquare, Heart, Share, PenSquare } from 'lucide-react';

const SocialFeatures = () => {
  return (
    <section id="social" className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 font-medium text-sm mb-4">
            Connect & Share
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join The Running Community</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Share your achievements, connect with other runners, and build a supportive community to help you stay motivated.
          </p>
        </div>
        
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pr-16">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 font-medium text-sm mb-4 animate-fade-in">
                Social Features
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Share Your <span className="gradient-text">Journey</span> With Friends
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                PACE RUN brings runners together with rich social features that allow you to 
                share achievements, post stories, and connect with fellow runners.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '300ms' }}>
                  <div className="w-10 h-10 rounded-full bg-pace-blue/10 flex-shrink-0 flex items-center justify-center text-pace-blue">
                    <PenSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">24-Hour Stories</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Share photos and videos from your run with custom stickers and filters that disappear after 24 hours.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '400ms' }}>
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex-shrink-0 flex items-center justify-center text-purple-500">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Runner Groups & Chats</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Create or join running groups based on location or interests, and communicate with built-in chat.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '500ms' }}>
                  <div className="w-10 h-10 rounded-full bg-pace-green/10 flex-shrink-0 flex items-center justify-center text-pace-green">
                    <Share size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Achievement Sharing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Share your medals, personal records, and completed challenges on social media with beautiful custom cards.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: '600ms' }}>
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex-shrink-0 flex items-center justify-center text-amber-500">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Follow & Support</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Follow other runners, like their activities, and motivate each other to achieve your running goals.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="device-frame mx-auto animate-float" style={{ animationDelay: '300ms' }}>
              {/* Screen Content */}
              <div className="h-full w-full bg-white overflow-hidden">
                {/* App Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <h3 className="text-lg font-bold">Community</h3>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <div className="w-5 h-5 text-slate-600">📝</div>
                  </div>
                </div>
                
                {/* Stories */}
                <div className="border-b border-slate-100">
                  <StoryPreview />
                </div>
                
                {/* Feed */}
                <div className="overflow-y-auto" style={{ height: 'calc(100% - 130px)' }}>
                  {/* Post 1 */}
                  <div className="border-b border-slate-100 p-4 animate-fade-in">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pace-blue to-cyan-500 flex items-center justify-center text-white">
                        👨
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">James Wilson</h4>
                        <p className="text-xs text-slate-500">2 hours ago</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">Just completed my first half marathon! 🎉 So proud of the progress I've made with PACE RUN. Thanks to everyone who supported me along the way!</p>
                    
                    <div className="bg-slate-100 rounded-xl h-40 mb-3 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pace-blue/20 to-pace-green/20"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-4xl mb-2">🏅</div>
                        <div className="text-sm font-medium">Half Marathon Completed</div>
                        <div className="text-xs text-slate-600">21.1 km • 1:52:14</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Heart size={16} />
                        <span>48 likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare size={16} />
                        <span>12 comments</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share size={16} />
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Post 2 */}
                  <div className="border-b border-slate-100 p-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                        👩
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Sophia Chen</h4>
                        <p className="text-xs text-slate-500">Yesterday</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">Morning run with the sunrise crew! Anyone want to join us tomorrow at Central Park? We're meeting at 6:30am by the south entrance. #PaceRunCrew</p>
                    
                    <div className="bg-slate-100 rounded-xl h-48 mb-3 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 to-pace-blue/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">🌅</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Heart size={16} className="text-red-500 fill-red-500" />
                        <span>32 likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare size={16} />
                        <span>8 comments</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share size={16} />
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -left-20 -top-12 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
            <div className="absolute -right-10 bottom-20 w-40 h-40 bg-pace-green/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeatures;
