import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    
                                                                                      Math.round((totalExpenses/totalIncome)*100)
  return (
    <div className="balance">
      <h3>{(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3 className="inc">Income<span className="incomeSpan">+{totalIncome}</span></h3>
        </div>
        <div className="minus">
          <h3 className="exp">Expenses<span className="expensesSpan">-{totalExpenses}</span><span className="percent">{ totalIncome<=1 || totalExpenses <= 1 ? <span>0</span> : Math.round((totalExpenses/totalIncome)*100)}%</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;