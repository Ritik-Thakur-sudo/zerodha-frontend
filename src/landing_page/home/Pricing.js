import { Link } from "react-router-dom";

import "../../css/Pricing.css";

function Pricing() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <div className="col-5">
          <h2>Unbeatable pricing</h2>
          <p className="fs-6 mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col d-flex justify-content-around align-items-center mt-5">
          <div className="pricing-box">
            <img src="media/images/pricing0.svg" alt="0 rupees" />
            <p>
              Free account <br /> opening
            </p>
          </div>
          <div className="pricing-box">
            <img src="media/images/pricing (1).svg" alt="0 rupess" />
            <p>
              Free equity delivery <br />
              and direct mutual funds
            </p>
          </div>
          <div className="pricing-box">
            <img src="media/images/pricing (2).svg" alt="20 rupees" />
            <p>
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
      </div>
      <Link className="text-decoration-none" to={"/pricing"}>
        See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default Pricing;
