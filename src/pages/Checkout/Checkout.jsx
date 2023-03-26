import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenthicated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(30);
  const [tax, setTax] = useState(10);
  const [discount, setDiscount] = useState(50);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!isAuthenthicated) {
      navigate("/signIn");
    }
    setPrice(
      cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    );
  });

  return (
    <div className="checkout-page">
      <div className="container-xxl">
        <div className="checkout-page-1">
          <div className="shipping-data">
            <p className="p-0 mb-0 h4 fw-semibold">Shipping Address</p>
            <div className="personal-data">
              <div className="fname-text">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label mb-1"
                >
                  First Name
                </label>
                <input
                  type="email"
                  className="form-control bg-white"
                  id="exampleFormControlInput1"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="fname-text">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label mb-1"
                >
                  Last Name
                </label>
                <input
                  type="email"
                  className="form-control bg-white"
                  id="exampleFormControlInput1"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Delivery Address
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter Delivery Address"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <p className="p-0 mb-0 h4 fw-semibold mt-4">Payment Method</p>
            <div class="form-check mt-3 border p-3 bg-white rounded">
              <input
                class="form-check-input ms-3 p-0"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="form-check-label ms-2 fw-semibold p-0"
                for="flexRadioDefault1"
              >
                Via UPI ID
              </label>
            </div>
            <div class="form-check mt-2 border p-3 bg-white rounded">
              <input
                class="form-check-input ms-3 p-0"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="form-check-label ms-2 fw-semibold p-0"
                for="flexRadioDefault1"
              >
                Stripe
              </label>
            </div>
            <div class="form-check mt-2 mb-3 border p-3 bg-white rounded">
              <input
                class="form-check-input ms-3 p-0"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                class="form-check-label ms-2 fw-semibold p-0"
                for="flexRadioDefault1"
              >
                Cash on Delivery
              </label>
            </div>
          </div>
          <div className="order-summary border rounded-2 bg-white">
            <p className="title p-0 mb-0 fw-semibold pt-4 ps-4">
              Order Summary
            </p>
            <div className="price d-flex justify-content-between mx-4 mt-4">
              <p className="mb-0">Price:</p>
              <p className="mb-0">{`₹ ${price}`}</p>
            </div>
            <div className="delivery d-flex justify-content-between mx-4 mt-3">
              <p className="mb-0">Delivery:</p>
              <p className="mb-0">{`₹ ${deliveryCharge}`}</p>
            </div>
            <div className="tax d-flex justify-content-between mx-4 mt-3">
              <p className="mb-0">Tax:</p>
              <p className="mb-0">{`₹ ${tax}`}</p>
            </div>
            <div className="discount d-flex justify-content-between mx-4 mt-3">
              <p className="mb-0">Discount:</p>
              <p className="mb-0">{`₹ ${discount}`}</p>
            </div>
            <hr className="mx-4" />
            <div className="total-pay d-flex justify-content-between align-items-center mx-4 mt-3">
              <p className="mb-0 fw-semibold">Total Payment:</p>
              <p className="mb-0 fw-semibold">{`₹ ${
                price + tax + deliveryCharge - discount
              } `}</p>
            </div>
            <div className="mx-4">
              <button
                type="button"
                className="btn btn-primary border-0 mt-5 w-100"
                style={{
                  backgroundColor: "#52057B",
                  color: "white",
                }}
              >
                Pay {`₹ ${price + tax + deliveryCharge - discount} `}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
