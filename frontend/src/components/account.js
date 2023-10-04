import Transactions from "../components/transactions";
import { useState } from "react";
function Account({ accountTitle, accountAmount, accountAmountDescription }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{accountTitle}</h3>
          <p className="account-amount">{accountAmount}</p>
          <p className="account-amount-description">
            {accountAmountDescription}
          </p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={() => setToggle(!toggle)}>View transactions</button>
        </div>
      </section>
      <section className="transaction">
        {toggle && (
          <>
            <div className="transactions_table_title">
              <p>Date</p>
              <p>Description</p>
              <p>Amount</p>
              <p>Balance</p>
            </div>

            <Transactions
              date="27/02/2021"
              description="Golden Sun Bakery"
              amount="$8.00"
              balance="$298.00"
              transactionType="Electronic"
              category="Food"
              note="lorem ipsum"
            />
            <Transactions
              date="27/02/2021"
              description="Golden Sun Bakery"
              amount="$8.00"
              balance="$298.00"
              transactionType="Electronic"
              category="Food"
              note="lorem ipsum"
            />
      
          
          </>
        )}
      </section>
    </>
  );
}

export default Account;
