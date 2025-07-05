// components/BorrowForm.tsx
import React, { useState } from 'react';
import { Book, BorrowBookData } from '../types';

interface BorrowFormProps {
  book: Book;
  onSubmit: (data: BorrowBookData) => void;
  onCancel: () => void;
  isLoading: boolean;
}

const BorrowForm: React.FC<BorrowFormProps> = ({ 
  book, 
  onSubmit, 
  onCancel, 
  isLoading 
}) => {
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      book: book._id,
      quantity,
      dueDate: new Date(dueDate).toISOString(),
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Borrow Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Book</label>
          <input
            type="text"
            value={`${book.title} by ${book.author}`}
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max={book.copies}
            required
          />
          <p className="text-sm text-gray-600 mt-1">Available copies: {book.copies}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex gap-2 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            {isLoading ? 'Borrowing...' : 'Borrow Book'}
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

export default BorrowForm;