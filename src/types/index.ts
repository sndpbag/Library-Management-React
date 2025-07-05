 
 
// export enum Genre {
//   FICTION = 'FICTION',
//   NON_FICTION = 'NON_FICTION',
//   SCIENCE = 'SCIENCE',
//   HISTORY = 'HISTORY',
//   BIOGRAPHY = 'BIOGRAPHY',
//   FANTASY = 'FANTASY'
// }

export const Genre = {
  FICTION: 'fiction',
  NON_FICTION: 'non-fiction',
  SCIENCE: 'science', 
  HISTORY: 'history',
  BIOGRAPHY: 'biography',
  FANTASY: 'fantasy'
} as const;

export type Genre = typeof Genre[keyof typeof Genre];

export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowRecord {
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowSummary {
  _id: string;
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

export interface CreateBookData {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}

export interface BorrowBookData {
  book: string;
  quantity: number;
  dueDate: string;
}

