import React from 'react';
import { Target, Check, Briefcase, GraduationCap } from 'lucide-react';
import { UserRole } from '../types';

interface GoalsViewProps {
  selectedGoals: string[];
  onToggleGoal: (goalId: string) => void;
  userRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
}

const AVAILABLE_GOALS = [
  { id: 'business', label: 'Dalykinis etiketas', description: 'Susitikimai, derybos, apranga' },
  { id: 'table', label: 'Stalo etiketas', description: 'Valgymo kultūra, įrankiai, elgesys restorane' },
  { id: 'digital', label: 'Skaitmeninė komunikacija', description: 'El. laiškai, socialiniai tinklai, nuotolinis darbas' },
  { id: 'social', label: 'Bendravimas visuomenėje', description: 'Pasisveikinimas, pokalbiai, viešasis transportas' },
  { id: 'international', label: 'Tarptautinis etiketas', description: 'Kultūriniai skirtumai, kelionės' },
  { id: 'school', label: 'Mokyklos etiketas', description: 'Elgesys pamokose, bendravimas su mokytojais' },
];

const GoalsView: React.FC<GoalsViewProps> = ({ selectedGoals, onToggleGoal, userRole, onSelectRole }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Mano mokymosi tikslai</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Pasirinkite sritis, kurias norite tobulinti. Tai padės mums ateityje pritaikyti turinį jūsų poreikiams.
        </p>
      </div>

      {/* User Role Selection */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Kas Jūs esate?</h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onSelectRole('student')}
            className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all w-40 ${
              userRole === 'student'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/40 dark:border-primary-400'
                : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-200 dark:hover:border-primary-600'
            }`}
          >
            <div className={`p-3 rounded-full mb-3 ${userRole === 'student' ? 'bg-primary-100 dark:bg-primary-900/60 text-primary-600 dark:text-primary-300' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
              <GraduationCap className="w-8 h-8" />
            </div>
            <span className={`font-medium ${userRole === 'student' ? 'text-primary-900 dark:text-primary-100' : 'text-gray-700 dark:text-gray-300'}`}>Mokinys</span>
            {userRole === 'student' && <Check className="w-4 h-4 text-primary-500 mt-2" />}
          </button>

          <button
            onClick={() => onSelectRole('employee')}
            className={`flex flex-col items-center p-6 rounded-xl border-2 transition-all w-40 ${
              userRole === 'employee'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/40 dark:border-primary-400'
                : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-200 dark:hover:border-primary-600'
            }`}
          >
            <div className={`p-3 rounded-full mb-3 ${userRole === 'employee' ? 'bg-primary-100 dark:bg-primary-900/60 text-primary-600 dark:text-primary-300' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
              <Briefcase className="w-8 h-8" />
            </div>
            <span className={`font-medium ${userRole === 'employee' ? 'text-primary-900 dark:text-primary-100' : 'text-gray-700 dark:text-gray-300'}`}>Darbuotojas</span>
            {userRole === 'employee' && <Check className="w-4 h-4 text-primary-500 mt-2" />}
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {AVAILABLE_GOALS.map((goal) => {
          const isSelected = selectedGoals.includes(goal.id);
          return (
            <div 
              key={goal.id}
              onClick={() => onToggleGoal(goal.id)}
              className={`
                relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/40 shadow-md' 
                  : 'border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-200 dark:hover:border-primary-600 hover:shadow-sm'
                }
              `}
            >
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}`}>
                  <Target className="w-6 h-6" />
                </div>
                {isSelected && (
                  <div className="bg-primary-500 dark:bg-primary-600 text-white p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
              <h3 className={`font-bold text-lg mb-2 ${isSelected ? 'text-primary-900 dark:text-primary-100' : 'text-gray-900 dark:text-white'}`}>
                {goal.label}
              </h3>
              <p className={`text-sm ${isSelected ? 'text-primary-700 dark:text-primary-300' : 'text-gray-500 dark:text-gray-400'}`}>
                {goal.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalsView;
