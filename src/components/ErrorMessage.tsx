 
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center gap-2">
    <AlertCircle className="text-red-500" size={20} />
    <div className="flex-1">
      <p className="text-red-700">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-red-600 hover:text-red-800 underline mt-1"
        >
          Try Again
        </button>
      )}
    </div>
  </div>
);

export default ErrorMessage;