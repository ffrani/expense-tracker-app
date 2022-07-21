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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onChangeFilter={filterYearHandler}
        />
        {props.items.map((expenses) => (
          <ExpenseItem
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
