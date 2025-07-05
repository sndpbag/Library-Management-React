import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Book, Edit, Trash2, Plus, BookOpen } from 'lucide-react';
import Swal from 'sweetalert2';
import { useGetBooksQuery, useDeleteBookMutation } from '../store/api';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import Toast from './Toast';

const BooksList = () => {
  const navigate = useNavigate();
  const { 
    data: books = [], 
    isLoading: isBooksLoading, 
    isError: isBooksError,
    refetch: refetchBooks
  } = useGetBooksQuery();
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleDeleteBook = async (id: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgba(34, 211, 238, 0.7)', // cyan color
      cancelButtonColor: 'rgba(248, 113, 113, 0.8)', // rose color
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      background: 'rgba(255, 255, 255, .15)',
      color: '#fff',
      backdrop: `
        rgba(0, 0, 0, 0.8)
        url("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWx6eGl5ODVvM3V1ODhrbzY5YnpmeXNlZjNvNjhhNHFxMzAwbDU0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U7Mqz6lKPjlQZEAWJE/giphy.gif")
        left top
        no-repeat
      `,
      customClass: {
        popup: 'glass-effect'
      }
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        showToast('Book deleted successfully!', 'success');
      } catch (error) {
        console.error('Delete error:', error);
        showToast('Failed to delete book. Please try again.', 'error');
      }
    }
  };

  if (isBooksLoading) return <Loading />;
  
  if (isBooksError) {
    return (
      <ErrorMessage 
        message="Failed to load books. Please check your internet connection."
        onRetry={refetchBooks}
      />
    );
  }

  if (!Array.isArray(books) || books.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-md">
        <Book size={48} className="mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">No books found. Add your first book!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">All Books</h2>
        <Link
          to="/create-book"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
        >
          <Plus size={20} />
          Add New Book
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copies</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {books.map((book) => (
                <tr key={book._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/books/${book._id}`} className="text-sm font-medium text-gray-900">{book.title}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{book.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{book.genre.replace('_', ' ')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{book.isbn}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{book.copies}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available ? 'Available' : 'Unavailable'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <Link
                        to={`/edit-book/${book._id}`}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDeleteBook(book._id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete"
                        disabled={isDeleting}
                      >
                        <Trash2 size={16} />
                      </button>
                      <Link
                        to={`/borrow/${book._id}`}
                        className={`${
                          book.available && book.copies > 0
                            ? 'text-green-600 hover:text-green-900'
                            : 'text-gray-400 cursor-not-allowed'
                        }`}
                        title="Borrow"
                      >
                        <BookOpen size={16} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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

export default BooksList;