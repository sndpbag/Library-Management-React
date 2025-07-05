// components/BookForm.tsx
import React, { useState } from 'react';
import { Genre, type Book, type CreateBookData } from '../types';
// import { Book, CreateBookData, Genre } from '../types';

interface BookFormProps {
  book?: Book;
  onSubmit: (data: CreateBookData) => void;
  onCancel: () => void;
  isLoading: boolean;
}

const BookForm: React.FC<BookFormProps> = ({ 
  book, 
  onSubmit, 
  onCancel, 
  isLoading 
}) => {
  const [formData, setFormData] = useState<CreateBookData>({
    title: book?.title || '',
    author: book?.author || '',
    genre: book?.genre || Genre.FICTION,
    isbn: book?.isbn || '',
    description: book?.description || '',
    copies: book?.copies || 1,
    available: book?.available ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">{book ? 'Edit Book' : 'Add New Book'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
          <select
            value={formData.genre}
            onChange={(e) => setFormData({ ...formData, genre: e.target.value as Genre })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.values(Genre).map((genre) => (
              <option key={genre} value={genre}>
                {genre.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
          <input
            type="text"
            value={formData.isbn}
            onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Copies</label>
          <input
            type="number"
            value={formData.copies}
            onChange={(e) => setFormData({ ...formData, copies: parseInt(e.target.value) || 0 })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.available}
            onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
            className="rounded"
          />
          <label className="text-sm font-medium text-gray-700">Available</label>
        </div>
        <div className="flex gap-2 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? 'Saving...' : book ? 'Update Book' : 'Create Book'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;