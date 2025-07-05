import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookQuery, useBorrowBookMutation } from '../store/api';
// import { BorrowBookData } from '../types';
import BorrowForm from './BorrowForm';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import Toast from './Toast';
import type { BorrowBookData } from '../types';

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { 
    data: book, 
    isLoading, 
    isError,
    refetch 
  } = useGetBookQuery(bookId!);
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookMutation();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleBorrowBook = async (data: BorrowBookData) => {
    try {
      await borrowBook(data).unwrap();
      showToast('Book borrowed successfully!', 'success');
      setTimeout(() => { navigate('/books'); }, 2000);
    } catch (error) {
      console.error('Error borrowing book:', error);
      showToast('Failed to borrow book. Please try again.', 'error');
    }
  };

  if (isLoading) return <Loading />;
  if (isError || !book) {
    return <ErrorMessage message="Failed to load book details." onRetry={refetch} />;
  }

  return (
    <div>
      <BorrowForm
        book={book}
        onSubmit={handleBorrowBook}
        onCancel={() => navigate('/books')}
        isLoading={isBorrowing}
      />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default BorrowBook;