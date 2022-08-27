import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "../Styles/Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onChangeFilter={filterYearHandler}
        />
        {filteredExpense.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
