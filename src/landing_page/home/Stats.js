import {Link} from "react-router-dom";

function Stats() {
  return (
    <div className="container mb-5">
      <div className="row mt-5">
        <div className="col-6 p-5">
          <h1 className="mb-5">Trust with confidence</h1>
          <h2 className="fs-4 mt-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 mb-5">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <Link to={""} className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to={""} style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
