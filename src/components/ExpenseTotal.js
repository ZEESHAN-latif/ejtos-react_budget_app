
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { ExpenseTotal, currency } = useContext(AppContext);
  return (
    <div className="alert alert-primary">
      <span>ExpenseTotal: {currency} {ExpenseTotal}</span>
    </div>
  );
};
export default ExpenseTotal;
