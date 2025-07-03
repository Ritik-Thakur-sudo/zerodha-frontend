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
            <a className=" text-decoration-none" href="#">
              Open demat account
            </a>
            <a className=" text-decoration-none" href="#">
              Minor demat account
            </a>
            <a className=" text-decoration-none" href="#">
              NRI demat account
            </a>
            <a className=" text-decoration-none" href="#">
              Commodity
            </a>
            <a className=" text-decoration-none" href="#">
              Dematerialisation
            </a>
            <a className=" text-decoration-none" href="#">
              Fund transfer
            </a>
            <a className=" text-decoration-none" href="#">
              MTF
            </a>
            <a className=" text-decoration-none" href="#">
              Referral program
            </a>
          </div>
          <div className="col">
            <h3>Support</h3>
            <a className=" text-decoration-none" href="#">
              Contact us
            </a>
            <a className=" text-decoration-none" href="#">
              Support portal
            </a>
            <a className=" text-decoration-none" href="#">
              How to file a complaint?
            </a>
            <a className=" text-decoration-none" href="#">
              Status of your complaints
            </a>
            <a className=" text-decoration-none" href="#">
              Bulletin
            </a>
            <a className=" text-decoration-none" href="#">
              Circular
            </a>
            <a className=" text-decoration-none" href="#">
              Z-Connect blog
            </a>
            <a className=" text-decoration-none" href="#">
              Downloads
            </a>
          </div>
          <div className="col">
            <h3>Company</h3>
            <a className=" text-decoration-none" href="#">
              About
            </a>
            <a className=" text-decoration-none" href="#">
              Philosophy
            </a>
            <a className=" text-decoration-none" href="#">
              Press & media
            </a>
            <a className=" text-decoration-none" href="#">
              Careers
            </a>
            <a className=" text-decoration-none" href="#">
              Zerodha Cares (CSR)
            </a>
            <a className=" text-decoration-none" href="#">
              Zerodha.tech
            </a>
            <a className=" text-decoration-none" href="#">
              Open source
            </a>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <a className=" text-decoration-none" href="#">
              Upcoming IPOs
            </a>
            <a className=" text-decoration-none" href="#">
              Brokerage charges
            </a>
            <a className=" text-decoration-none" href="#">
              Market holidays
            </a>
            <a className=" text-decoration-none" href="#">
              Economic calendar
            </a>
            <a className=" text-decoration-none" href="#">
              Calculators
            </a>
            <a className=" text-decoration-none" href="#">
              Markets
            </a>
            <a className=" text-decoration-none" href="#">
              Sectors
            </a>
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
            <a href="#" className="extra text-decoration-none mx-1">
              {" "}
              complaints@zerodha.com,
            </a>{" "}
            for DP related to{" "}
            <a href="#" className="extra text-decoration-none mx-1">
              dp@zerodha.com.
            </a>
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on
            <a href="#" className="extra text-decoration-none mx-1">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <a href="#" className="text-decoration-none footer-a extra">
            Smart Online Dispute Resolution |{" "}
          </a>
          <a href="#" className="text-decoration-none extra">
            {" "}
            Grievances Redressal Mechanism
          </a>

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
            <a  href="#" className="extra text-decoration-none mx-1">create a ticket here.</a>
          </p>
        </div>
        <div className="text-muted text-center mb-3 text-muted text-decoration-none">
          <a className="mx-2  text-decoration-none" href="#">
            NSE
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            BSE
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            MCX
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            Terms & conditions
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            Policies & procedures
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            Privacy policy
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            Disclosure
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            For investor's attention
          </a>
          <a className="mx-2  text-decoration-none" href="#">
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
