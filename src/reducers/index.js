import menuReducer from './menuReducer';

const reducer = (state, action) => {
       return {
           menuState: menuReducer(state, action)
       }

};

export default reducer;

