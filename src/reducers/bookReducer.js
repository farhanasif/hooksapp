import {v1 as uuid} from 'uuid';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      console.log(state);
      return [...state, {
          title: action.book.title,
          id: uuid()
        }
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    case 'INIT':
      return [...state, ...action.data];
    default:
      return state;
  }
} 