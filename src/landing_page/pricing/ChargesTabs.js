import "../../css/ChargesTabs.css";
import { useState } from "react";

function ChargesTabs() {
  const [activeTab, setActiveTab] = useState("Equity");

  const renderTable = () => {
    switch (activeTab) {
      case "Equity":
        return (
          <table className="charges-table">
            <thead>
              <tr>
                <th> </th>
                <th>Equity Delivery</th>
                <th>Equity Intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order</td>
                <td>0.03% or Rs. 20/executed order</td>
                <td>Flat Rs. 20 per order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell side</td>
                <td>0.02% on sell side</td>
                <td>
                  0.125% on intrinsic value (exercised)
                  <br />
                  0.1% on sell side (premium)
                </td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>
                  NSE: 0.00297%
                  <br />
                  BSE: 0.00375%
                </td>
                <td>Same as Delivery</td>
                <td>
                  NSE: 0.00173%
                  <br />
                  BSE: 0%
                </td>
                <td>
                  NSE: 0.03503%
                  <br />
                  BSE: 0.0325%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>0.015% or ₹1500/crore (buy)</td>
                <td>0.003% or ₹300/crore (buy)</td>
                <td>0.002% or ₹200/crore (buy)</td>
                <td>0.003% or ₹300/crore (buy)</td>
              </tr>
            </tbody>
          </table>
        );
      case "Currency":
        return (
          <table className="charges-table">
            <thead>
              <tr>
                <th> </th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹20 per executed order</td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>₹90 / crore</td>
                <td>₹4000 / crore</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>Nil</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>₹10 / crore on buy side</td>
                <td>₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );
      case "Commodity":
        return (
          <table className="charges-table">
            <thead>
              <tr>
                <th> </th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>₹20 or 0.03% per order</td>
                <td>₹20 per executed order</td>
              </tr>
              <tr>
                <td>CTT</td>
                <td>0.01% on sell side (non-agri)</td>
                <td>0.05% on sell side (premium)</td>
              </tr>
              <tr>
                <td>Transaction Charges</td>
                <td>₹290 / crore</td>
                <td>₹4600 / crore</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI Charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp Charges</td>
                <td>₹200 / crore (futures), ₹300 / crore (options)</td>
                <td>₹200 / crore (futures), ₹300 / crore (options)</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="tab-buttons">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderTable()}
    </div>
  );
}

export default ChargesTabs;
