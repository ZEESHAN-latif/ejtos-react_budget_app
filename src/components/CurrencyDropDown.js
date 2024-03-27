import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const CurrencyDropDown = () => {
  const { currencies, currency, currencyName, dispatch } = useContext(AppContext);

  const changeCurrency = (event) => {
    const newCurrency = event.target.value
    console.log('newCurrency', newCurrency);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: newCurrency
    });
};
  return (
    <div>
        <select className="alert bg-info className=''" style={{height:'100%', width:200}} onChange={changeCurrency} value={currency}>
          <option value="" disabled selected >
            <span className=''>Currency {`(${currency} ${currencyName})`}</span>
          </option>
          {currencies.map((item, i) => {
            return <option className='' key={i}  value={item.symbol}>{item.symbol} {item.name}</option>
          })}
        </select>
    </div>
  )
}

export default CurrencyDropDown