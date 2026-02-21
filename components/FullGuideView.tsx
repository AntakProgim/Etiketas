import React, { useState } from 'react';
import { ExternalLink, BookOpen, Loader2 } from 'lucide-react';

const FullGuideView: React.FC = () => {
  const docId = "1J3oXG7KMnwL-1df74ba5gkF2-q5cktPOwx3S7amxzDU";
  // 'preview' mode is cleaner for embedding than 'edit'
  const embedUrl = `https://docs.google.com/document/d/${docId}/preview`;
  const editUrl = `https://docs.google.com/document/d/${docId}/edit?usp=sharing`;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-[85vh] bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between bg-white dark:bg-slate-800 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-lg font-serif font-bold text-primary-900 dark:text-primary-100">Etiketo knyga</h2>
        </div>
        
        <a 
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors text-sm font-medium"
        >
          <span>Atidaryti lange</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 relative bg-gray-50 dark:bg-slate-900">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        )}
        <iframe
          src={embedUrl}
          className="w-full h-full border-0 block"
          title="Etiketo knyga"
          onLoad={() => setIsLoading(false)}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default FullGuideView;