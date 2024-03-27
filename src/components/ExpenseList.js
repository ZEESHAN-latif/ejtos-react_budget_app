import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const ExpenseList = () => {
  const { expenses, currency, dispatch } = useContext(AppContext);


  const deleteExpense = (expenseId) => {
    dispatch({
        type: 'DELETE_EXPENSE',
        payload: expenseId
    });
};

const reduceExpense = (expenseData) => {
    dispatch({
        type: 'RED_EXPENSE',
        payload: expenseData // Assuming expenseData is an object with 'name' and 'cost' properties
    });
};

const addExpense = (expenseData) => {
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expenseData // Assuming expenseData is an object with 'name' and 'cost' properties
    });
};


  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Department</th>
            <th scope="col">Allocated Budget</th>
            <th scope="col">Increase by 10</th>
            <th scope="col">Decrease by 10</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, i) => {
            return (
              <tr key={i}>
                <td className="fs-3">{item.name}</td>
                <td className="fs-3">{currency} {item.cost}</td>
                <td><IoMdAddCircle style={{fontSize:22, fill:'light-green', cursor:'pointer'}} onClick={() =>addExpense({name:item.name , cost:10})}/> </td>
                <td><FaMinusCircle style={{fontSize:22, fill:'red', cursor:'pointer'}} onClick={() => reduceExpense({name:item.name , cost:10})}/> </td>
                <td><MdOutlineCancel style={{fontSize:18, cursor:'pointer'}} onClick={() => deleteExpense(item.id)}/> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
