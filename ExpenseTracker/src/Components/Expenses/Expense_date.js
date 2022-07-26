import React from "react";
import "./Expense_date.css";

function Expense_date(props) {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const day = props.Date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.Date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
}

export default Expense_date;
