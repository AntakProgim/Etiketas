import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const QUESTIONS_PER_SESSION = 5;

const QuizView: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    // Shuffle and pick 5
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, QUESTIONS_PER_SESSION));
    
    // Reset state
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQuestionIndex].correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  if (questions.length === 0) {
    return <div className="p-8 text-center text-gray-500">Kraunama...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (showResults) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
        <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold text-primary-700">{score}/{questions.length}</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Testas baigtas!</h2>
        <p className="text-gray-600 mb-8">
          {score === questions.length 
            ? 'Puiku! Jūs esate tikras etiketo žinovas.' 
            : 'Gera pradžia, bet dar yra kur tobulėti.'}
        </p>
        <button
          onClick={startNewQuiz}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Bandyti dar kartą
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 w-full">
          <div 
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8">
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2 block">
            Klausimas {currentQuestionIndex + 1} iš {questions.length}
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let optionClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ";
              
              if (isAnswered) {
                if (index === currentQuestion.correctIndex) {
                  optionClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedOption) {
                  optionClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  optionClass += "border-gray-100 text-gray-400 opacity-50";
                }
              } else {
                optionClass += "border-gray-100 hover:border-primary-200 hover:bg-primary-50 text-gray-700";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={isAnswered}
                  className={optionClass}
                >
                  <span className="font-medium">{option}</span>
                  {isAnswered && index === currentQuestion.correctIndex && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correctIndex && <XCircle className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-6 animate-fade-in">
              <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm mb-6 border border-blue-100">
                <strong>Paaiškinimas:</strong> {currentQuestion.explanation}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Kitas klausimas' : 'Baigti testą'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;