import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const geturl = "https://api-experiment-sqlite.glitch.me/books";

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    fetch(geturl)
    .then(res => res.json())
    .then((result) => {
      console.log(result.data);
      if(result.data.length > 0){
        const data = result.data;
        dispatch({type: "INIT", data});
        //return result.data;
      }
      else{
        return [];
      }
    });
    // const localData = localStorage.getItem('books');
    // return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    console.log('call----------')
    console.log(books);
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;