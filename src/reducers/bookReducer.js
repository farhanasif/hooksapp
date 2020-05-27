import {v1 as uuid} from 'uuid';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      //calling a ajax request
      fetch('https://api-experiment-sqlite.glitch.me/book', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: action.book.title,
        })
      }).then((response) => response.json())
      .then((json) => {
        console.log(json.id)
        return [...state, {
            title: action.book.title,
            id: json.id
          }
        ]
        // json.movies;
      })
      .catch((error) => {
        console.error(error);
        return state;
      });
      break;
    case 'REMOVE_BOOK':
      const url = "https://api-experiment-sqlite.glitch.me/book/"+action.id;
      fetch(url, {
        method: 'DELETE'
      }).then((response) => response.json())
      .then((json) => {
        console.log(state)
        return state.filter(book => book.id !== action.id);
      })
      .catch((error) => {
        console.error(error);
        return state;
      });
      break;
    case 'INIT':
      console.log('========INIT CALL:=============')
      //console.log(action);
      if(action.data){
        return [...state, ...action.data];
      }
      else{
        return [];
      }
    case 'LOAD':
      console.log('-------------calling loading function----------');

      const geturl = "https://api-experiment-sqlite.glitch.me/books";
      fetch(geturl)
      .then(res => res.json())
      .then((result) => {
        console.log('calling loading function');
        //console.log(result.data);
        if(result.data.length > 0){
          const data = result.data;
          return data;
          //return result.data;
        }
        else{
          return [];
        }
      });
    default:
      return state;
  }
}

// async function getdata(){
//   console.log('calling loading function');
//   const geturl = "https://api-experiment-sqlite.glitch.me/books";
//   await fetch(geturl)
//     .then(res => res.json())
//     .then((result) => {
//       console.log('calling loading function');
//       //console.log(result.data);
//       if(result.data.length > 0){
//         const data = result.data;
//         return data;
//         //return result.data;
//       }
//       else{
//         return [];
//       }
//     });
// }