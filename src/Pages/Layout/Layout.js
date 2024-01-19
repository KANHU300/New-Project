import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  // const navigate = useNavigate();

  const toggleNavigation = () => {
    setIsActive(!isActive);
  };
  const closeNavigation = () => {
    setIsActive(false);
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, []);

  // // for logout
  // const logOut = (e) => {
  //   e.preventDefault();
  //   localStorage.clear();
  //   // setAuthToken(null);
  //   navigate("/login");
  //   // let token = localStorage.getItem("token");
  //   // localStorage.setItem(authToken)

  //   // if (token) {
  //   //   setAuthToken(token);
  //   // } else {
  //   // }
  // };

  return (
    <>
      <div className="containr h-100">
        <div id="navigation" className={isActive ? "active" : ""}>
          <ul className="nav-ul  ">
            <li className="nav-li editli">
              <span className="logo-main">
                <img
                  className="logo-image"
                  src="/images/Steller.svg"
                  alt="no-data"
                />
              </span>
              <NavLink id="closebtn" onClick={toggleNavigation}>
                <i className="fas fa-times" />
              </NavLink>
            </li>
            <li className="nav-li ">
              <NavLink
                className="anchor-edit"
                to={"/overview"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-user"></i>
                </span>
                <span className="title">Overview</span>
              </NavLink>
            </li>
            <li className="nav-li ">
              <NavLink
                className="anchor-edit"
                to={"/product"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-leaf"></i>
                </span>
                <span className="title">Products</span>
              </NavLink>
            </li>
            <li className="nav-li ">
              <NavLink
                className="anchor-edit"
                to={"/order"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-hiking" />
                </span>
                <span className="title">Orders</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="anchor-edit"
                to={"/custemer"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-rocket" />
                </span>
                <span className="title">Customer</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="anchor-edit"
                to={"/return"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i class="fa-brands fa-pagelines"></i>
                </span>
                <span className="title">Return</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="anchor-edit"
                to={"/exchange"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-tree" />
                </span>
                <span className="title">Exchange</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="anchor-edit"
                to={""}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-tree" />
                </span>
                <span className="title">Visa</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="anchor-edit"
                to={""}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-tree" />
                </span>
                <span className="title">Newsletter</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                className="anchor-edit"
                to={"/"}
                onClick={closeNavigation}
              >
                <span className="icon">
                  <i className="fas fa-tree" />
                </span>
                <span className="title">Inquire</span>
              </NavLink>
            </li>
            <li className="nav-li">
              <ul className="p-0 dashboard-bottom">
                <li className="nav-Bottomli">
                  <NavLink
                    className="anchor2-editt profile-top"
                    to={"/"}
                    onClick={closeNavigation}
                  >
                     <img
                          src="/images/12.jpg"
                          alt="no-imge"
                          className="user-image"
                        />
                  </NavLink>
                </li>
                <li className="nav-Bottomli">
                  <NavLink
                    className="anchor2-editt"
                    to={"/"}
                    onClick={closeNavigation}
                  >
                    <span className="icons">
                      <i className="fas fa-tree" />
                    </span>
                    <span className="notification-title">Notification</span>
                  </NavLink>
                </li>
                <li className="nav-Bottomli">
                  <NavLink
                    className="anchor2-editt"
                    to={"/"}
                    onClick={closeNavigation}
                  >
                    <span className="icons">
                      <i className="fas fa-tree" />
                    </span>
                    <span className="notification-title">Logout</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="main">
          <div className="topbar d-lg-none">
            <div className="search-prt">
              <div>
                <i
                  id="menu-btn"
                  onClick={toggleNavigation}
                  className="fas fa-bars"
                />
              </div>
            </div>
            {/* <div className="user">
              <NavLink className="contact-uss" to={"/"}></NavLink>
              <div className="dropdown d_down-edit">
                <button
                  className="btn btn-secondary dropdown-toggle d_btn-edit"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="user-img"
                    src="/images/navbar/profile.jpg"
                    alt=""
                  />
                </button>
                <ul className="dropdown-menu profile_section">
                  <li className="p_list">
                    <NavLink className="dropdown-item d_items" to={"/"}>
                      profile
                    </NavLink>
                  </li>
                  <li className="p_list">
                    <NavLink className="dropdown-item d_items" to={"/"}>
                      setting
                    </NavLink>
                  </li>
                  <li className="p_list">
                    <NavLink className="dropdown-item d_items" >
                      logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";

// const Layout = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleNavigation = () => {
//     setIsActive(!isActive);
//   };
//   const closeNavigation = () => {
//     setIsActive(false);
//   };

//   return (
//     <>
//       <div className="containr">
//         <div id="navigation" className={isActive ? "active" : ""}>
//           <ul className="nav-ul ">
//             {/* <li className="nav-li editli">
//               <span className="logo-main">LOGO</span>
//               <NavLink id="closebtn" onClick={toggleNavigation}>
//                 <i className="fas fa-times dashboardLeft-icons" />
//               </NavLink>
//             </li> */}
//             <li className="nav-li ">
//               <NavLink
//                 className="anchor-edit"

//                 onClick={closeNavigation}
//               >
//                 <span className="icon">
//                   <i className="fas fa-user dashboardLeft-icons"></i>
//                 </span>
//                 <span className="title">Overview</span>
//               </NavLink>
//             </li>
//             <li className="nav-li ">
//               <NavLink className="anchor-edit" to={"/product"} onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-leaf dashboardLeft-icons"></i>
//                 </span>
//                 <span className="title">Products</span>
//               </NavLink>
//             </li>
//             <li className="nav-li ">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-hiking dashboardLeft-icons" />
//                 </span>
//                 <span className="title">Orders</span>
//               </NavLink>
//             </li>
//             <li className="nav-li">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-rocket dashboardLeft-icons" />
//                 </span>
//                 <span className="title">Custemers</span>
//               </NavLink>
//             </li>
//             <li className="nav-li">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   {/* <i className="fas fa-home" /> */}
//                   <i class="fa-brands fa-pagelines dashboardLeft-icons"></i>
//                 </span>
//                 <span className="title">Return</span>
//               </NavLink>
//             </li>
//             <li className="nav-li">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-tree" />
//                 </span>
//                 <span className="title">Exchange</span>
//               </NavLink>
//             </li>
//             <li className="nav-li">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-tree" />
//                 </span>
//                 <span className="title">Visa</span>
//               </NavLink>
//             </li>
//             <li className="nav-li">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-tree" />
//                 </span>
//                 <span className="title">Newsletter</span>
//               </NavLink>
//             </li>
//             <li className="nav-li">
//               <NavLink className="anchor-edit" onClick={closeNavigation}>
//                 <span className="icon">
//                   <i className="fas fa-tree" />
//                 </span>
//                 <span className="title">Inquire</span>
//               </NavLink>
//             </li>

// <li className="nav-li nav-li2">
//   <ul className="p-0">
//   <li className="nav-li "></li>
//   <li className="nav-li ">
//     <NavLink className="anchor-edit" onClick={closeNavigation}>
//       <span className="icon">
//         <i className="fas fa-leaf"></i>
//       </span>
//       <span className="title">Notification</span>
//     </NavLink>
//   </li>
//   <li className="nav-li ">
//     <NavLink className="anchor-edit" onClick={closeNavigation}>
//       <span className="icon">
//         <i className="fas fa-leaf"></i>
//       </span>
//       <span className="title">Logout</span>
//     </NavLink>
//   </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//         <div id="main">
//           <div className="topbar">
//             <div className="search-prt">
//               <div>
//                 <i
//                   id="menu-btn"
//                   onClick={toggleNavigation}
//                   className="fas fa-bars"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="dashboard-content">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
