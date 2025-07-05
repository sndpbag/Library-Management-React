

 
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';
import BorrowBook from './components/BorrowBook';
import BorrowSummary from './components/BorrowSummary';
 
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/books" element={<BooksList />} />
              <Route path="/create-book" element={<CreateBook />} />
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/edit-book/:id" element={<EditBook />} />
              <Route path="/borrow/:bookId" element={<BorrowBook />} />
              <Route path="/borrow-summary" element={<BorrowSummary />} />
              <Route path="*" element={<Navigate to="/books" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;