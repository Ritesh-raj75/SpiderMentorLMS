import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "./payment.css";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item?.price || 0);
  }, 0);

  const discountedPrice = totalPrice - totalPrice * 0.1;

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Payment Successful ✅");
      localStorage.removeItem("cart");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="payment_form_details" style={{ paddingTop: "90px" }}>
      <div className="form_right">
        <h1>Checkout</h1>
        <p>Billing Address</p>
        <div className="selectplace">
          <select className="select_country">
            <option value="india">India</option>
            <option value="us">United States</option>
            <option value="eu">Europe</option>
          </select>
          <select className="select_state">
            <option value="disabled">Please select...</option>
            <option value="karnataka">Karnataka</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="kerala">Kerala</option>
          </select>
        </div>

        <div className="payment_options">
          {["Credit/Debit Card", "UPI", "PayTM", "Net Banking", "Mobile Wallets"].map((method, i) => (
            <div className="creditcard_option" key={i}>
              <input type="radio" className="input_radio" name="payment_method" />
              <span className="radio_span">{method}</span>
            </div>
          ))}
        </div>

        <div className="card_detailsDiv">
          <input
            className="input_cardname"
            type="text"
            placeholder="Name on Card"
          />
          <input
            className="input_cardnum"
            type="text"
            placeholder="Card Number"
          />
          <div className="card_validity">
            <select className="card_val_month">
              <option value="disabled">MM</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select className="card_val_year">
              <option value="disabled">YYYY</option>
              {[...Array(10)].map((_, i) => (
                <option key={2024 + i} value={2024 + i}>
                  {2024 + i}
                </option>
              ))}
            </select>
            <input
              className="input_securitynum"
              type="text"
              placeholder="CVV"
            />
          </div>
          <div className="checkbox_payment">
            <input type="checkbox" id="checkbox_payment" />
            <label htmlFor="checkbox_payment">Remember this card</label>
          </div>
        </div>
      </div>

      <div className="form_left">
        <h2>Summary</h2>
        <table className="price_table">
          <tbody>
            <tr>
              <td>Original price:</td>
              <td>&#8377;{totalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Coupon discounts:</td>
              <td>-&#8377;{(totalPrice * 0.1).toLocaleString()}</td>
            </tr>
            <tr>
              <td><b>Total:</b></td>
              <td><b>&#8377;{discountedPrice.toLocaleString()}</b></td>
            </tr>
          </tbody>
        </table>
        <p className="after_total">
          Udemy is required by law to collect applicable transaction taxes for
          purchases made in certain tax jurisdictions.
        </p>
        <p className="terms_conditions">
          By completing your purchase you agree to these <a href="#">Terms of Service</a>
        </p>
        {loading ? (
          <CircularProgress />
        ) : (
          <button onClick={handlePayment} id="complete_payment">
            Complete Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default Payment;
