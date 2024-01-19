import React, { PureComponent, useRef } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DateSelector from "../../Components/Calender/Calender";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    uv: 4000,
    pv: 2400,
    amt: 1240,
  },
  {
    name: "Mon",
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "Tue",
    uv: 200,
    pv: 980,
    amt: 4000,
  },
  {
    name: "Wed",
    uv: 3000,
    pv: 390,
    amt: 3000,
  },
  {
    name: "Thu",
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: "Fri",
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: "Sat",
    uv: 349,
    pv: 430,
    amt: 210,
  },
];

const Overview = () => {
  const [startDate, setStartDate] = useState(null);

  const handleStartDateSelect = (date) => {
    setStartDate(date);
    clickButtonAutomatically();
  };

  //calender buttoon auto close scriptss///
  const buttonRef = useRef(null);

  const clickButtonAutomatically = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div>
      <div className="overview" ref={buttonRef}>
        <div className="overview-top">
          <h1 className="overheading">Overview</h1>
          <DateSelector
            selectedDate={startDate}
            onDateSelect={handleStartDateSelect}
          />
        </div>
        <div className="total-revenue">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="total-revenue-transection">
                <div className="revenue-transection-total">
                  <img
                    src="/images/calender.jpg"
                    alt=""
                    className="revenue-image"
                  />
                  <h1 className="transection-head">Total Revenue</h1>
                </div>
                <div className="transection-amount">
                  <p className="trasection-cash">₹6,50,000</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="total-revenue-transection">
                <div className="revenue-transection-total">
                  <img
                    src="/images/calender.jpg"
                    alt=""
                    className="costumer-image"
                  />
                  <h1 className="transection-head">Total Costumer</h1>
                </div>
                <div className="transection-amount">
                  <p className="trasection-cash">5,60,000</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="total-revenue-transection">
                <div className="revenue-transection-total">
                  <img
                    src="/images/calender.jpg"
                    alt=""
                    className="transection-image"
                  />
                  <h1 className="transection-head">Total Transaction</h1>
                </div>
                <div className="transection-amount">
                  <p className="trasection-cash">₹6,50,000</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="total-revenue-transection">
                <div className="revenue-transection-total">
                  <img
                    src="/images/calender.jpg"
                    alt=""
                    className="product-image"
                  />
                  <h1 className="transection-head">Total Product</h1>
                </div>
                <div className="transection-amount">
                  <p className="trasection-cash">5,60,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="revenue-growth">
          <div className="row">
            <div className="col-md-6">
              <div className="overview-sale-growth">
                <div className="overview-top">
                  <h1 className="overheading">Revenue Growth</h1>
                  <div className="select-date">
                    <DateSelector
                      selectedDate={startDate}
                      onDateSelect={handleStartDateSelect}
                    />
                  </div>
                </div>
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  className="custom-chart-container"
                >
                  <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
                {/* <img
                  src="/images/revenue .png"
                  alt=""
                  className="revenue-growth-img"
                /> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="overview-sale-growth">
                <div className="overview-top">
                  <h1 className="overheading">Sales Growth</h1>
                  <div className="select-date">
                    <DateSelector
                      selectedDate={startDate}
                      onDateSelect={handleStartDateSelect}
                    />
                  </div>
                </div>
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  className="custom-chart-container"
                >
                  <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="Function"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-order">
          <h1 className="recent-order-head">Recent Order</h1>
          <div className="recentorder-table">
            <table className="table">
              <thead className="recent-table-head">
                <tr className="recent-table-row">
                  <th scope="col" className="table-head">
                    Status
                  </th>
                  <th scope="col" className="table-head">
                    Order ID
                  </th>
                  <th scope="col" className="table-head">
                    Costumer no.
                  </th>
                  <th scope="col" className="table-head">
                    Item
                  </th>
                  <th scope="col" className="table-head">
                    Date
                  </th>
                  <th scope="col" className="table-head">
                    Purchase Price
                  </th>
                  <th scope="col" className="table-head"></th>
                </tr>
              </thead>
              <tbody className="recent-table-body">
                <tr className="recenttable-body-row">
                  <td scope="row" className="tablehead">
                    On the Way
                  </td>
                  <td className="tabledataitems">#12585458</td>
                  <td className="tabledataitems">898587445</td>
                  <td className="tabledataitems">T-shirt yellow</td>
                  <td className="tabledataitems">23-12-2023</td>
                  <td className="tabledataitems">₹1,500.00</td>
                  <td scope="row" className="tablehead">
                    View
                  </td>
                </tr>
                <tr className="recenttable-body-row">
                  <td scope="row" className="tablehead">
                    Order Confirmed
                  </td>
                  <td className="tabledataitems">#12585458</td>
                  <td className="tabledataitems">898587445</td>
                  <td className="tabledataitems">T-shirt yellow</td>
                  <td className="tabledataitems">23-12-2023</td>
                  <td className="tabledataitems">₹1,500.00</td>
                  <td scope="row" className="tablehead">
                    View
                  </td>
                </tr>
                <tr className="recenttable-body-row">
                  <td scope="row" className="tableheadpending">
                    Pending
                  </td>
                  <td className="tabledataitems">#12585458</td>
                  <td className="tabledataitems">898587445</td>
                  <td className="tabledataitems">T-shirt yellow</td>
                  <td className="tabledataitems">23-12-2023</td>
                  <td className="tabledataitems">₹1,500.00</td>
                  <td scope="row" className="tablehead">
                    View
                  </td>
                </tr>
                <tr className="recenttable-body-row">
                  <td scope="row" className="tablehead">
                    Delivered
                  </td>
                  <td className="tabledataitems">#12585458</td>
                  <td className="tabledataitems">898587445</td>
                  <td className="tabledataitems">T-shirt yellow</td>
                  <td className="tabledataitems">23-12-2023</td>
                  <td className="tabledataitems">₹1,500.00</td>
                  <td scope="row" className="tablehead">
                    View
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
