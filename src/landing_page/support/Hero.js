import { Link } from "react-router-dom";
import "../../css/SupportPage.css";

function Hero() {
  return (
    <section className="container-fluid text-white" id="supportHero">
      <div
        className="d-flex justify-content-between align-items-center p-5"
        id="supportWrapper"
      >
        <Link to="/support" className="text-decoration-none text-white ps-5">
          <h2 className="fs-5 m-0">Support Portal</h2>
        </Link>
        <Link
          to="/track-tickets"
          className="border-bottom text-decoration-none text-white me-5 "
        >
          Track tickets
        </Link>
      </div>

      <div className="row px-5 ms-3">
        <div className="col-lg-6 p-4">
          <h2 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <form className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />
            <button type="submit" className="btn btn-light text-primary">
              Search
            </button>
          </form>

          <div className="d-flex flex-wrap gap-3 p-4">
            <Link to="/track-account" className="support-link">
              Track account opening
            </Link>
            <Link to="/track-segment" className="support-link">
              Track segment activation
            </Link>
            <Link to="/intraday-margins" className="support-link">
              Intraday margins
            </Link>
            <Link to="/kite-manual" className="support-link">
              Kite user manual
            </Link>
          </div>
        </div>

        <div className="col-lg-6 p-4 ps-5">
          <h2 className="fs-4 mb-3 mt-3">Featured</h2>
          <ol>
            <li className="mb-3">
              <Link to={""} className="text-white text-decoration-none border-bottom">
                Quarterly Settlement of Funds - July 2025
              </Link>
            </li>
            <li>
              <Link to={""} className="text-white text-decoration-none border-bottom">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
