import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const handleBudgetChange = (event) => {
    // setNewBudget(event.target.value);
    dispatch({
        type: 'SET_BUDGET',
        payload:Number( event.target.value)
  })
  };

  return (
    <div className="alert alert-secondary d-flex gap-1">
      <span>Budget: {currency} {budget}</span>
      <input
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
