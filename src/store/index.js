import { createStore } from "redux";

const ar = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
let initialState = { arrRedux: ar };
const tabularDataReducer = (state = initialState, action) => {
    if (action.type === 'add') {
        let newAr = [...state.arrRedux, action.inputs];
        state = { ...state, arrRedux: newAr };
        localStorage.setItem('data', JSON.stringify(newAr));
    }
    if (action.type === 'set') {
        state = { ...state, arrRedux: action.newArr };
        localStorage.setItem('data', JSON.stringify(action.newArr));
    }
    return state;
}

const store = createStore(tabularDataReducer);
export default store;