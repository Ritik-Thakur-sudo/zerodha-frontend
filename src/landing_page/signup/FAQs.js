import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Signup.css";

const faqData = [
  {
    question: "What is a Zerodha account?",
    answer: (
      <p>
        A Zerodha account is a combined demat and trading account that allows
        investors to buy, sell, and hold securities digitally.
      </p>
    ),
  },
  {
    question: "What documents are required to open a demat account?",
    answer: (
      <>
        <p>
          The following documents are required to open a Zerodha account online:
        </p>
        <ul>
          <li>PAN number</li>
          <li>
            Aadhaar Card (Linked with a phone number for OTP verification)
          </li>
          <li>
            Cancelled cheque or bank account statement (To link your bank
            account)
          </li>
          <li>
            Income proof (Required only if you wish to trade in Futures &
            options)
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Is Zerodha account opening free?",
    answer: (
      <p>
        Yes, account opening is free for equity. Commodity may have extra
        charges.
      </p>
    ),
  },
  {
    question: "Are there any maintenance charges for a demat account?",
    answer: (
      <p>
        The account maintaince charges is appliacable based on the account type.
        For Basic Services Demat Account: Zero charges if the holding value is
        less than ₹4,00,000. For non-Basic Services Demat Account demat
        accounts: ₹300 per year + GST. To learn more about BSDA,
        <Link className="text-decoration-none mx-1" to={""}>
          Click here
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Can I open a demat account without a bank account?",
    answer: (
      <>
        <p>
          To open a demat account, you must have a bank account in your name.
        </p>
        <p>
          If UPI verification is completed successfully, no proof of bank is
          needed. However, if bank verification fails, you'll need to provide
          either a cancelled cheque or a bank statement to link your bank
          account to Zerodha.
        </p>
      </>
    ),
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container p-5">
      <div className="row p-3">
        <h2 className="fs-3">FAQs</h2>
      </div>
      <div className="row p-3">
        <div className="col-12">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item border-top py-3 ${
                openIndex === index ? "active" : ""
              }`}
            >
              <div
                className="faq-question d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFAQ(index)}
              >
                <span className="fs-5">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                  ) : (
                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer mt-2 text-secondary">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
