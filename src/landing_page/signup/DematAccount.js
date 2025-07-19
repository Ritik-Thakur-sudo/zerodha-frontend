import "../../css/Signup.css";

export default function DematAccount() {
  return (
    <div
      className="container-fluid text-center p-5 mt-5"
      style={{ backgroundColor: "#FAFAFB" }}
    >
      <h2 className="mb-4">Steps to open a demat account with Zerodha</h2>

      <div className="row align-items-center px-5">
        <div className="col-6">
          <img
            src="media/images/steps-acop.svg"
            alt="step-acop img"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        <div className="col-6 text-start mt-5 ">
          <ol className="list-unstyled">
            <li className="mb-2 d-flex align-items-center border-bottom">
              <span className="step-number my-3">01</span>
              <span className="ms-3 steps">Enter the requested details</span>
            </li>
            <li className="mb-2 d-flex align-items-center border-bottom">
              <span className="step-number my-3">02</span>
              <span className="ms-3 steps">Complete e-sign & verification</span>
            </li>
            <li className="d-flex align-items-center">
              <span className="step-number my-3">03</span>
              <span className="ms-3 steps">Start investing!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
