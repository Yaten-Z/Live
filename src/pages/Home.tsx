import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import MomentCard from '../components/MomentCard';
import { recentMoments, author } from '../data/moments';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="pt-32">
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-24 h-24 object-cover"
              />
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {author.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                  用镜头记录生活，用文字传递情感。在这里，你会发现我的日常碎片、摄影作品、旅行足迹和随想。每一个瞬间都值得被珍藏。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              Recent Moments
            </h2>
            <Link
              to="/moments"
              className="btn-base inline-flex items-center space-x-2 text-sm">
              <span>All Moments</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentMoments.map((moment) => (
              <MomentCard key={moment.id} moment={moment} />
            ))}
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}