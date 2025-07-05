 
export const API_BASE_URL = 'https://library-management-system-orcin-five.vercel.app/api';

export const TOAST_DURATION = 3000;

export const ROUTES = {
  BOOKS: '/books',
  CREATE_BOOK: '/create-book',
  EDIT_BOOK: '/edit-book',
  BOOK_DETAILS: '/books/:id',
  BORROW_BOOK: '/borrow/:bookId',
  BORROW_SUMMARY: '/borrow-summary',
} as const;

export const MESSAGES = {
  BOOK_CREATED: 'Book created successfully!',
  BOOK_UPDATED: 'Book updated successfully!',
  BOOK_DELETED: 'Book deleted successfully!',
  BOOK_BORROWED: 'Book borrowed successfully!',
  ERROR_CREATING_BOOK: 'Failed to create book. Please try again.',
  ERROR_UPDATING_BOOK: 'Failed to update book. Please try again.',
  ERROR_DELETING_BOOK: 'Failed to delete book. Please try again.',
  ERROR_BORROWING_BOOK: 'Failed to borrow book. Please try again.',
  ERROR_LOADING_BOOKS: 'Failed to load books. Please check your internet connection.',
  ERROR_LOADING_BOOK_DETAILS: 'Failed to load book details.',
  ERROR_LOADING_BORROW_SUMMARY: 'Failed to load borrow summary. Please check your internet connection.',
} as const;