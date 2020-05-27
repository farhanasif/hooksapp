import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const { dispatch } = useContext(BookContext);

  //console.log(books);

  const handleRemove = async(id) => { 
    const url = "http://localhost:8000/book/"+id;
    await fetch(url, {
        method: 'DELETE'
      }).then((response) => response.json())
      .then((json) => {
        Toast.fire({
          icon: 'success',
          title: 'Book removed successfully'
        })
        dispatch({ type: 'REMOVE_BOOK', id })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return books ? ( 
    <div className="book-list">
      <ul>
        {books.map(book => {
          return (
            <li 
              key={book.id} 
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