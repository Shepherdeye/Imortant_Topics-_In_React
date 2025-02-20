import { createContext, useReducer, useContext } from "react";
import reducer from "./Reducer";
import { initialStatus } from "./Reducer";

const StoreContext = createContext();

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialStatus);

    // Calculate Total Consumption (Total Expenses)
    const consumption = () => {
        if (!state.expensis || !Array.isArray(state.expensis)) return 0;
        return state.expensis.reduce((total, item) => total + item.cost, 0);
    };

    // Calculate Remaining Budget
    const remaining = () => {
        return state.budget - consumption();
    };



    return (
        <StoreContext.Provider value={{ state, dispatch, consumption, remaining }}>
            {children}
        </StoreContext.Provider >
    );
}

export default ContextProvider;

// Custom Hook for Easy Access
export const useStore = () => {
    return useContext(StoreContext);
};
