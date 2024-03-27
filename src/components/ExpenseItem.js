import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = () => {
  const { expenses, selectedDepart, allocationType, dispatch } =
    useContext(AppContext);

  const changeDepart = (event) => {
    const newDepart = event.target.value;
    dispatch({
      type: "CHG_DEPART",
      payload: newDepart,
    });
  };

  const changeType = (event) => {
    const newType = event.target.value;
    dispatch({
      type: "CHG_ALLOCATION_TYPE",
      payload: newType,
    });
  };
  ;

  return (
    <div className="d-flex gap-2">
      <div className="bg-secondary d-flex justify-content-between align-items-center" style={{gap:8}}>
        <span className="fs-4">Department</span>
        <select className="p-2" onChange={changeDepart} value={selectedDepart}>
          <option value="" disabled selected>
            Choose...
          </option>
          {expenses.map((item, i) => {
            return (
              <option key={i} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bg-secondary d-flex align-items-center  gap-1">
        <span className="fs-4">Allocation</span>
        <select className="p-2" onChange={changeType} value={allocationType}>
          <option value="" disabled selected>
            Select
          </option>
          <option value={"Add"}>{"Add"}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseItem;
