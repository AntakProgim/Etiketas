import React, { useState } from 'react';
import { Lesson, UserRole } from '../types';
import { ArrowLeft, CheckCircle, Circle, ImageOff, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { TOPICS } from '../constants';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  userRole?: UserRole | null;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack, isCompleted, onToggleComplete, onSelectLesson, userRole }) => {
  const [imgError, setImgError] = useState(false);

  // Find related lessons
  const currentTopic = TOPICS.find(t => t.lessons.some(l => l.id === lesson.id));
  const relatedLessons = currentTopic 
    ? currentTopic.lessons.filter(l => l.id !== lesson.id).slice(0, 3) 
    : [];

  return (
    <div className="max-w-3xl mx-auto relative pb-20">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden mb-6">
        <div className="relative h-64 md:h-80 w-full bg-gray-100 dark:bg-slate-700">
          {!imgError ? (
            <img 
              src={lesson.imageUrl} 
              alt={lesson.title} 
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-50 dark:bg-slate-700">
               <ImageOff className="w-12 h-12 text-primary-200 dark:text-slate-500" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-3xl font-serif font-bold text-white shadow-sm">{lesson.title}</h2>
          </div>
          <button 
            onClick={onBack}
            className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>
        
        <div className="p-6 md:p-10 relative">
          <div 
            className="prose dark:prose-invert prose-slate prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-primary-900 dark:prose-headings:text-primary-100
              prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-li:marker:text-primary-500 dark:prose-li:marker:text-primary-400"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />

          {/* Real-life Scenarios Section */}
          {lesson.scenarios && lesson.scenarios.length > 0 && (
            <div className="mt-12 mb-8 animate-fade-in-up">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-amber-500" />
                Situacijos iš gyvenimo
              </h3>
              <div className="grid gap-6">
                {lesson.scenarios
                  .filter(scenario => !userRole || scenario.role === 'all' || scenario.role === userRole)
                  .map((scenario, index) => (
                    <div key={index} className={`rounded-xl border-l-4 p-6 shadow-sm ${
                      scenario.role === 'student' 
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' 
                        : scenario.role === 'employee'
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500'
                        : 'bg-purple-50 dark:bg-purple-900/20 border-purple-500'
                    }`}>
                      <div className="flex items-center mb-3">
                        {scenario.role === 'student' && <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />}
                        {scenario.role === 'employee' && <Briefcase className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />}
                        <span className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          {scenario.role === 'student' ? 'Mokinio situacija' : scenario.role === 'employee' ? 'Darbuotojo situacija' : 'Bendra situacija'}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{scenario.situation}</h4>
                      <div className="mb-3">
                        <span className="font-semibold text-primary-700 dark:text-primary-300">Kaip elgtis: </span>
                        <span className="text-gray-700 dark:text-gray-300">{scenario.action}</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 italic border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                        Kodėl? {scenario.explanation}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mb-8">
        <button
          onClick={onToggleComplete}
          className={`flex items-center px-8 py-4 rounded-xl shadow-sm transition-all transform hover:scale-105 w-full md:w-auto justify-center ${
            isCompleted 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-6 h-6 mr-3" />
              <span className="font-bold text-lg">Pamoka baigta</span>
            </>
          ) : (
            <>
              <Circle className="w-6 h-6 mr-3" />
              <span className="font-bold text-lg">Pažymėti kaip baigtą</span>
            </>
          )}
        </button>
      </div>

      {/* Related Lessons Section */}
      {relatedLessons.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-serif font-bold text-gray-800 dark:text-white mb-4 px-2 border-l-4 border-primary-500">Susijusios pamokos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedLessons.map(related => (
              <div 
                key={related.id}
                onClick={() => {
                  onSelectLesson(related);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="h-24 mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700">
                   <img src={related.imageUrl} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">{related.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonView;