import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center p-5 mt-4 mb-5">
        <h1 className="text-muted mb-3 fs-1">Zerodha Products</h1>
        <h3 className="mb-3 fs-5 text-muted">Sleek, modern, and intuitive trading platforms</h3>
        <p className="fs-5">
          Check out our
          <Link to={"/"} style={{ textDecoration: "none", color: "#397ED1" }} className="mx-1">
            investment offerings <i class="fa fa-long-arrow-right"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
