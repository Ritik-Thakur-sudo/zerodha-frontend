import {Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="text-center pt-2 m-5 border-bottom">
          <h1 className="fs-2">
            We pioneered the discount broking model in India.
          </h1>
          <h1 className="fs-2 mb-5 pb-3">
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>
      <div className="row ps-5 d-flex gap-5">
        <div className="col-5 ps-5 ms-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <Link to={""} className="text-decoration-none">
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our
            <Link to={""} className="text-decoration-none mx-1">
              blog
            </Link>
            or see what the media is
            <Link className="text-decoration-none mx-1">
              saying about us
            </Link>
            or learn more about our business and product
            <Link to={""} className="text-decoration-none mx-1">philosophies</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
