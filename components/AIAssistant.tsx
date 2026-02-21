import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, Topic, Lesson } from '../types';
import { Send, User, Sparkles, Loader2 } from 'lucide-react';

// Helper component to format text with Markdown-like syntax
const FormattedMessage = ({ text, isUser }: { text: string; isUser: boolean }) => {
  const parseBold = (str: string) => {
    return str.split(/(\*\*.*?\*\*)/g).map((part, i) => 
      (part.startsWith('**') && part.endsWith('**')) 
        ? <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong> 
        : part
    );
  };

  return (
    <div className="text-sm leading-relaxed space-y-1">
      {text.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-2" />;

        // Headers
        if (trimmed.startsWith('### ')) {
           return <h4 key={i} className="font-bold text-base pt-1 pb-1">{parseBold(trimmed.replace(/^###\s+/, ''))}</h4>;
        }

        // Bullet points
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={i} className="flex items-start pl-1">
              <span className={`mr-2 font-bold ${isUser ? 'text-white/80' : 'text-primary-600 dark:text-primary-400'}`}>•</span>
              <span className="flex-1">{parseBold(trimmed.replace(/^[-*]\s+/, ''))}</span>
            </div>
          );
        }

        // Numbered lists
        if (/^\d+\.\s/.test(trimmed)) {
           const match = trimmed.match(/^(\d+\.)\s(.*)/);
           if (match) {
             return (
               <div key={i} className="flex items-start pl-1">
                 <span className={`mr-2 font-bold min-w-[1.25rem] ${isUser ? 'text-white/80' : 'text-primary-600 dark:text-primary-400'}`}>{match[1]}</span>
                 <span className="flex-1">{parseBold(match[2])}</span>
               </div>
             );
           }
        }

        // Standard Paragraph
        return <p key={i}>{parseBold(line)}</p>;
      })}
    </div>
  );
};

interface AIAssistantProps {
  currentTopic?: Topic | null;
  currentLesson?: Lesson | null;
  userRole?: 'student' | 'employee' | null;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ currentTopic, currentLesson, userRole }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Sveiki! Aš esu Jūsų asmeninis etiketo ir protokolo gidas mokyklos bendruomenei. \n\nGaliu patarti įvairiais klausimais:\n- Kaip rengtis mokyklos šventei ar egzaminui?\n- Kaip elgtis valgykloje ar renginio metu?\n- Kaip mandagiai bendrauti su mokytojais ar tėvais?\n- Kokią dovaną išrinkti klasės vadovui?\n\nKuo galiu Jums padėti šiandien?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const context = {
        topic: currentTopic ? { title: currentTopic.title, description: currentTopic.description } : undefined,
        lesson: currentLesson ? { title: currentLesson.title, content: currentLesson.content } : undefined,
        userRole: userRole || undefined
      };
      
      const responseText = await getGeminiResponse(userMessage, context);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Atsiprašau, įvyko klaida. Bandykite dar kartą.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 h-[600px] flex flex-col overflow-hidden max-w-3xl mx-auto">
      <div className="bg-primary-50 dark:bg-primary-900/20 p-4 border-b border-primary-100 dark:border-primary-800 flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
          <h3 className="font-serif font-bold text-primary-900 dark:text-primary-100">DI ekspertas</h3>
        </div>
        {(currentTopic || currentLesson) && (
          <div className="text-xs text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/40 px-2 py-1 rounded-full max-w-[200px] truncate">
             Kontekstas: {currentLesson?.title || currentTopic?.title}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mx-2 ${
                msg.role === 'user' ? 'bg-gray-200 dark:bg-slate-600' : 'bg-gold-500'
              }`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Sparkles className="w-5 h-5 text-white" />}
              </div>
              <div className={`p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-primary-600 text-white rounded-tr-none' 
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
              } ${msg.isError ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800' : ''}`}>
                <FormattedMessage text={msg.text} isUser={msg.role === 'user'} />
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex flex-row">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 mx-2">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center">
                <Loader2 className="w-5 h-5 text-gray-500 dark:text-gray-400 animate-spin mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Galvoju atsakymą...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Klauskite apie etiketą..."
            className="flex-1 p-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm placeholder-gray-400 dark:placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
          DI gali klysti. Pasikliaukite oficialiais šaltiniais svarbiais klausimais.
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;