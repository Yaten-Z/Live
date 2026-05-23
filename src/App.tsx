import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Moments from './pages/Moments';
import MomentDetail from './pages/MomentDetail';
import { Link } from 'react-router-dom';

function NotFound() {
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/moment/:id" element={<MomentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
