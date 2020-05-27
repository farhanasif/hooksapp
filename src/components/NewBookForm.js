import React, { useContext, useState } from 'react';
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

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await fetch('https://api-experiment-sqlite.glitch.me/book', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
        })
      }).then((response) => response.json())
      .then((json) => {
        Toast.fire({
          icon: 'success',
          title: 'Book added successfully'
        })
        const id = json.id;
        dispatch({ type: 'ADD_BOOK', book: { title, id}});
      })
      .catch((error) => {
        console.error(error);
    });
    
    setTitle('');
  }



  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="submit" value="add book" />
    </form>
  );
}
 
export default NewBookForm;