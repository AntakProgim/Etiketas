import React from 'react';
import { ViewState } from '../types';
import { BookOpen, HelpCircle, GraduationCap, Bookmark, FileText, Heart, Target, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { view: ViewState.HOME, label: 'Pagrindinis', icon: BookOpen },
    { view: ViewState.FULL_GUIDE, label: 'Etiketo knyga', icon: FileText },
    { view: ViewState.SAVED_RULES, label: 'Mano taisyklės', icon: Bookmark },
    { view: ViewState.GOALS, label: 'Mano tikslai', icon: Target },
    { view: ViewState.AI_CHAT, label: 'Klausk eksperto', icon: HelpCircle },
  ];

  const externalLink = {
    label: 'Nesmurtinė komunikacija',
    icon: Heart,
    href: 'https://nk.antakalnio.lt/'
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:relative md:w-64 md:h-screen md:border-t-0 md:border-r z-50 pb-[env(safe-area-inset-bottom)] transition-all duration-300">
      <div className="flex flex-row md:flex-col justify-around md:justify-start md:p-6 h-16 md:h-full items-center md:items-stretch">
        <div className="hidden md:block mb-8">
          <h1 className="text-2xl font-serif font-bold text-primary-800 dark:text-primary-400">Etiketo gidas</h1>
        </div>
        
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onChangeView(item.view)}
            className={`flex flex-col md:flex-row items-center justify-center md:justify-start md:px-4 md:py-3 rounded-xl transition-all duration-200 group flex-1 md:flex-none ${
              currentView === item.view 
                ? 'text-primary-600 dark:text-primary-400 md:bg-primary-50 dark:md:bg-primary-900/20' 
                : 'text-gray-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-slate-800 md:hover:bg-transparent'
            }`}
          >
            <div className={`p-1 rounded-full transition-all ${currentView === item.view ? 'bg-primary-100 dark:bg-primary-900/40 md:bg-transparent' : ''}`}>
              <item.icon className={`w-6 h-6 md:mr-3 transition-transform ${currentView === item.view ? 'scale-110' : 'group-hover:scale-105'}`} />
            </div>
            <span className={`text-[10px] md:text-base font-medium mt-0.5 md:mt-0 ${currentView === item.view ? 'font-bold' : ''}`}>{item.label}</span>
          </button>
        ))}

        <div className="hidden md:block flex-1"></div>

        <button
          onClick={toggleTheme}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start md:px-4 md:py-3 rounded-xl transition-all duration-200 group flex-1 md:flex-none text-gray-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-slate-800 md:hover:bg-transparent"
        >
          <div className="p-1 rounded-full transition-all group-hover:bg-gray-100 dark:group-hover:bg-slate-800 md:group-hover:bg-transparent">
            {theme === 'light' ? (
              <Moon className="w-6 h-6 md:mr-3 transition-transform group-hover:scale-105" />
            ) : (
              <Sun className="w-6 h-6 md:mr-3 transition-transform group-hover:scale-105" />
            )}
          </div>
          <span className="text-[10px] md:text-base font-medium mt-0.5 md:mt-0 hidden md:inline">
            {theme === 'light' ? 'Tamsus režimas' : 'Šviesus režimas'}
          </span>
        </button>

        <a
          href={externalLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-center justify-center md:justify-start md:px-4 md:py-3 rounded-xl transition-all duration-200 group flex-1 md:flex-none text-gray-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 md:hover:bg-transparent md:mt-4"
        >
          <div className="p-1 rounded-full transition-all group-hover:bg-rose-100 dark:group-hover:bg-rose-900/40 md:group-hover:bg-transparent">
            <externalLink.icon className="w-6 h-6 md:mr-3 transition-transform group-hover:scale-105" />
          </div>
          <span className="text-[10px] md:text-base font-medium mt-0.5 md:mt-0">Nesmurtinė komunikacija</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
