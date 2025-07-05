import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBookMutation } from '../store/api';
// import { CreateBookData } from '../types';
import BookForm from './BookForm';
import Toast from './Toast';
import type { CreateBookData } from '../types';

const CreateBook = () => {
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCreateBook = async (data: CreateBookData) => {
    try {
      await createBook(data).unwrap();
      showToast('Book created successfully!', 'success');
      setTimeout(() => { navigate('/books') }, 2000);
    } catch (error) {
      console.error('Error creating book:', error);
      showToast('Failed to create book. Please try again.', 'error');
    }
  };

  return (
    <div>
      <BookForm
        onSubmit={handleCreateBook}
        onCancel={() => navigate('/books')}
        isLoading={isLoading}
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

export default CreateBook;