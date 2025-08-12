import {Link} from "react-router-dom";
import "../../css/SupportPage.css";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5">
        <h2 className="fs-4 mb-3 fw-normal fs">
          To create a ticket, select a relevant topic
        </h2>
        <div className="col-4 p-4">
          <Link to={""} className="text-decoration-none">
            <h4 className="fs-5">
              <i class="fa fa-plus-circle fs-5 mx-2" aria-hidden="true"></i>
              Account Opening
            </h4>
          </Link>
          <div className="p-2 ms-4 support-link">
            <Link to={""}>Resident individual</Link>
            <Link to={""}>Minor</Link>
            <Link to={""}>Non Resident Indian (NRI)</Link>
            <Link to={""}>Company, Partnership, HUF and LLP</Link>
            <Link to={""}>Glossary</Link>
          </div>
        </div>
        <div className="col-4 p-4">
          <Link to={""} className="text-decoration-none">
            <h4 className="fs-5">
              <i class="fa fa-user fs-5 mx-2" aria-hidden="true"></i>
              Your Zerodha Account
            </h4>
          </Link>
          <div className="p-2 ms-4 support-link">
            <Link to={""}>Your Profile</Link>
            <Link to={""}>Account modification</Link>
            <Link to={""}>
              Client Master Report (CMR) and Depository Participant (DP)
            </Link>
            <Link to={""}>Nomination</Link>
            <Link to={""}>Transfer and conversion of securities</Link>
          </div>
        </div>
        <div className="col-4 p-4">
          <Link to={""} className="text-decoration-none">
            <h4 className="fs-5">
              <i class="fa fa-bar-chart fs-5 mx-2" aria-hidden="true"></i>
              Kite
            </h4>
          </Link>
          <div className="p-2 ms-4 support-link">
            <Link to={""}>IPO</Link>
            <Link to={""}>Trading FAQs</Link>
            <Link to={""}>Margin Trading Facility (MTF) and Margins</Link>
            <Link to={""}>Charts and orders</Link>
            <Link to={""}>Alerts and Nudges</Link>
            <Link to={""}>General</Link>
          </div>
        </div>
        <div className="col-4 p-4">
          <Link to={""} className="text-decoration-none">
            <h4 className="fs-5">
              <i class="fa fa-credit-card fs-5 mx-2" aria-hidden="true"></i>
              Funds
            </h4>
          </Link>
          <div className="p-2 ms-4 support-link">
            <Link to={""}>Add money</Link>
            <Link to={""}>Withdraw money</Link>
            <Link to={""}>Add bank accounts</Link>
            <Link to={""}>eMandates</Link>
          </div>
        </div>
        <div className="col-4 p-4">
          <Link to={""} className="text-decoration-none">
            <h4 className="fs-5">
              <i class="fa fa-circle-o-notch fs-5 mx-2" aria-hidden="true"></i>
              Console
            </h4>
            <div className="p-2 ms-4 support-link">
              <Link to={""}>Portfolio</Link>
              <Link to={""}>Corporate actions</Link>
              <Link to={""}>Funds statement</Link>
              <Link to={""}>Reports</Link>
              <Link to={""}>Reports</Link>
              <Link to={""}>Segments</Link>
            </div>
          </Link>
        </div>
        <div className="col-4 p-4">
          <Link to={""} className="text-decoration-none">
            <h4 className="fs-5">
              <i class="fa fa-circle-thin fs-5 mx-2" aria-hidden="true"></i>
              Coin
            </h4>
            <div className="p-2 ms-4 support-link">
              <Link to={""}>Mutual funds</Link>
              <Link to={""}>National Pension Scheme (NPS)</Link>
              <Link to={""}>Fixed Deposit (FD)</Link>
              <Link to={""}>Features on Coin</Link>
              <Link to={""}>Payments and Orders</Link>
              <Link to={""}>General</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
