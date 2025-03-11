
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

// Import components
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RunMap from '@/components/RunMap';
import RunningStats from '@/components/RunningStats';
import SocialFeatures from '@/components/SocialFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Run Map Section */}
      <RunMap />
      
      {/* Running Stats Section */}
      <RunningStats />
      
      {/* Social Features Section */}
      <SocialFeatures />
      
      {/* Download Section */}
      <section id="download" className="section bg-gradient-to-br from-pace-blue to-pace-green text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Start Your Running Journey Today</h2>
            <p className="text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Download PACE RUN and join thousands of runners tracking their progress, 
              setting new personal records, and connecting with a global community.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a 
                href="#" 
                className="bg-white text-pace-blue pace-btn flex items-center justify-center space-x-2 animate-fade-in"
                style={{ animationDelay: '200ms' }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple">
                  <path d="M12 20.94c1.5 0 2.75-.75 4.5-.75 1.25 0 2.5.5 3.5 1.5-3.25 1.5-4.5 5-7.5 5s-4.75-3-8-3c-.5 0-1 0-1.5.25.5-1.25 1.5-2 2.5-2.75 1-.75 2.25-1.25 3-1.25 1.25 0 2 .75 3.5.75z" />
                  <path d="M12 5c0-2.5 2.5-5 5-5-1 2.5-2.5 5-5 5z" />
                  <path d="M20.25 16V4.75A4.75 4.75 0 0 0 15.5 0c-1.5 0-2.5 0-4 2-1.5-2-2.5-2-4-2A4.75 4.75 0 0 0 2.75 4.75V16a4.75 4.75 0 0 0 4.75 4.75c1.5 0 2.5 0 4-2 1.5 2 2.5 2 4 2a4.75 4.75 0 0 0 4.75-4.75Z" />
                </svg>
                <span>App Store</span>
              </a>
              <a 
                href="#" 
                className="bg-white text-pace-blue pace-btn flex items-center justify-center space-x-2 animate-fade-in"
                style={{ animationDelay: '300ms' }}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Google Play</span>
              </a>
            </div>
            
            <div className="flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-center">
                <div className="text-4xl font-bold">50K+</div>
                <div className="text-white/80 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">4.8</div>
                <div className="text-white/80 text-sm">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">120+</div>
                <div className="text-white/80 text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <a href="/" className="flex items-center space-x-2">
                <div className="relative w-10 h-10 flex items-center justify-center bg-pace-blue rounded-xl">
                  <div className="absolute w-6 h-6 animate-pulse-soft text-white font-bold">
                    🏃
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">PACE RUN</span>
              </a>
              <p className="mt-2 text-slate-400 text-sm max-w-md">
                PACE RUN combines advanced tracking technology with social features to create the ultimate running companion.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PACE RUN. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
