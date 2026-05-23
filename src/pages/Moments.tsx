import { Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MomentCard from '../components/MomentCard';
import { moments } from '../data/moments';

export default function Moments() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Moments
            </h1>
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              <Clock size={18} />
              记录每一个值得珍藏的瞬间
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moments.map((moment) => (
              <MomentCard key={moment.id} moment={moment} />
            ))}
          </div>

          {moments.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-500">
                还没有发布任何动态
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
