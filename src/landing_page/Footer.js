import {Link} from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="mt-5">
      <hr />
      <div className="container-md mt-5 p-2">
        <div className="row">
          <div className="col-4">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "40%" }}
            />
            <p className="mt-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br /> All rights
              reserved.
            </p>
          </div>
          <div className="col">
            <h3>Account</h3>
            <Link to={""} className=" text-decoration-none">
              Open demat account
            </Link>
            <Link to={""} className=" text-decoration-none">
              Minor demat account
            </Link>
            <Link to={""} className=" text-decoration-none">
              NRI demat account
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Commodity
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Dematerialisation
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Fund transfer
            </Link>
            <Link className=" text-decoration-none" >
              MTF
            </Link>
            <Link className=" text-decoration-none" >
              Referral program
            </Link>
          </div>
          <div className="col">
            <h3>Support</h3>
            <Link to={""} className=" text-decoration-none" >
              Contact us
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Support portal
            </Link>
            <Link to={""} className=" text-decoration-none" >
              How to file a complaint?
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Status of your complaints
            </Link>
            <Link to={""} className=" text-decoration-none">
              Bulletin
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Circular
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Z-Connect blog
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Downloads
            </Link>
          </div>
          <div className="col">
            <h3>Company</h3>
            <Link to={""} className=" text-decoration-none" >
              About
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Philosophy
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Press & media
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Careers
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Zerodha Cares (CSR)
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Zerodha.tech
            </Link>
            <Link to={""} className=" text-decoration-none">
              Open source
            </Link>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <Link to={""} className=" text-decoration-none">
              Upcoming IPOs
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Brokerage charges
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Market holidays
            </Link>
            <Link  className=" text-decoration-none" >
              Economic calendar
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Calculators
            </Link>
            <Link to={""} className=" text-decoration-none" >
              Markets
            </Link>
            <Link to={""} className=" text-decoration-none">
              Sectors
            </Link>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <Link to={""} className="extra text-decoration-none mx-1">
              {" "}
              complaints@zerodha.com,
            </Link>{" "}
            for DP related to{" "}
            <Link to={""} className="extra text-decoration-none mx-1">
              dp@zerodha.com.
            </Link>
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on
            <Link to={""} className="extra text-decoration-none mx-1">
              SEBI SCORES
            </Link>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <Link to={""} className="text-decoration-none footer-a extra">
            Smart Online Dispute Resolution |{" "}
          </Link>
          <Link to={""} className="text-decoration-none extra">
            {" "}
            Grievances Redressal Mechanism
          </Link>

          <p className="mt-3">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <Link to={""} className="extra text-decoration-none mx-1">create a ticket here.</Link>
          </p>
        </div>
        <div className="text-muted text-center mb-3 text-muted text-decoration-none">
          <Link to={""} className="mx-2  text-decoration-none">
            NSE
          </Link>
          <Link to={""} className="mx-2  text-decoration-none" >
            BSE
          </Link>
          <Link to={""} className="mx-2  text-decoration-none">
            MCX
          </Link>
          <Link to={""} className="mx-2  text-decoration-none" >
            Terms & conditions
          </Link>
          <Link to={""} className="mx-2  text-decoration-none">
            Policies & procedures
          </Link>
          <Link to={""} className="mx-2  text-decoration-none">
            Privacy policy
          </Link>
          <Link to={""} className="mx-2  text-decoration-none">
            Disclosure
          </Link>
          <Link to={""} className="mx-2  text-decoration-none">
            For investor's attention
          </Link>
          <Link to={""} className="mx-2  text-decoration-none">
            Investor charter
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
