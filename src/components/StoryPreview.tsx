
import React from 'react';

const StoryPreview = () => {
  const stories = [
    { user: 'Emma', avatar: '👧', background: 'bg-gradient-to-br from-pink-400 to-purple-500', activity: '5K Run', viewed: false },
    { user: 'James', avatar: '👨', background: 'bg-gradient-to-br from-amber-400 to-orange-500', activity: 'Morning Jog', viewed: false },
    { user: 'Sophia', avatar: '👩', background: 'bg-gradient-to-br from-pace-blue to-cyan-500', activity: 'Marathon Prep', viewed: true },
    { user: 'Michael', avatar: '🧔', background: 'bg-gradient-to-br from-pace-green to-teal-500', activity: 'Trail Run', viewed: true },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 py-4 px-2">
        {/* Your Story */}
        <div className="flex flex-col items-center space-y-1 flex-shrink-0">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-slate-100 relative">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-pace-blue animate-spin-slow"></div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-pace-blue flex items-center justify-center text-white text-xl leading-none">
              +
            </div>
          </div>
          <span className="text-xs font-medium">Your Story</span>
        </div>
        
        {/* Friends Stories */}
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center space-y-1 flex-shrink-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
              <div className={`absolute inset-0 rounded-full ${story.viewed ? 'border-2 border-slate-300' : 'border-2 border-pace-blue'}`}></div>
              <div className={`w-14 h-14 rounded-full ${story.background} flex items-center justify-center text-2xl`}>
                {story.avatar}
              </div>
            </div>
            <span className="text-xs font-medium">{story.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryPreview;
