
import React from 'react';
import FeatureCard from './FeatureCard';
import { MapPin, Award, Users, LineChart, BarChart, Clock, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your routes, distance, pace, and calories in real-time with high precision GPS integration.',
      color: 'bg-pace-blue/10 text-pace-blue',
      delay: 0
    },
    {
      icon: Award,
      title: 'Weekly Challenges',
      description: 'Compete in distance, time, or calorie challenges and earn animated medals for your achievements.',
      color: 'bg-pace-green/10 text-pace-green',
      delay: 100
    },
    {
      icon: Users,
      title: 'Runner Community',
      description: 'Connect with other runners, join groups, and participate in virtual or in-person running events.',
      color: 'bg-amber-500/10 text-amber-500',
      delay: 200
    },
    {
      icon: LineChart,
      title: 'Performance Analytics',
      description: 'Get detailed insights into your running patterns, progress, and areas for improvement.',
      color: 'bg-purple-500/10 text-purple-500',
      delay: 300
    },
    {
      icon: BarChart,
      title: 'AI Coaching',
      description: 'Receive personalized training suggestions and pace optimization based on your running data.',
      color: 'bg-sky-500/10 text-sky-500',
      delay: 400
    },
    {
      icon: Clock,
      title: 'Run Stories',
      description: 'Share your running moments with friends through 24-hour stories with custom stickers and filters.',
      color: 'bg-rose-500/10 text-rose-500',
      delay: 500
    },
    {
      icon: Zap,
      title: 'Smart Notifications',
      description: 'Get motivational reminders and smart alerts about optimal running times and conditions.',
      color: 'bg-amber-600/10 text-amber-600',
      delay: 600
    },
    {
      icon: Shield,
      title: 'Safety Features',
      description: 'Emergency contact alerts and location sharing for added security during your runs.',
      color: 'bg-emerald-500/10 text-emerald-500',
      delay: 700
    },
  ];
  
  return (
    <section id="features" className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-pace-blue/10 text-pace-blue font-medium text-sm mb-4">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need In A Running App</h2>
          <p className="text-slate-600 dark:text-slate-300">
            PACE RUN combines cutting-edge technology with social features to make your running experience more enjoyable, effective, and connected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
