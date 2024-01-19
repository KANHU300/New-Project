import React, { useState } from "react";

const Custemer = () => {
  const [showCustomerUser, setShowCustomerUser] = useState(false);

  const handleCustomerImageClick = () => {
    setShowCustomerUser(true);
  };

  return (
    <div>
      <div className="customer">
      <div className="customer-tophead">
          <h1 className="customerheading">Customer</h1>
        </div>
        <div className="searchinput">
          <input
            type=""
            placeholder="Search by name & number"
            className="input-seraching"
            id=""
          />
          <img src="/images/search-icon.webp" alt="" className="Searchimage" />
        </div>
        <div className="customernameandimage" onClick={handleCustomerImageClick}>
          <div className="customerimage">
            <img src="/images/Customerimges.jpg" alt="" className="nameandimage" />
            <h1 className="customername">Nikhil</h1>
          </div>
          <div className="customerimagerightpath">
            <img src="/images/right arrow.png" alt="" className="imagerightpath" />
          </div>
        </div>
      </div>

      {showCustomerUser && (
        <div className="customeruser">
        <div className="blockuser">
          <img
            src="/images/Customerimges.jpg"
            alt=""
            className="blockuserimg"
          />
          <button className="blockuserbutton">Block User</button>
        </div>
        <div className="userdetails">
          <h1 className="username">Nikhil</h1>
          <p className="usernumber">7898589965</p>
        </div>
        <div className="userorders">
          <div className="ordershead">
            <h3 className="ordersname">Orders</h3>
          </div>
        </div>
        <div className="orderproduct">
          <table className="table">
            <thead className="product-nametable">
              <tr className="product-nametablerow">
                <th className="product-name"></th>
                <th className="product-name">Product Name</th>
                <th className="product-name">Costumer Name</th>
                <th className="product-name">Size</th>
                <th className="product-name">Date</th>
                <th className="product-name">Purchase Price</th>
                <th className="product-name">Invoice</th>
              </tr>
            </thead>
            <tbody className="product-nametablebody">
              <tr className="product-nametablerow">
                <td  className="product-tabledata">
                  <div className="jacket-top">
                    <img
                      src="/images/Customerimges.jpg"
                      className="jacket-topimg"
                      alt="no-imge"
                      
                    />
                  </div>
                </td>
                <td className="product-tabledata">Jacket Top</td>
                <td className="product-tabledata">Ashish</td>
                <td className="product-tabledata">M</td>
                <td className="product-tabledata">23-Dec-2023</td>
                <td className="product-tabledata">Rs.15,00</td>
                <td className="product-tabledata">
                  <button className="product-tabledatabutton">View</button>
                </td>
              </tr>
              <tr className="product-nametablerow">
                <td  className="product-tabledata">
                  <div className="jacket-top">
                    <img
                      src="/images/Customerimges.jpg"
                      className="jacket-topimg"
                      alt="no-imge"
                    />
                  </div>
                </td>
                <td className="product-tabledata">Jacket Top</td>
                <td className="product-tabledata">Ashish</td>
                <td className="product-tabledata">M</td>
                <td className="product-tabledata">23-Dec-2023</td>
                <td className="product-tabledata">Rs.15,00</td>
                <td className="product-tabledata">
                  <button className="product-tabledatabutton">View</button>
                </td>
              </tr>
              <tr className="product-nametablerow">
                <td  className="product-tabledata">
                  <div className="jacket-top">
                    <img
                      src="/images/Customerimges.jpg"
                      className="jacket-topimg"
                      alt="no-imge"
                    />
                  </div>
                </td>
                <td className="product-tabledata">Jacket Top</td>
                <td className="product-tabledata">Ashish</td>
                <td className="product-tabledata">M</td>
                <td className="product-tabledata">23-Dec-2023</td>
                <td className="product-tabledata">Rs.15,00</td>
                <td className="product-tabledata">
                  <button className="product-tabledatabutton">View</button>
                </td>
              </tr>
              <tr className="product-nametablerow">
                <td scope="row" className="product-tabledata">
                  <div className="jacket-top">
                    <img
                      src="/images/Customerimges.jpg"
                      className="jacket-topimg"
                      alt="no-imge"
                    />
                  </div>
                </td>
                <td className="product-tabledata">Jacket Top</td>
                <td className="product-tabledata">Ashish</td>
                <td className="product-tabledata">M</td>
                <td className="product-tabledata">23-Dec-2023</td>
                <td className="product-tabledata">Rs.15,00</td>
                <td className="product-tabledata">
                  <button className="product-tabledatabutton">View</button>
                </td>
              </tr>
              <tr className="product-nametablerow">
                <td  className="product-tabledata">
                  <div className="jacket-top">
                    <img
                      src="/images/Customerimges.jpg"
                      className="jacket-topimg"
                      alt="no-imge"
                    />
                  </div>
                </td>
                <td className="product-tabledata">Jacket Top</td>
                <td className="product-tabledata">Ashish</td>
                <td className="product-tabledata">M</td>
                <td className="product-tabledata">23-Dec-2023</td>
                <td className="product-tabledata">Rs.15,00</td>
                <td className="product-tabledata">
                  <button className="product-tabledatabutton">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  );
};

export default Custemer;





