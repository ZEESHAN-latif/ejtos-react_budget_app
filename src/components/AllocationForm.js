
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { currency, selectedDepart, allocationType, dispatch } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(0);
    const handleSave = () => {
        const payload = {
            depart:selectedDepart,
            allocationType,
            cost:Number(inputValue)
        };
        dispatch({
            type:"CHANGE_ALLOCATION",
            payload:payload
        })
    }
    
  return (
    <div className='d-flex align-items-center gap-2'>
        <span>{currency}</span>
        <input className='p-1' onChange={(e) => setInputValue(e.target.value)} type='number'/>
        <button className='btn btn-primary' style={{width:100}} type='button' onClick={handleSave}>Save</button>
    </div>
  )
}

export default AllocationForm