import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const { dispatch } = useContext(BookContext);

  console.log(books);

  const handleRemove = async(id) => { 
    const url = "https://api-experiment-sqlite.glitch.me/book/"+id;
    await fetch(url, {
        method: 'DELETE'
      }).then((response) => response.json())
      .then((json) => {
        console.log('remove complete')
        console.log(json)
        dispatch({ type: 'REMOVE_BOOK', id })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return books ? ( 
    <div className="book-list" //style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li 
              key={book.id} 
              //style={{ background: theme.ui }}
              className="title"
              onClick={() => handleRemove(book.id)}
            >{book.title}</li>
          );
        })}
      </ul>
    </div>
  ): (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        No books to read. Hello free time :)
    </div>
  );
}
 
export default BookList;