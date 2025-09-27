import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { useState } from 'react';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';
import { LoginForm } from '~/components/auth/LoginForm';
import { Homepage } from '~/components/homepage/Homepage';

export const meta: MetaFunction = () => {
  return [
    { title: 'Abalon.Click - پلتفرم توسعه هوش مصنوعی' }, 
    { name: 'description', content: 'پلتفرم پیشرفته توسعه نرم‌افزار با هوش مصنوعی Abalon Code LLM - NoCode و LowCode' }
  ];
};

export const loader = () => json({});

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [userRole, setUserRole] = useState<string>('');

  // If user is authenticated and wants to use chat
  if (showChat && isAuthenticated) {
    return (
      <div className="flex flex-col h-full w-full">
        <Header userRole={userRole} onLogout={() => {
          setIsAuthenticated(false);
          setShowChat(false);
          setUserRole('');
        }} />
        <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
      </div>
    );
  }

  // If user is authenticated but hasn't started chat yet
  if (isAuthenticated && !showChat) {
    return (
      <div className="flex flex-col h-full w-full">
        <Header userRole={userRole} onLogout={() => {
          setIsAuthenticated(false);
          setShowChat(false);
          setUserRole('');
        }} />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4" dir="rtl">
              به پلتفرم Abalon خوش آمدید
            </h2>
            <p className="text-gray-600 mb-6" dir="rtl">
              آماده شروع توسعه با هوش مصنوعی هستید؟
            </p>
            <button
              onClick={() => setShowChat(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              شروع توسعه
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default homepage for non-authenticated users
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <Homepage onLogin={() => setIsAuthenticated(true)} onSetUserRole={setUserRole} />
    </div>
  );
}