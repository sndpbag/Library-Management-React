// components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Book size={24} />
        <h1 className="text-xl font-bold">Library Management</h1>
      </div>
      <div className="flex gap-4">
        <Link
          to="/books"
          className="px-4 py-2 rounded-md hover:bg-blue-700"
        >
          All Books
        </Link>
        <Link
          to="/create-book"
          className="px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Book
        </Link>
        <Link
          to="/borrow-summary"
          className="px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Borrow Summary
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;