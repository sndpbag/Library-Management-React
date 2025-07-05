import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookQuery, useUpdateBookMutation } from '../store/api';
// import { CreateBookData } from '../types';
import BookForm from './BookForm';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import Toast from './Toast';
import type { CreateBookData } from '../types';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    data: book, 
    isLoading, 
    isError,
    refetch 
  } = useGetBookQuery(id!);
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdateBook = async (data: CreateBookData) => {
    try {
      await updateBook({ id: id!, data }).unwrap();
      showToast('Book updated successfully!', 'success');
      setTimeout(() => { navigate('/books'); }, 2000);
    } catch (error) {
      console.error('Error updating book:', error);
      showToast('Failed to update book. Please try again.', 'error');
    }
  };

  if (isLoading) return <Loading />;
  if (isError || !book) {
    return <ErrorMessage message="Failed to load book details." onRetry={refetch} />;
  }

  return (
    <div>
      <BookForm
        book={book}
        onSubmit={handleUpdateBook}
        onCancel={() => navigate('/books')}
        isLoading={isUpdating}
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

export default EditBook;