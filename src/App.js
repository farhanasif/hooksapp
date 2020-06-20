import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import NewBookForm from './components/NewBookForm';

function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <ThemeContextProvider>
      <div className="App">
          <AuthContextProvider>
            <Navbar />
            <BookContextProvider>
              <BookList />
              <NewBookForm />
            </BookContextProvider>
            <ThemeToggle />
          </AuthContextProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;