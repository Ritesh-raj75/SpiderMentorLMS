import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for redirection
import "./Cart.css";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (titleToRemove) => {
    const updatedCart = cartItems.filter(
      (item) => item.title !== titleToRemove
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleProceedToPayment = () => {
    navigate("/payment"); // ✅ Navigate to Payment.jsx
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item?.price || 0);
  }, 0);

  return (
    <div className="container mt-5" style={{ paddingTop: "50px" }}>
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">No items in cart.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item?.image || "https://via.placeholder.com/300x200"}
                    className="card-img-top"
                    alt={item?.title || "Course Image"}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item?.title || "Untitled"}</h5>
                    <p className="text-success fw-bold mb-2">
                      ₹{item?.price ? item.price.toLocaleString() : "N/A"}
                    </p>
                    <ul className="list-group list-group-flush mb-3">
                      {item?.topics?.map((topic, i) => (
                        <li className="list-group-item px-2 py-1" key={i}>
                          {topic?.name} – {topic?.students} students
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-outline-danger mt-auto"
                      onClick={() => handleRemove(item.title)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h4>Total: ₹{totalPrice.toLocaleString()}</h4>
            <div className="d-flex gap-2">
              <button className="btn btn-danger" onClick={handleClearCart}>
                Clear Cart
              </button>
              <button
                className="btn btn-primary"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
