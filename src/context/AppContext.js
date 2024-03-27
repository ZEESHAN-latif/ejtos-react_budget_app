import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let budget = 0;
    switch (action.type) {
        case 'ADD_EXPENSE':
            let total_budget = 0;
            total_budget = state.expenses.reduce(
                (previousExp, currentExp) => {
                    return previousExp + currentExp.cost
                },0
            );
            total_budget = total_budget + action.payload.cost;
            action.type = "DONE";
            if(total_budget <= state.budget) {
                total_budget = 0;
                state.expenses.map((currentExp)=> {
                    if(currentExp.name === action.payload.name) {
                        currentExp.cost = action.payload.cost + currentExp.cost;
                    }
                    return currentExp
                });
                return {
                    ...state,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return {
                    ...state
                }
            }
            case 'RED_EXPENSE':
                const red_expenses = state.expenses.map((currentExp)=> {
                    if (currentExp.name === action.payload.name && currentExp.cost - action.payload.cost >= 0) {
                        currentExp.cost =  currentExp.cost - action.payload.cost;
                        budget = state.budget + action.payload.cost
                    }
                    return currentExp
                })
                action.type = "DONE";
                return {
                    ...state,
                    expenses: [...red_expenses],
                };
            case 'DELETE_EXPENSE':
            action.type = "DONE";
            state.expenses.map((currentExp)=> {
                if (currentExp.name === action.payload) {
                    budget = state.budget + currentExp.cost
                    currentExp.cost =  0;
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                budget
            };
            case 'SET_BUDGET':
                console.log('action.payload >= state.ExpenseTotal', action.payload >= state.ExpenseTotal);
                if (action.payload >= state.ExpenseTotal) {
                    return {
                        ...state,
                        budget: action.payload
                    };
                } else {
                    alert("You cannot reduce the budget value lower than the spending.");
                    return {
                        ...state,
                    };
                }
        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            };
            case 'CHG_DEPART':
            action.type = "DONE";
            state.selectedDepart = action.payload;
            return {
                ...state
            };
            case 'CHG_ALLOCATION_TYPE':
            action.type = "DONE";
            state.allocationType = action.payload;
            return {
                ...state
            };
            case 'CHANGE_ALLOCATION':
                console.log('object', action.payload);
                    action.type = "DONE";
                if(state.remainingAmnt >= Number(action.payload.cost)) {
                    state.expenses.map((currentExp)=> {
                        if(currentExp.name === action.payload.depart) {
                            currentExp.cost = action.payload.cost + currentExp.cost;
                        }
                        return currentExp
                    });
                    return {
                        ...state,
                    };
                } else {
                    alert(`The value cannot exceed remaining funds ${state.currency}${state.remainingAmnt}`);
                    return {
                        ...state
                    }
                }
        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    budget: 2000,
    remainingAmnt:0,
    ExpenseTotal:0,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currencies: [
        { name: "Dollar", symbol: '$' },
        { name: "Pound", symbol: '£' },
        { name: "Euro", symbol: '€' },
        { name: "Rupee", symbol: '₹' }
    ],
    currency: '£',
    currencyName: 'Pound',
    selectedDepart: '',
    allocationType: '',
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    if (state.expenses) {
            const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        state.remainingAmnt = state.budget - totalExpenses;
        state.ExpenseTotal = totalExpenses
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: state.remainingAmnt,
                dispatch,
                currency: state.currency,
                ExpenseTotal: state.ExpenseTotal,
                currencies: state.currencies,
                currencyName: state.currencyName,
                selectedDepart: state.selectedDepart,
                allocationType: state.allocationType,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
