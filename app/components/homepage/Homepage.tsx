import { useState } from 'react';
import { useEffect } from 'react';
import { LoginForm } from '../auth/LoginForm';

interface HomepageProps {
  onLogin: (authenticated: boolean) => void;
  onSetUserRole: (role: string) => void;
}

export function Homepage({ onLogin, onSetUserRole }: HomepageProps) {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    console.log('Homepage component mounted');
    console.log('showLogin:', showLogin);
  }, [showLogin]);

  if (showLogin) {
    return <LoginForm onLogin={onLogin} onSetUserRole={onSetUserRole} />;
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" dir="rtl">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Abalon.Click
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto" dir="rtl">
              پلتفرم پیشرفته توسعه نرم‌افزار با هوش مصنوعی
              <br />
              <span className="text-blue-600 font-semibold">Abalon Code LLM</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                شروع رایگان
              </button>
              <a
                href="https://wsnc.danial.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-all"
              >
                معرفی فناوری
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">
              قابلیت‌های پیشرفته
            </h2>
            <p className="text-xl text-gray-600" dir="rtl">
              تکنولوژی‌های نوین برای توسعه سریع و هوشمند
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" dir="rtl">
                Abalon Code LLM
              </h3>
              <p className="text-gray-600" dir="rtl">
                مدل زبانی اختصاصی برای توسعه کد با دقت بالا
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" dir="rtl">
                NoCode & LowCode
              </h3>
              <p className="text-gray-600" dir="rtl">
                توسعه سریع بدون نیاز به کدنویسی پیچیده
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" dir="rtl">
                Auto Scale Deploy
              </h3>
              <p className="text-gray-600" dir="rtl">
                استقرار خودکار با قابلیت مقیاس‌پذیری
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" dir="rtl">
            استراتژی Abalon.Cloud
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" dir="rtl">
            آمادگی ورود به عصر جدید توسعه نرم‌افزار
            <br />
            پذیرش و تسهیل مسیر شهروند توسعه‌دهنده
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4" dir="rtl">🌟 ورود به بازار</h3>
              <p className="text-lg" dir="rtl">
                راهکارهای نوآورانه برای تسریع فرآیند توسعه
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4" dir="rtl">🚀 آینده توسعه</h3>
              <p className="text-lg" dir="rtl">
                پلتفرمی برای تحقق ایده‌های خلاقانه
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Accounts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
              اکانت‌های دمو
            </h2>
            <p className="text-lg text-gray-600" dir="rtl">
              برای تست سیستم از اکانت‌های زیر استفاده کنید
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3" dir="rtl">👑 مدیر کل</h3>
              <div className="space-y-2 text-sm">
                <div><strong>نام کاربری:</strong> admin</div>
                <div><strong>رمز عبور:</strong> admin123</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3" dir="rtl">👨‍💼 مدیر</h3>
              <div className="space-y-2 text-sm">
                <div><strong>نام کاربری:</strong> manager</div>
                <div><strong>رمز عبور:</strong> manager123</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3" dir="rtl">🔧 فنی</h3>
              <div className="space-y-2 text-sm">
                <div><strong>نام کاربری:</strong> technician</div>
                <div><strong>رمز عبور:</strong> tech123</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Abalon.Click</h3>
              <p className="text-gray-400" dir="rtl">
                پلتفرم پیشرفته توسعه نرم‌افزار با هوش مصنوعی
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" dir="rtl">لینک‌های مفید</h4>
              <div className="space-y-2">
                <a href="https://wsnc.danial.ai" className="block text-gray-400 hover:text-white transition-colors">
                  معرفی فناوری
                </a>
                <a href="https://abalon.cloud" className="block text-gray-400 hover:text-white transition-colors">
                  Abalon Cloud
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" dir="rtl">تماس با ما</h4>
              <div className="space-y-2">
                <a href="mailto:contact@danial.ai" className="block text-gray-400 hover:text-white transition-colors">
                  contact@danial.ai
                </a>
                <p className="text-gray-400" dir="rtl">
                  توسعه یافته توسط <a href="https://alef.ba" className="text-blue-400 hover:text-blue-300">alef.ba</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400" dir="rtl">
              © 2024 Abalon.Click - تمامی حقوق محفوظ است
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}