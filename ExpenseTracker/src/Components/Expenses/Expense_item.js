import React from "react";
import Card from "../UI/Card";
import Expense_date from "./Expense_date";
import "./Expense_item.css";

function Expense_item(props) {
  return (
    <Card className="expense-item">
      <Expense_date Date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
}

export default Expense_item;
