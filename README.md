# 📚 Library Management System

A modern, full-featured Library Management System built with React, Redux Toolkit, and TypeScript. This application provides a complete solution for managing books, tracking borrowing records, and maintaining library operations.

![Library Management System](https://img.shields.io/badge/Library-Management-blue?style=for-the-badge&logo=bookstack&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Features

### 📖 Book Management
- ✅ **Add New Books** - Complete book information with validation
- ✅ **Edit Books** - Update book details with real-time synchronization
- ✅ **Delete Books** - Safe deletion with confirmation dialogs
- ✅ **View Book Details** - Comprehensive book information display
- ✅ **Book Availability** - Real-time availability tracking

### 📊 Borrowing System
- ✅ **Borrow Books** - Intuitive borrowing interface with due dates
- ✅ **Quantity Management** - Track multiple copies of the same book
- ✅ **Due Date Tracking** - Automatic date validation and management
- ✅ **Borrow Summary** - Comprehensive borrowing statistics

### 🎨 User Experience
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Modern UI/UX** - Clean, professional interface
- ✅ **Real-time Updates** - Instant data synchronization
- ✅ **Error Handling** - Robust error management with user feedback
- ✅ **Loading States** - Smooth loading animations
- ✅ **Toast Notifications** - User-friendly success/error messages

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 18.x |
| **TypeScript** | Type Safety | 5.x |
| **Redux Toolkit** | State Management | 2.x |
| **RTK Query** | Data Fetching | 2.x |
| **React Router** | Navigation | 6.x |
| **Tailwind CSS** | Styling | 3.x |
| **Lucide React** | Icons | Latest |
| **SweetAlert2** | Modals & Alerts | Latest |

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bashgit
   git clone https://github.com/sndpbag/Library-Management-React.git
   cd Library-Management-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   REACT_APP_API_URL=https://library-management-system-orcin-five.vercel.app/api
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   ```
  http://localhost:5173/
   ```

## 📱 Application Structure

 

```text
src/
├── components/
│   ├── BookForm.tsx          # Book creation/editing form
│   ├── BorrowForm.tsx        # Book borrowing form
│   ├── BooksList.tsx         # Books listing with table
│   ├── BookDetails.tsx       # Individual book details
│   ├── BorrowSummary.tsx     # Borrowing statistics
│   ├── Loading.tsx           # Loading spinner component
│   ├── ErrorMessage.tsx      # Error display component
│   ├── Toast.tsx             # Notification component
│   ├── Navbar.tsx            # Navigation bar
│   └── Footer.tsx            # Footer component
├── store/
│   ├── api.ts                # RTK Query API slice
│   └── store.ts              # Redux store configuration
├── types/
│   └── index.ts              # TypeScript type definitions
├── utils/
│   └── constants.ts          # Application constants
└── App.tsx                   # Main application component

## 🔧 API Integration

This application integrates with a RESTful API hosted on Vercel:

**Base URL:** `https://library-management-system-orcin-five.vercel.app/api`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/books` | Fetch all books |
| `GET` | `/books/:id` | Fetch single book |
| `POST` | `/books` | Create new book |
| `PUT` | `/books/:id` | Update book |
| `DELETE` | `/books/:id` | Delete book |
| `POST` | `/borrow` | Borrow book |
| `GET` | `/borrow` | Get borrow summary |
| `GET` | `/borrow/records` | Get borrow records |

## 🎯 Core Features Overview

### 📚 Book Management
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Data Validation**: Form validation with TypeScript type checking
- **Real-time Updates**: Instant UI updates using RTK Query
- **Genre Classification**: Organized book categorization

### 🔄 State Management
- **Redux Toolkit**: Centralized state management
- **RTK Query**: Efficient data fetching and caching
- **Optimistic Updates**: Immediate UI feedback
- **Error Handling**: Comprehensive error state management

### 🎨 UI/UX Design
- **Responsive Layout**: Mobile-first design approach
- **Interactive Elements**: Hover effects and animations
- **Loading States**: Skeleton screens and spinners
- **Toast Notifications**: User feedback system

## 🔒 Data Models

### Book Model
```typescript
interface Book {
  _id: string;
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### Borrow Record Model
```typescript
interface BorrowRecord {
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}
```

## 🚦 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173/) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**

## 🎨 Styling & Theming

This project uses **Tailwind CSS** for styling with the following design principles:

- **Consistent Color Palette**: Blue primary, gray neutrals
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle elevation for depth
- **Animations**: Smooth transitions and hover effects

## 🧪 Testing

The application includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy the build folder to Netlify
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📋 Roadmap

- [ ] **User Authentication** - Add login/logout functionality
- [ ] **User Roles** - Implement admin/user role system
- [ ] **Return Books** - Add book return functionality
- [ ] **Search & Filter** - Advanced search capabilities
- [ ] **Email Notifications** - Due date reminders
- [ ] **Reports & Analytics** - Library usage statistics
- [ ] **Mobile App** - React Native version
- [ ] **Dark Mode** - Theme switching capability

## 🐛 Known Issues

- [ ] Toast notifications may overlap on rapid actions
- [ ] Date picker styling needs browser compatibility improvements
- [ ] Large dataset performance optimization needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/sndpbag)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Redux Team** - For excellent state management
- **Tailwind CSS** - For beautiful, utility-first CSS
- **Lucide** - For beautiful icons
- **Vercel** - For hosting the backend API

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/sndpbag/Library-Management-React/issues) page
2. Create a new issue with detailed description
3. Contact: your.email@example.com

## 🌟 Show Your Support

If this project helped you, please consider:

- ⭐ **Star this repository**
- 🍴 **Fork the project**
- 🐛 **Report bugs**
- 💡 **Suggest new features**

---

<div align="center">
  <p>Made with ❤️ by <strong>Your Name</strong></p>
  <p>
    <a href="https://github.com/sndpbag">GitHub</a> •
    <a href="https://linkedin.com/in/sndpbag">LinkedIn</a> •
    <a href="https://twitter.com/sndpbag">Twitter</a>
  </p>
</div>

---

**⚡ Happy Coding!** 🚀