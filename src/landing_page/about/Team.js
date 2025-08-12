import {Link} from "react-router-dom";

function Team() {
  return (
    <div className="container p-5">
      <div className="row p-5 text-center">
        <h1>People</h1>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-4 ms-5">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ width: "70%", height: "70%", borderRadius: "50%" }}
            alt="Nithin Kamath"
          />
          <h3 style={{ paddingLeft: "80px", paddingTop: "10px" }}>
            Nithin Kamath
          </h3>
          <p style={{ paddingLeft: "90px" }}>Founder, CEO</p>
        </div>
        <div className="col-5 me-5 mb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <Link to={""} className="text-decoration-none mx-1">
              Homepage
            </Link>
            /
            <Link to={""} className="text-decoration-none mx-1">
              TradingQnA
            </Link>
            /
            <Link to={""} className="text-decoration-none mx-1">
              Twitter
            </Link>
          </p>
        </div>
      </div>
      <div className="row p-5 ms-5 mt-5">
        <div className="col-4">
          <img
            src="media/images/Nikhil.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Nikhil"
          />
          <h3 className="ms-5 ps-2 pt-2 fs-4">Nikhil Kamath</h3>
          <p className="ms-5 ps-4">Co-founder & CFO</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Kailash.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Kailash"
          />
          <h3 className="ms-5 ps-2 pt-2 fs-4">Dr. Kailash Nadh</h3>
          <p className="text-center me-4">CTO</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Venu.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Venu"
          />
          <h3 className="ms-5 ps-3 pt-2 fs-4">Venu Madhav</h3>
          <p className="text-center me-5 ps-4">COO</p>
        </div>
      </div>
      <div className="row p-5 ms-5">
        <div className="col-4">
          <img
            src="media/images/Hanan.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Hanan"
          />
          <h3 className="ms-5 ps-4 pt-2 fs-4">Hanan Delvi</h3>
          <p className="text-center me-4">CCO</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Seema.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Seema"
          />
          <h3 className="ms-5 ps-4 pt-2 fs-4">Seema Patil</h3>
          <p className="text-center me-4">Director</p>
        </div>
        <div className="col-4">
          <img
            src="media/images/Karthik.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Karthik"
          />
          <h3 className="ms-4 ps-3 pt-2 fs-4">Karthik Rangappa</h3>
          <p className="text-center me-4 pe-1">Chief of Education</p>
        </div>
      </div>
      <div className="row p-5 ms-5">
        <div className="col-4">
          <img
            src="media/images/Austin.jpg"
            className="p-2"
            style={{ width: "90%", height: "90%", borderRadius: "50%" }}
            alt="Austin"
          />
          <h3 className="ms-5  ps-2 pt-2 fs-4">Austin Prakesh</h3>
          <p className="text-center me-5">Director Strategy</p>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Team;
