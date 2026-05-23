import { Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import Footer from './components/Footer';

function NotFound() {
  const { Link } = require('@tanstack/react-router');
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-9xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          页面不存在
        </p>
        <Link to="/" className="btn-base">
          返回首页
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { NotFound };