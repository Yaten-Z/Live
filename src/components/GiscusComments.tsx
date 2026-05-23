import { useEffect, useState } from 'react';
import Giscus from '@giscus/react';

interface GiscusCommentsProps {
  discussionId: string;
}

export default function GiscusComments({ discussionId }: GiscusCommentsProps) {
  const [theme, setTheme] = useState('noborder_light');

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'noborder_gray' : 'noborder_light');
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-6">
        评论
      </h3>
      <div className="card">
        <Giscus
          id="comments"
          repo="Yaten-Z/blog-giscus"
          repoId="R_kgDOOzg2eg"
          category="Announcements"
          categoryId="DIC_kwDOOzg2es4Cq1Mo"
          mapping="specific"
          term={discussionId}
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme}
          lang="zh-CN"
        />
      </div>
    </div>
  );
}
