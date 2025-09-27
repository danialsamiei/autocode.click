import { useState } from 'react';

interface LoginFormProps {
  onLogin: (authenticated: boolean) => void;
  onSetUserRole: (role: string) => void;
}

const demoAccounts = {
  admin: { password: 'admin123', role: 'مدیر کل', permissions: ['all'] },
  manager: { password: 'manager123', role: 'مدیر', permissions: ['manage', 'deploy'] },
  technician: { password: 'tech123', role: 'فنی', permissions: ['develop'] }
};

export function LoginForm({ onLogin, onSetUserRole }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const account = demoAccounts[username as keyof typeof demoAccounts];
    
    if (account && account.password === password) {
      onSetUserRole(account.role);
      onLogin(true);
    } else {
      setError('نام کاربری یا رمز عبور اشتباه است');
    }
    
    setLoading(false);
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" dir="rtl">
              ورود به سیستم
            </h2>
            <p className="text-gray-600" dir="rtl">
              برای دسترسی به پلتفرم Abalon وارد شوید
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                نام کاربری
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="نام کاربری خود را وارد کنید"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2" dir="rtl">
                رمز عبور
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="رمز عبور خود را وارد کنید"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" dir="rtl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  در حال ورود...
                </>
              ) : (
                'ورود'
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3" dir="rtl">
              اکانت‌های دمو:
            </h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Admin:</span>
                <span>admin / admin123</span>
              </div>
              <div className="flex justify-between">
                <span>Manager:</span>
                <span>manager / manager123</span>
              </div>
              <div className="flex justify-between">
                <span>Technician:</span>
                <span>technician / tech123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}