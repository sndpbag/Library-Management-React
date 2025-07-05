import React from 'react';
import { BookOpen } from 'lucide-react';
import { useGetBorrowSummaryQuery } from '../store/api';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

const BorrowSummary = () => {
  const { 
    data: borrowSummary = [], 
    isLoading: isSummaryLoading, 
    isError: isSummaryError,
    refetch: refetchSummary
  } = useGetBorrowSummaryQuery();

  if (isSummaryLoading) return <Loading />;
  
  if (isSummaryError) {
    return (
      <ErrorMessage 
        message="Failed to load borrow summary. Please check your internet connection."
        onRetry={refetchSummary}
      />
    );
  }

  if (borrowSummary.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-md">
        <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">No borrow records found.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Borrow Summary</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Book Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ISBN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Quantity Borrowed
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {borrowSummary.map((item, index) => (
                <tr key={item._id || `summary-${index}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.book.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.book.isbn}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.totalQuantity}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BorrowSummary;