import "../../css/SupportPage.css";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5">
        <h2 className="fs-4 mb-3 fw-normal fs">
          To create a ticket, select a relevant topic
        </h2>
        <div className="col-4 p-4">
          <a className="text-decoration-none" href="#">
            <h4 className="fs-5">
              <i class="fa fa-plus-circle fs-5 mx-2" aria-hidden="true"></i>
              Account Opening
            </h4>
          </a>
          <div className="p-2 ms-4 support-link">
            <a href="#">Resident individual</a>
            <a href="#">Minor</a>
            <a href="#">Non Resident Indian (NRI)</a>
            <a href="#">Company, Partnership, HUF and LLP</a>
            <a href="#">Glossary</a>
          </div>
        </div>
        <div className="col-4 p-4">
          <a className="text-decoration-none" href="#">
            <h4 className="fs-5">
              <i class="fa fa-user fs-5 mx-2" aria-hidden="true"></i>
              Your Zerodha Account
            </h4>
          </a>
          <div className="p-2 ms-4 support-link">
            <a href="#">Your Profile</a>
            <a href="#">Account modification</a>
            <a href="#">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <a href="#">Nomination</a>
            <a href="#">Transfer and conversion of securities</a>
          </div>
        </div>
        <div className="col-4 p-4">
          <a className="text-decoration-none" href="#">
            <h4 className="fs-5">
              <i class="fa fa-bar-chart fs-5 mx-2" aria-hidden="true"></i>
              Kite
            </h4>
          </a>
          <div className="p-2 ms-4 support-link">
            <a href="#">IPO</a>
            <a href="#">Trading FAQs</a>
            <a href="#">Margin Trading Facility (MTF) and Margins</a>
            <a href="#">Charts and orders</a>
            <a href="#">Alerts and Nudges</a>
            <a href="#">General</a>
          </div>
        </div>
        <div className="col-4 p-4">
          <a className="text-decoration-none" href="#">
            <h4 className="fs-5">
              <i class="fa fa-credit-card fs-5 mx-2" aria-hidden="true"></i>
              Funds
            </h4>
          </a>
          <div className="p-2 ms-4 support-link">
            <a href="#">Add money</a>
            <a href="#">Withdraw money</a>
            <a href="#">Add bank accounts</a>
            <a href="#">eMandates</a>
          </div>
        </div>
        <div className="col-4 p-4">
          <a className="text-decoration-none" href="#">
            <h4 className="fs-5">
              <i class="fa fa-circle-o-notch fs-5 mx-2" aria-hidden="true"></i>
              Console
            </h4>
            <div className="p-2 ms-4 support-link">
              <a href="#">Portfolio</a>
              <a href="#">Corporate actions</a>
              <a href="#">Funds statement</a>
              <a href="#">Reports</a>
              <a href="#">Reports</a>
              <a href="#">Segments</a>
            </div>
          </a>
        </div>
        <div className="col-4 p-4">
          <a className="text-decoration-none" href="#">
            <h4 className="fs-5">
              <i class="fa fa-circle-thin fs-5 mx-2" aria-hidden="true"></i>
              Coin
            </h4>
            <div className="p-2 ms-4 support-link">
              <a href="#">Mutual funds</a>
              <a href="#">National Pension Scheme (NPS)</a>
              <a href="#">Fixed Deposit (FD)</a>
              <a href="#">Features on Coin</a>
              <a href="#">Payments and Orders</a>
              <a href="#">General</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
