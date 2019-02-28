import menuReducer from './menuReducer';

const reducer = (state, action) => {
       return {
           books: [],
           menuState: menuReducer(state, action)
       }

};

export default reducer;

