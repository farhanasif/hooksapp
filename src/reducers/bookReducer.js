
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
          title: action.book.title,
          id: action.book.id
        }
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
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
        console.log('<<<<<<<<<<<<<<<<<calling loading function');
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