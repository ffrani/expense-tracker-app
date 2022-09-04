import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "../Styles/Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const filteredTotalExpenses = filteredExpenses.reduce(
    (amount, currentAmount) => {
      return (amount += currentAmount.amount);
    },
    0
  );

  console.log(filteredTotalExpenses);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onChangeFilter={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        <div className="expenses-total">
          Total: ${filteredTotalExpenses.toFixed(2)}
        </div>
      </Card>
    </li>
  );
};

export default Expenses;
