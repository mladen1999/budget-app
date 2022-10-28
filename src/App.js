import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="headerImage">
            <Header />
            <Balance />
          </div>
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
          
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;