import { Github, Mail } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
              Moments
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              用镜头记录生活，用文字传递情感。每一个瞬间都值得被珍藏。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">快速链接</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/moments"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                Moments
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">联系方式</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Yaten-Z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:Yaten-Z@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="邮箱"
              >
                <Mail size={18} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://qm.qq.com/q/dZqkHweSOW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="QQ"
              >
                <FontAwesomeIcon icon={faMessage} size="lg" className="text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center pt-6">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Moments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}