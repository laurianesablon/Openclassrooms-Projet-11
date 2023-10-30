import { useState } from "react";

export default function Transactions({
  date,
  description,
  amount,
  balance,
  transactionType,
  category,
  note,
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="transactions_table">
      <div className="c1">
        <p>{date}</p>
        {toggle && (
          <>
            <p>Transaction type</p>
            <p>Category</p>
            <p>Note</p>
          </>
        )}
      </div>
      <div className="c2">
        <p>{description}</p>
        {toggle &&
        <>
          <p>{transactionType}</p>
          <p>{category} <i className="fa-solid fa-pencil"></i></p>
          <p>{note} <i className="fa-solid fa-pencil"></i></p>
        </>
        }
        
      </div>
      <div className="c3">
        <p>{amount}</p>
      </div>
      <div className="c4">
        <p>{balance}</p>
      </div>
      <i className="fa-solid fa-chevron-down white" onClick={() => setToggle(!toggle)}></i>
    </div>
  );
}
