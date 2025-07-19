import "../../css/Signup.css";

export default function Investment() {
  return (
    <div className="container p-5">
      <h2 className="text-center fs-3">
        Investment options with Zerodha demat account
      </h2>
      <div className="row p-5">
        <div className="col-6 d-flex p-5 gap-4">
          <img src="media/images/stocksAcop.svg" alt="stock img" />
          <div>
            <h4>Stocks</h4>
            <p className="fs-6">Invest in all exchange-listed securities</p>
          </div>
        </div>
        <div className="col-6 d-flex p-5 gap-4">
          <img src="media/images/mf-acop.svg" alt="stock img" />
          <div>
            <h4>Mutual funds</h4>
            <p className="fs-6">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>
        <div className="col-6 d-flex p-5 gap-4">
          <img src="media/images/ipo-acop.svg" alt="ipo img" />
          <div>
            <h4>IPO</h4>
            <p className="fs-6">Apply to the latest IPOs instantly via UPI</p>
          </div>
        </div>
        <div className="col-6 d-flex p-5 gap-4">
          <img src="media/images/fo-acop.svg" alt="fo-acop img" />
          <div>
            <h4>Futures & options</h4>
            <p className="fs-6">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>
      <button className="explore mt-3 p-2 btn fs-5">Explore Investment</button>
    </div>
  );
}
