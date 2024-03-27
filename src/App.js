import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import AllocationForm from "./components/AllocationForm";
import CurrencyDropDown from "./components/CurrencyDropDown";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div class="col-sm">
            <Budget />
          </div>
          <div class="col-sm">
            <Remaining />
          </div>
          <div class="col-sm">
            <ExpenseTotal />
          </div>
          <div class="col-sm">
            <CurrencyDropDown />
          </div>
          
        </div>
          <div className="row mt-3">
            <ExpenseList />
          </div>
          <div className="row mt-3">
            <h1 className="mt-3">Change Allocations</h1>
          </div>
          <div className="row mt-3">
            <div className="col-md"><ExpenseItem /></div>
            <div className="col-md"><AllocationForm /></div>
            
          </div>
      </div>
    </AppProvider>
  );
};
export default App;
