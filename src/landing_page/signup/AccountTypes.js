import "../../css/Signup.css";
import { Link } from "react-router-dom";

const accounts = [
  {
    icon: "media/images/acop-individual.svg",
    title: "Individual Account",
    desc: "Invest in equity, mutual funds and derivatives",
  },
  {
    icon: "media/images/acop-huf.svg",
    title: "HUF Account",
    desc: "Make tax-efficient investments for your family",
  },
  {
    icon: "media/images/acop-nri.svg",
    title: "NRI Account",
    desc: "Invest in equity, mutual funds, debentures, and more",
  },
  {
    icon: "media/images/acop-minor.svg",
    title: "Minor Account",
    desc: "Teach your little ones about money & invest for their future with them",
  },
  {
    icon: "media/images/acop-corporate.svg",
    title: "Corporate / LLP/ Partnership",
    desc: "Manage your business surplus and investments easily",
  },
];

export default function AccountTypes() {
  return (
    <div className="container p-5">
      <h2 className="text-center mb-5">Explore different account types</h2>
      <div className="row p-3 gy-5 gx-4">
        {accounts.map((acc, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <Link
              to={`/signup/${acc.title.toLowerCase().replace(/[\s/]+/g, "-")}`}
              className="text-decoration-none text-dark"
            >
              <div className="p-4 account-box rounded shadow-sm h-100 position-relative">
                <div
                  className="position-absolute top-1 start-0 translate-middle"
                  style={{
                    backgroundColor: "#f0f6ff",
                    borderRadius: "50%",
                    padding: "7px",
                    marginTop: "20px",
                  }}
                >
                  <img src={acc.icon} alt={acc.title} width={28} height={28} />
                </div>
                <div className="ps-4 pt-2">
                  <h5 className="fw-semibold mb-3">{acc.title}</h5>
                  <p className="text-muted mb-2">{acc.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
