
export interface AudioPhrase {
  phrase: string;
  lang: string;
  label?: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string; // Can be markdown or HTML string
  imageUrl?: string;
  audioPhrases?: AudioPhrase[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: 'blue' | 'emerald' | 'indigo' | 'violet' | 'rose' | 'amber';
  imageUrl?: string; // Added image URL for topics
  lessons: Lesson[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SavedRule {
  id: string;
  text: string;
  lessonTitle: string;
  lessonId: string;
  date: string;
}

export enum ViewState {
  HOME = 'HOME',
  TOPIC = 'TOPIC',
  LESSON = 'LESSON',
  QUIZ = 'QUIZ',
  AI_CHAT = 'AI_CHAT',
  SAVED_RULES = 'SAVED_RULES',
  FULL_GUIDE = 'FULL_GUIDE',
  RESOURCES = 'RESOURCES',
  GOALS = 'GOALS'
}

export type UserRole = 'student' | 'employee';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
