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
      if(action.data){
        return [...state, ...action.data];
      }
      else{
        return [];
      }
    default:
      return state;
  }
}