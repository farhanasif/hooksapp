import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const geturl = "http://localhost:8000/books";

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);
  
  useEffect(() => {
    console.log('----------useEffect-------------')
    async function fetchData(){
      await fetch(geturl)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        if(result.data.length > 0){
          const data = result.data;
          dispatch({type: "INIT", data});
        }
        else{
          return [];
        }
      });
    }
    fetchData();
  }, []);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;