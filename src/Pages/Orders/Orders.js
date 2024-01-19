import { Button } from "@mui/material";
import React from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
const Orders = () => {
  return (
    <div className="orders-topData">
      <h1 className="order-id">#8998595</h1>

      <div className="order-item-top">
        <div className="left-Cartitem">
          <div className="cart-product-detail">
            <div className="left-image-top">
              <img
                src="/images/model.png"
                alt="no-imge"
                className="cart-image"
              />
            </div>
            <div className="right-item-top">
              <h1 className="product-name">LIGHT PUFFER</h1>
              <p className="product-description">Demo color</p>
              <p className="product-price">
                Rs. <span>1500</span>
              </p>
              <p className="sizes-product">M</p>
              <div className="color-quantityTop">
                <div className="color-options">
                  <p className="coloor-title">Color:</p>
                  <button
                    className="color-btn"
                    style={{ background: "red" }}
                  ></button>
                </div>
                <div className="quantity-section ">
                  <p className="quantity-edit ">Quantity:</p>
                  <p className="quantity-controls">
                    <span>1</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-id-copy">
            <p>
              product-id <span>83447899384</span>{" "}
              <Button className="copy-btn">
                <i class="far fa-clone"></i>
              </Button>
            </p>
          </div>
        </div>
        <div className="right-invoice">
          {/* custom button  */}
          <CustomButton text="Invoice" color="#24a804" textColor="#FFFFFF" />
        </div>
      </div>
      <div className="user-detail-below">
        <div className="row">
          <div className="col-md-6">
            <div className="left-contact-details">
              <h1 className="User-detaills mb-3">User Details</h1>
              <h1 className="User-detaills ">Ashis Kdks</h1>
              <h1 className="User-detaills">847595739</h1>
              <p className="adress-title">Delivery adress</p>
              <p className="adress-title">Ashish saini</p>
              <p className="adress-data">word no</p>
              <p className="adress-data">jadj adbajbda</p>
              <p className="adress-data">hyderbad</p>
              <p className="adress-data">gachhiwoli</p>
              <p className="adress-data">
                mobile: <span>992883773</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-price-details">
              <h1 className="payemnt-deatils">Payment Details</h1>
              <div className="priceSection">
                <h1 className="price-title">RAREISM WOMENS AURORA BEIGE</h1>
                <h1 className="amount-right">&#x20B9; 14000.00</h1>
              </div>
              <div className="priceSection">
                <h1 className="price-title">Discount</h1>
                <h1 className="amount-right">&#x20B9; 14000.00</h1>
              </div>
              <hr className="line-edit"></hr>
              <div className="priceSection">
                <h1 className="price-title">Discount Price</h1>
                <h1 className="amount-right">&#x20B9; 14000.00</h1>
              </div>
              <hr className="line-edit"></hr>
              <div className="priceSection">
                <h1 className="price-title">Shipping Fee</h1>
                <h1 className="amount-right ">&#x20B9; 14000.00</h1>
              </div>
              <hr className="line-edit"></hr>
              <div className="priceSection">
                <h1 className="price-title">Total Price</h1>
                <h1 className="amount-right ">&#x20B9; 14000.00</h1>
              </div>
              <hr className="line-edit"></hr>
              <h1 className="paid-By">Paid By UPI (<span>7898545889@ybl</span>) <Button className="copy-btn">
                <i class="far fa-clone"></i>
              </Button></h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
