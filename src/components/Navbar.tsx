
import { Link } from 'react-router-dom';
import { Book, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <Book size={24} />
          <h1 className="text-xl font-bold">Library Management</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/books"
            className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            All Books
          </Link>
          <Link
            to="/create-book"
            className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Borrow Summary
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-blue-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-blue-500">
          <div className="flex flex-col gap-2 pt-4">
            <Link
              to="/books"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Books
            </Link>
            <Link
              to="/create-book"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Book
            </Link>
            <Link
              to="/borrow-summary"
              className="px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Borrow Summary
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;