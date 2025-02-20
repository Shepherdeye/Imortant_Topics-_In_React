import * as actions from "./Actions";

export const initialStatus = {
    cakesNumber: 10,
    icecreamNumber: 20,
    budget: 6000,
    expensis: localStorage.getItem("mybudget") ? JSON.parse(localStorage.getItem("mybudget")) : []
}


// this the reducer
const reducer = (state, action) => {
    switch (action.type) {
        // cakes
        case actions.INCREMENT_NUMBER:
            return { ...state, cakesNumber: state.cakesNumber + 1 };
        case actions.DECREMENT_NUMBER:
            return { ...state, cakesNumber: state.cakesNumber - 1 };
        // icecream
        case actions.INCREMENT_NUMBER_ICECREAM:
            return { ...state, icecreamNumber: state.icecreamNumber + 1 };
        case actions.DECREMENT_NUMBER_ICECREAM:
            return { ...state, icecreamNumber: state.icecreamNumber - 1 };
        //  budget
        case actions.BUDGET_ADD_EXPENSIS:
            return {
                ...state,
                expensis: [...state.expensis, action.payload]
            }
        case actions.BUDGET_REMOVE_EXPENSIS:
            return {
                ...state,
                expensis: state.expensis.filter((expens) => expens.id !== action.payload)
            }
        default:
            return state;
    }

}
export default reducer