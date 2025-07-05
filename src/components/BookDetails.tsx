
import { useParams, Link } from 'react-router-dom';
import { Edit, BookOpen } from 'lucide-react';
import { useGetBookQuery } from '../store/api';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

const BookDetails = () => {
  const { id } = useParams();
  const { 
    data: book, 
    isLoading, 
    isError,
    refetch 
  } = useGetBookQuery(id!);

  if (isLoading) return <Loading />;
  if (isError || !book) {
    return <ErrorMessage message="Failed to load book details." onRetry={refetch} />;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{book.title}</h2>
      <div className="space-y-4">
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre.replace('_', ' ')}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Copies:</strong> {book.copies}</p>
        <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
        {book.description && <p><strong>Description:</strong> {book.description}</p>}
        <div className="flex gap-4 mt-6">
          <Link
            to={`/edit-book/${book._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
          >
            <Edit size={20} />
            Edit Book
          </Link>
          <Link
            to={`/borrow/${book._id}`}
            className={`bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 ${
              !book.available || book.copies === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
            }`}
          >
            <BookOpen size={20} />
            Borrow Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;