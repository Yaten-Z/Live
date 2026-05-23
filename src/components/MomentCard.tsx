import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Moment } from '../data/moments';

interface MomentCardProps {
  moment: Moment;
  showFullContent?: boolean;
}

export default function MomentCard({ moment, showFullContent = false }: MomentCardProps) {
  const formattedDate = new Date(moment.createdAt).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const displayContent = showFullContent
    ? moment.content
    : moment.content.slice(0, 100) + (moment.content.length > 100 ? '...' : '');

  return (
    <Link to={`/moment/${moment.id}`} className="block">
      <article className="card hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
        {moment.images.length > 0 && (
          <div className="relative aspect-video mb-4 overflow-hidden">
            <img
              src={moment.images[0]}
              alt={moment.content.slice(0, 30)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {moment.images.length > 1 && (
              <div className="absolute top-2 right-2 bg-gray-900/80 text-white px-2 py-1 text-xs">
                {moment.images.length} 张
              </div>
            )}
          </div>
        )}

        <div className="flex items-center space-x-3 mb-3">
          <img
            src={moment.author.avatar}
            alt={moment.author.name}
            className="w-8 h-8 object-cover"
          />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 dark:text-white text-sm">{moment.author.name}</h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <Calendar size={12} className="mr-1" />
              {formattedDate}
            </div>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {displayContent}
        </p>

        {moment.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {moment.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
