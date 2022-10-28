import React, { useState, useContext } from "react";
import { render } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };


  
    const getInitialState = () => {
      const value = '{selects}';
      return value;
    };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [selects, setSelects]=useState();
  
  return (
    <div className="space">
      <div className="choose incomeTextH">     
      <select value={selects} onChange={e=>setSelects(e.target.value)}>
        
        <option value="onChangeExpense">-</option>
        <option value="onSubmitIncome">+</option>
      </select>
         
        {
            
            selects=='onSubmitIncome' ? <form onSubmit={onSubmitIncome}>
            
              <input
                className="incomeTextH"
                type="text"
                name="incomeText"
                value={incomeText}
                placeholder="Add description"
                autoComplete="off"
                onChange={onChangeIncome}
              />
              <input
                className="incomeTextH1"
                type="number"
                name="incomeAmount"
                value={incomeAmount}
                placeholder="Value"
                autoComplete="off"
                onChange={onChangeIncome}
              />
              <input id="submitBtnP" className="incomeTextH" type="submit" value="✔" />
            
          </form> : <form onSubmit={onSubmitExpense}>
        <div className="">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add description"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Value"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input id="submitBtnM" type="submit" value="✔" />
        </div>
      </form>
        } 
    
    </div>

    </div>

  );
};

export default AddTransaction;