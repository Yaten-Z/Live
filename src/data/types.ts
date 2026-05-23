export interface Author {
  name: string;
  avatar: string;
}

export interface Moment {
  id: string;
  author: Author;
  content: string;
  images: string[];
  createdAt: string;
  tags: string[];
}

export const author: Author = {
  name: 'Yaten',
  avatar: 'https://cn-nb1.rains3.com/taten/2026/04/c58b23eacbd480206815b6b891ea9a80.png',
};
