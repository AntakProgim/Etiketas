import React, { useState } from 'react';
import { Topic } from '../types';
import * as Icons from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  completedLessons: Set<string>;
  onClick: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, completedLessons, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const IconComponent = (Icons as any)[topic.iconName] || Icons.Book;

  const completedCount = topic.lessons.filter(l => completedLessons.has(l.id)).length;
  const totalCount = topic.lessons.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  // Map color names to tailwind classes
  const colorMap: Record<string, { bg: string, text: string, bar: string, iconBg: string, hover: string }> = {
    blue: { 
      bg: 'bg-blue-50 dark:bg-blue-900/20', 
      text: 'text-blue-700 dark:text-blue-300', 
      bar: 'bg-blue-500', 
      iconBg: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-800', 
      hover: 'hover:border-blue-200 dark:hover:border-blue-700' 
    },
    emerald: { 
      bg: 'bg-emerald-50 dark:bg-emerald-900/20', 
      text: 'text-emerald-700 dark:text-emerald-300', 
      bar: 'bg-emerald-500', 
      iconBg: 'group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800', 
      hover: 'hover:border-emerald-200 dark:hover:border-emerald-700' 
    },
    indigo: { 
      bg: 'bg-indigo-50 dark:bg-indigo-900/20', 
      text: 'text-indigo-700 dark:text-indigo-300', 
      bar: 'bg-indigo-500', 
      iconBg: 'group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800', 
      hover: 'hover:border-indigo-200 dark:hover:border-indigo-700' 
    },
    violet: { 
      bg: 'bg-violet-50 dark:bg-violet-900/20', 
      text: 'text-violet-700 dark:text-violet-300', 
      bar: 'bg-violet-500', 
      iconBg: 'group-hover:bg-violet-100 dark:group-hover:bg-violet-800', 
      hover: 'hover:border-violet-200 dark:hover:border-violet-700' 
    },
    rose: { 
      bg: 'bg-rose-50 dark:bg-rose-900/20', 
      text: 'text-rose-700 dark:text-rose-300', 
      bar: 'bg-rose-500', 
      iconBg: 'group-hover:bg-rose-100 dark:group-hover:bg-rose-800', 
      hover: 'hover:border-rose-200 dark:hover:border-rose-700' 
    },
    amber: { 
      bg: 'bg-amber-50 dark:bg-amber-900/20', 
      text: 'text-amber-700 dark:text-amber-300', 
      bar: 'bg-amber-500', 
      iconBg: 'group-hover:bg-amber-100 dark:group-hover:bg-amber-800', 
      hover: 'hover:border-amber-200 dark:hover:border-amber-700' 
    },
  };

  const theme = colorMap[topic.color] || { 
    bg: 'bg-primary-50 dark:bg-primary-900/20', 
    text: 'text-primary-700 dark:text-primary-300', 
    bar: 'bg-primary-500', 
    iconBg: 'group-hover:bg-primary-100 dark:group-hover:bg-primary-800',
    hover: 'hover:border-primary-200 dark:hover:border-primary-700'
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-slate-700 group flex flex-col h-full ${theme.hover}`}
    >
      {/* Image Header */}
      <div className="h-32 w-full relative overflow-hidden bg-gray-100 dark:bg-slate-700">
        {topic.imageUrl && !imgError ? (
          <img 
            src={topic.imageUrl} 
            alt={topic.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className={`w-full h-full ${theme.bg} flex items-center justify-center`}>
            <IconComponent className={`w-12 h-12 ${theme.text} opacity-20`} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-6 text-white flex items-center">
           <div className={`w-8 h-8 ${theme.bg} backdrop-blur-md bg-opacity-90 rounded-lg flex items-center justify-center mr-3 shadow-sm`}>
            <IconComponent className={`w-4 h-4 ${theme.text}`} />
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 pt-4">
        <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white mb-2">{topic.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{topic.description}</p>
      </div>
      
      <div className="px-6 py-2">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Pažanga</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-1.5">
          <div 
            className={`${theme.bar} h-1.5 rounded-full transition-all duration-500`} 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-slate-900/50 px-6 py-3 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center mt-2">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{totalCount} Pamokos</span>
        <Icons.ArrowRight className={`w-4 h-4 ${theme.text} transform group-hover:translate-x-1 transition-transform`} />
      </div>
    </div>
  );
};

export default TopicCard;