import React, { useState } from 'react';
import { SavedRule } from '../types';
import { Trash2, Quote, Bookmark, AlertTriangle } from 'lucide-react';

interface SavedRulesViewProps {
  rules: SavedRule[];
  onDeleteRule: (id: string) => void;
}

const SavedRulesView: React.FC<SavedRulesViewProps> = ({ rules, onDeleteRule }) => {
  const [ruleToDelete, setRuleToDelete] = useState<string | null>(null);

  const confirmDelete = (id: string) => {
    setRuleToDelete(id);
  };

  const cancelDelete = () => {
    setRuleToDelete(null);
  };

  const executeDelete = () => {
    if (ruleToDelete) {
      onDeleteRule(ruleToDelete);
      setRuleToDelete(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <Bookmark className="w-6 h-6 text-gold-500" />
          Mano išsaugotos taisyklės
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Jūsų asmeninis etiketo kodeksas</p>
      </div>

      {rules.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-10 text-center border border-dashed border-gray-300 dark:border-slate-600">
          <Quote className="w-12 h-12 text-gray-300 dark:text-slate-600 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Dar neturite išsaugotų taisyklių</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Skaitydami pamokas, pažymėkite tekstą pelyte, kad išsaugotumėte svarbias mintis čia.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {rules.map((rule) => (
            <div 
              key={rule.id} 
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow relative group"
            >
              <div className="flex items-start">
                <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 mr-4 flex-shrink-0 transform -scale-x-100" />
                <div className="flex-1">
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-serif italic mb-4 leading-relaxed">
                    "{rule.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-slate-700 pt-3">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/40 px-2 py-1 rounded">
                      {rule.lessonTitle}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {rule.date}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => confirmDelete(rule.id)}
                className="absolute top-4 right-4 p-2 text-gray-300 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                title="Ištrinti taisyklę"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      {ruleToDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-sm w-full shadow-2xl transform transition-all scale-100">
            <div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-400">
              <AlertTriangle className="w-6 h-6" />
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Ištrinti taisyklę?</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ar tikrai norite ištrinti šią išsaugotą taisyklę? Šio veiksmo negalėsite atšaukti.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                Atšaukti
              </button>
              <button
                onClick={executeDelete}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-medium shadow-sm"
              >
                Ištrinti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedRulesView;