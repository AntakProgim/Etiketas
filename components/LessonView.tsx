import React, { useState, useEffect, useRef } from 'react';
import { Lesson, UserRole } from '../types';
import { ArrowLeft, CheckCircle, Circle, BookmarkPlus, ImageOff, Sparkles, Volume2, Square, Play } from 'lucide-react';
import AIAssistant from './AIAssistant';
import { TOPICS } from '../constants';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onSaveRule: (text: string, lessonTitle: string) => void;
  onSelectLesson: (lesson: Lesson) => void;
  userRole?: UserRole | null;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack, isCompleted, onToggleComplete, onSaveRule, onSelectLesson, userRole }) => {
  const [selection, setSelection] = useState<{ x: number; y: number; text: string } | null>(null);
  const [imgError, setImgError] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelectionChange = () => {
      const selectedText = window.getSelection()?.toString().trim();
      
      if (selectedText && selectedText.length > 5 && contentRef.current) {
        const selectionRange = window.getSelection()?.getRangeAt(0);
        if (selectionRange) {
          const rect = selectionRange.getBoundingClientRect();
          // Calculate position relative to viewport
          setSelection({
            x: rect.left + rect.width / 2,
            y: rect.top - 10, // Position slightly above text
            text: selectedText
          });
        }
      } else {
        setSelection(null);
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selection) {
      onSaveRule(selection.text, lesson.title);
      // Clear selection visual
      window.getSelection()?.removeAllRanges();
      setSelection(null);
    }
  };

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = contentRef.current?.innerText || '';
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'lt-LT';
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const playPhrase = (phrase: string, lang: string) => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false); // Stop main text reading if active
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  // Find related lessons
  const currentTopic = TOPICS.find(t => t.lessons.some(l => l.id === lesson.id));
  const relatedLessons = currentTopic 
    ? currentTopic.lessons.filter(l => l.id !== lesson.id).slice(0, 3) 
    : [];

  return (
    <div className="max-w-3xl mx-auto relative pb-20">
      {/* Floating Save Button */}
      {selection && (
        <div 
          className="fixed z-50 transform -translate-x-1/2 -translate-y-full animate-bounce-in"
          style={{ left: selection.x, top: selection.y }}
        >
          <button
            onClick={handleSaveClick}
            className="flex items-center gap-2 bg-primary-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary-700 transition-colors text-sm font-medium whitespace-nowrap"
          >
            <BookmarkPlus className="w-4 h-4" />
            Išsaugoti taisyklę
          </button>
          <div className="w-3 h-3 bg-primary-800 transform rotate-45 absolute left-1/2 -bottom-1.5 -translate-x-1/2"></div>
        </div>
      )}

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

          <button 
            onClick={handleSpeak}
            className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors text-primary-700 dark:text-primary-400 flex items-center gap-2 px-4"
          >
            {isSpeaking ? <Square className="w-5 h-5 fill-current" /> : <Volume2 className="w-5 h-5" />}
            <span className="font-medium text-sm">{isSpeaking ? 'Sustabdyti' : 'Klausyti'}</span>
          </button>
        </div>
        
        <div className="p-6 md:p-10 relative">
          <div className="mb-4 bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg flex items-start text-sm text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800">
            <BookmarkPlus className="w-5 h-5 mr-2 flex-shrink-0" />
            <p>Pažymėkite bet kurį tekstą pelyte, kad išsaugotumėte svarbią taisyklę.</p>
          </div>

          {/* Audio Phrases Section */}
          {lesson.audioPhrases && lesson.audioPhrases.length > 0 && (
            <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-serif font-bold text-gray-800 dark:text-white mb-3 flex items-center">
                <Volume2 className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                Tarimas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lesson.audioPhrases.map((phrase, idx) => (
                  <button
                    key={idx}
                    onClick={() => playPhrase(phrase.phrase, phrase.lang)}
                    className="flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-sm transition-all text-left group"
                  >
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 block">{phrase.phrase}</span>
                      {phrase.label && <span className="text-xs text-gray-500 dark:text-gray-400">{phrase.label}</span>}
                    </div>
                    <div className="bg-primary-50 dark:bg-primary-900/40 p-2 rounded-full text-primary-600 dark:text-primary-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/60 transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div 
            ref={contentRef}
            className="prose dark:prose-invert prose-slate prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-primary-900 dark:prose-headings:text-primary-100
              prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-li:marker:text-primary-500 dark:prose-li:marker:text-primary-400"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />
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

        <button
          onClick={() => setShowAI(!showAI)}
          className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {showAI ? 'Uždaryti DI asistentą' : 'Klausti DI apie šią pamoką'}
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

      {showAI && (
        <div className="animate-fade-in-up mb-8">
          <AIAssistant currentLesson={lesson} userRole={userRole} />
        </div>
      )}
    </div>
  );
};

export default LessonView;