import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import "../../css/Signup.css";

export default function Hero() {
  const [phone, setPhone] = useState("");

  const handleGetOTP = () => {
    alert(`OTP sent to: ${phone}`);
  };
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <h2 className="fs-3">Open a free demat and trading account online</h2>
        <p className="fs-5 mt-2">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row p-5">
        <div className="col-6">
          <img src="media/images/accountOpen.svg" alt="Open account illustration" />
        </div>
        <div className="col-6 p-5">
          <h3 className="fs-4">Signup now</h3>
          <p className="fs-5">Or track your existing application</p>
          <div className="phone-container d-flex flex-column gap-3">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputStyle={{
                width: "100%",
                paddingTop: "29px",
                paddingBottom: "25px",
                fontSize: "20px",
              }}
              containerStyle={{ marginBottom: "15px" }}
            />

            <button className="get-otp-btn" onClick={handleGetOTP}>
              Get OTP
            </button>
          </div>
          <p className="mt-4">
            By proceeding, you agree to the
            <Link className="text-decoration-none mx-1" to={"/term"}>
              terms
            </Link>
             &
            <Link className="text-decoration-none mx-1" to={"/policy"}>
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
