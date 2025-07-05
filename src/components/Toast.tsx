
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => (
  <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center gap-2 ${
    type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
  }`}>
    {type === 'success' ? <Check size={20} /> : <X size={20} />}
    <span>{message}</span>
    <button onClick={onClose} className="ml-2">
      <X size={16} />
    </button>
  </div>
);

export default Toast;