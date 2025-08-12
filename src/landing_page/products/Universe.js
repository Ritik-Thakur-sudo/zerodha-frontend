import {Link} from "react-router-dom";
import "../../css/ProductPage.css"

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h1>The Zerodha Universe</h1>
        <p className="mb-3 mt-3 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5">
          <img src="media/images/zerodhaFundhouse.png" className="universe-logo mb-3" alt="zerodha Fund house"/>
          <p className="text-small">
            <Link to={""} className="text-muted text-decoration-none">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </Link>
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/sensibullLogo.svg" className="universe-logo mb-4" alt="sensibull Logo"/>
          <p className="text-small">
            <Link to={""} className="text-muted text-decoration-none">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </Link>
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/tijori.svg" className="universe-logo mb-3" alt="tijori"/>
          <p className="text-small">
            <Link to={""} className="text-muted text-decoration-none">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </Link>
          </p>
        </div>
        <div className="col-4 p-2">
          <img src="media/images/streakLogo.png" className="universe-logo mb-3" alt="streak Logo"/>
          <p className="text-small">
            <Link to={""} className="text-muted text-decoration-none">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </Link>
          </p>
        </div>
        <div className="col-4 p-2">
          <img src="media/images/smallcaseLogo.png" className="universe-logo mb-4" alt="smallcase Logo"/>
          <p className="text-small">
            <Link to={""} className="text-muted text-decoration-none">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </Link>
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" className="universe-logo mb-3" alt="ditto Logo"/>
          <p className="text-small">
            <Link to={""} className="text-muted text-decoration-none">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </Link>
          </p>
        </div>
        <button className="signUp mt-3 p-2 btn fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
