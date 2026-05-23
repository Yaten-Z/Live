import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Image } from 'lucide-react';

interface ImageGridProps {
  images: string[];
  title?: string;
}

export default function ImageGrid({ images, title }: ImageGridProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      <PhotoProvider>
        <div className={`grid gap-2 ${
          images.length === 1
            ? 'grid-cols-1'
            : images.length === 2
            ? 'grid-cols-2'
            : 'grid-cols-3'
        }`}>
          {images.map((image, index) => (
            <PhotoView key={index} src={image}>
              <div className={`relative overflow-hidden cursor-pointer ${
                images.length === 1 ? 'aspect-video' : 'aspect-square'
              }`}>
                <img
                  src={image}
                  alt={`图片 ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Image
                    size={24}
                    className="text-white opacity-0 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
