import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { moments } from '../data/moments';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';
import GiscusComments from '../components/GiscusComments';

export default function MomentDetail() {
  const { id } = useParams<{ id: string }>();
  const moment = moments.find((m) => m.id === id);

  if (!moment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-serif text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          这条动态不存在或已被删除
        </p>
        <Link to="/moments" className="btn-base">
          返回朋友圈
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(moment.createdAt).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Link
              to="/moments"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              <span>返回朋友圈</span>
            </Link>
          </div>

          <article className="card">
            <div className="flex items-start space-x-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <img
                src={moment.author.avatar}
                alt={moment.author.name}
                className="w-12 h-12 object-cover"
              />
              <div className="flex-1">
                <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {moment.author.name}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                  <span className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{formattedDate}</span>
                  </span>
                  {moment.tags.length > 0 && (
                    <span className="flex items-center space-x-1">
                      <Tag size={16} />
                      <span>{moment.tags.join(', ')}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed whitespace-pre-wrap">
                {moment.content}
              </p>
            </div>

            {moment.images.length > 0 && (
              <div className="mb-12">
                <ImageGrid
                  images={moment.images}
                  title={`${moment.images.length} 张照片`}
                />
              </div>
            )}

            {moment.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {moment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <GiscusComments discussionId={`moment-${moment.id}`} />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
