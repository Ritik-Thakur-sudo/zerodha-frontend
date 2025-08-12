import "../../css/PricingPage.css";

function ServiceCharge() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="fs-3 mb-3">Charges for account opening</h2>
          <div className="table-responsive">
            <table className="table service-table">
              <thead>
                <tr>
                  <td>Type of account</td>
                  <td>Charges</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td>
                    <span class="badge text-bg-success fs-6 ps-3 pe-3">
                      Free
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Offline account</td>
                  <td>
                    <span class="badge text-bg-success fs-6 ps-3 pe-3">
                      Free
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="fs-3 mt-5 mb-3">
            Charges for Optional Value-Added Services
          </h2>
          <div className="table-responsive">
            <table className="table service-table">
              <thead>
                <tr>
                  <td>Service</td>
                  <td>Billing Frequency</td>
                  <td>Charges</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Annual</td>
                  <td>Free: 0 | Pro: 249 / 2399</td>
                </tr>
                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Historical: 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCharge;
