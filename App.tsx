import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import TopicCard from './components/TopicCard';
import LessonView from './components/LessonView';
import AIAssistant from './components/AIAssistant';
import SavedRulesView from './components/SavedRulesView';
import FullGuideView from './components/FullGuideView';
import GoalsView from './components/GoalsView';
import { ViewState, Topic, Lesson, SavedRule, UserRole } from './types';
import { TOPICS, APP_TITLE, APP_SUBTITLE } from './constants';
import { ArrowLeft, CheckCircle, ImageOff } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  // User Role State
  const [userRole, setUserRole] = useState<UserRole | null>(() => {
    const saved = localStorage.getItem('userRole');
    return saved ? (saved as UserRole) : null;
  });

  // Lesson Completion State
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Saved Rules State
  const [savedRules, setSavedRules] = useState<SavedRule[]>(() => {
    const saved = localStorage.getItem('savedRules');
    return saved ? JSON.parse(saved) : [];
  });

  // User Goals State
  const [selectedGoals, setSelectedGoals] = useState<string[]>(() => {
    const saved = localStorage.getItem('selectedGoals');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (userRole) {
      localStorage.setItem('userRole', userRole);
    } else {
      localStorage.removeItem('userRole');
    }
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(Array.from(completedLessons)));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('savedRules', JSON.stringify(savedRules));
  }, [savedRules]);

  useEffect(() => {
    localStorage.setItem('selectedGoals', JSON.stringify(selectedGoals));
  }, [selectedGoals]);

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentView(ViewState.TOPIC);
  };

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentView(ViewState.LESSON);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setCurrentView(ViewState.HOME);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
    setCurrentView(ViewState.TOPIC);
  };

  const handleNavChange = (view: ViewState) => {
    setCurrentView(view);
    if (view === ViewState.HOME) setSelectedTopic(null);
    setSelectedLesson(null);
  };

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  const handleSaveRule = (text: string, lessonTitle: string) => {
    const newRule: SavedRule = {
      id: Date.now().toString(),
      text,
      lessonTitle,
      lessonId: selectedLesson?.id || '',
      date: new Date().toLocaleDateString('lt-LT')
    };
    setSavedRules(prev => [newRule, ...prev]);
  };

  const handleDeleteRule = (id: string) => {
    setSavedRules(prev => prev.filter(rule => rule.id !== id));
  };

  const handleToggleGoal = (goalId: string) => {
    setSelectedGoals(prev => {
      if (prev.includes(goalId)) {
        return prev.filter(id => id !== goalId);
      } else {
        return [...prev, goalId];
      }
    });
  };

  const handleImageError = (id: string) => {
    setImgErrors(prev => new Set(prev).add(id));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Navigation currentView={currentView} onChangeView={handleNavChange} />

      <main className="flex-1 overflow-y-auto h-screen p-4 md:p-8 pb-24 md:pb-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <header className="mb-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 dark:text-primary-400 mb-2">
              {APP_TITLE}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">{APP_SUBTITLE}</p>
          </header>

          {/* Content Area */}
          <div className="animate-fade-in-up">
            
            {/* HOME VIEW: List of Topics */}
            {currentView === ViewState.HOME && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOPICS.map((topic) => (
                  <TopicCard 
                    key={topic.id} 
                    topic={topic} 
                    completedLessons={completedLessons}
                    onClick={() => handleTopicClick(topic)} 
                  />
                ))}
              </div>
            )}

            {/* TOPIC VIEW: List of Lessons in a Topic */}
            {currentView === ViewState.TOPIC && selectedTopic && (
              <div>
                <button 
                  onClick={handleBackToTopics}
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Grįžti į temas
                </button>
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white pl-2 border-l-4 border-primary-500">
                    {selectedTopic.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {selectedTopic.lessons.filter(l => completedLessons.has(l.id)).length} / {selectedTopic.lessons.length} baigta
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedTopic.lessons.map((lesson) => {
                    const isCompleted = completedLessons.has(lesson.id);
                    const hasError = imgErrors.has(lesson.id);
                    return (
                      <div 
                        key={lesson.id}
                        onClick={() => handleLessonClick(lesson)}
                        className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border overflow-hidden flex flex-col relative ${isCompleted ? 'border-green-200 dark:border-green-800' : 'border-gray-100 dark:border-slate-700'}`}
                      >
                        {isCompleted && (
                          <div className="absolute top-2 right-2 bg-white dark:bg-slate-700 rounded-full p-1 shadow-md z-10">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </div>
                        )}
                        <div className="h-40 w-full overflow-hidden bg-gray-100 dark:bg-slate-700 relative">
                          {!hasError ? (
                            <img 
                              src={lesson.imageUrl} 
                              alt={lesson.title}
                              onError={() => handleImageError(lesson.id)}
                              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary-50 dark:bg-slate-700">
                              <ImageOff className="w-8 h-8 text-primary-200 dark:text-slate-500" />
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-center">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{lesson.title}</h4>
                          <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">Skaityti toliau &rarr;</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* LESSON VIEW: Specific Lesson Content */}
            {currentView === ViewState.LESSON && selectedLesson && (
              <LessonView 
                lesson={selectedLesson} 
                onBack={handleBackToLessons}
                isCompleted={completedLessons.has(selectedLesson.id)}
                onToggleComplete={() => toggleLessonComplete(selectedLesson.id)}
                onSaveRule={handleSaveRule}
                onSelectLesson={(lesson) => setSelectedLesson(lesson)}
                userRole={userRole}
              />
            )}

            {/* SAVED RULES VIEW */}
            {currentView === ViewState.SAVED_RULES && (
               <SavedRulesView 
                 rules={savedRules} 
                 onDeleteRule={handleDeleteRule} 
               />
            )}

            {/* AI CHAT VIEW */}
            {currentView === ViewState.AI_CHAT && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Eksperto konsultacija</h3>
                  <p className="text-gray-500 dark:text-gray-400">Dirbtinis intelektas pasiruošęs atsakyti į Jūsų klausimus</p>
                </div>
                <AIAssistant 
                  currentTopic={selectedTopic} 
                  currentLesson={selectedLesson} 
                  userRole={userRole}
                />
              </div>
            )}

            {/* FULL GUIDE VIEW */}
            {currentView === ViewState.FULL_GUIDE && (
              <FullGuideView />
            )}

            {/* GOALS VIEW */}
            {currentView === ViewState.GOALS && (
              <GoalsView 
                selectedGoals={selectedGoals} 
                onToggleGoal={handleToggleGoal} 
                userRole={userRole}
                onSelectRole={setUserRole}
              />
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
