
import React from 'react';
import { Users } from 'lucide-react';

type RunnersCountProps = {
  count: number;
};

const RunnersCount = ({ count }: RunnersCountProps) => {
  return (
    <div className="absolute top-4 left-4 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center space-x-2">
      <Users size={20} className="text-pace-green" />
      <span className="text-sm font-medium">{count} corredores próximos</span>
    </div>
  );
};

export default RunnersCount;
