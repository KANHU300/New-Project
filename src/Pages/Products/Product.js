import { Swiper, SwiperSlide } from "swiper/react";
import { useForm } from "react-hook-form";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React, { useState, useRef } from "react";
// import dayjs from "dayjs";

import CustomButton from "../../Components/CustomButton/CustomButton";
import prevButtonImage from "../../Pages/Dashboard/left-arow.svg";
import nextButtonImage from "../../Pages/Dashboard/right-arrow.svg";
import DateSelector from "../../Components/Calender/Calender";

const Product = () => {
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date
  const [startDate, setStartDate] = useState(null); // State for start date
  const [endDate, setEndDate] = useState(null); // State for end date

  // ... (your existing code)

  const handleStartDateSelect = (date) => {
    setStartDate(date);
    clickButtonAutomatically();
  };

  const handleEndDateSelect = (date) => {
    setEndDate(date);
    clickButtonAutomatically();
  };

  //calender buttoon auto close scriptss///
  const buttonRef = useRef(null);

  const clickButtonAutomatically = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  // const handleDateSelect = (date) => {
  //   setSelectedDate(date);
  //   clickButtonAutomatically();
  // };

  // image add and view logic here////
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };
  // custom button on click logic here////
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  // form logic here////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Update productInfo based on the entered product name
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      name: data.productName || "",
      color: data.ProductColor || "",
    }));

    // Handle form submission
    console.log(data);
  };
  //right card logic here/////
  const [productInfo, setProductInfo] = useState({
    name: "",
    size: "M", // Assuming default size is M
    color: "", // Assuming default color
    price: "Rs. 3,000", // Assuming default price
  });

  return (
    <>
      <div className="rightDashboard-data">
        <h2 className="product-title">Products</h2>
        <ul className="nav nav-tabs btnsTop-nav" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link edit-tabBtns active"
              id="Overview-tab"
              data-bs-toggle="tab"
              data-bs-target="#Overview"
              type="button"
              role="tab"
              aria-controls="Overview"
              aria-selected="true"
            >
              Overview
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link edit-tabBtns"
              id="Description-tab"
              data-bs-toggle="tab"
              data-bs-target="#Description"
              type="button"
              role="tab"
              aria-controls="Description"
              aria-selected="false"
            >
              Description
            </button>
          </li>
          <li className="nav-item" ref={buttonRef} role="presentation">
            <button
              className="nav-link edit-tabBtns"
              id="Pricing-tab"
              data-bs-toggle="tab"
              data-bs-target="#Pricing"
              type="button"
              role="tab"
              aria-controls="Pricing"
              aria-selected="false"
            >
              Pricing
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link edit-tabBtns"
              id="Confirmation-tab"
              data-bs-toggle="tab"
              data-bs-target="#Confirmation"
              type="button"
              role="tab"
              aria-controls="Confirmation"
              aria-selected="false"
            >
              Confirmations
            </button>
          </li>
        </ul>
        <div className="tab-content tabData-below" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Overview"
            role="tabpanel"
            aria-labelledby="Overview-tab"
          >
            <div className="overview-dataBelow">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="left-productData">
                      <h1 className="product-imge">Product Image</h1>
                      {/* <div className="add-imagesBelow">
                      <div className="images-list">
                        <img
                          src="/images/12.jpg"
                          alt="no-imge"
                          className="image-item"
                        />
                      </div>
                      <div className="images-list">
                        <img
                          src="/images/12.jpg"
                          alt="no-imae"
                          className="image-item"
                        />
                      </div>
                      <div className="images-list addBtn">
                        <label htmlFor="imageInput" className="add-imageBtn">
                          <i className="fas fa-plus add-iccon"></i>
                          <p className="add-text">Add Image</p>
                        </label>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>
                      <div className="images-list addBtn">
                        <label htmlFor="imageInput" className="add-imageBtn">
                          <i className="fas fa-plus add-iccon"></i>
                          <p className="add-text">Add Image</p>
                        </label>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>

                      <div className="images-list addBtn">
                        <label htmlFor="imageInput" className="add-imageBtn">
                          <i className="fas fa-plus add-iccon"></i>
                          <p className="add-text">Add Image</p>
                        </label>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>
                    </div> */}
                      <div className="add-imagesBelow">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="images-list">
                            <img
                              src={image}
                              alt={`imge-${index}`}
                              className="image-item"
                            />
                          </div>
                        ))}
                        <div className="images-list addBtn">
                          <label htmlFor="imageInput" className="add-imageBtn">
                            <i className="fas fa-plus add-iccon"></i>
                            <p className="add-text">Add Image</p>
                          </label>
                          <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                          />
                        </div>
                      </div>

                      <h1 className="product-imge">Product Name</h1>
                      <div className="inputt-Box">
                        <input
                          {...register("productName")}
                          type="text"
                          className="form-control dash-input"
                          id="exampleFormControlInput1"
                          placeholder="Enter Product Name"
                          required
                        />
                      </div>
                      <h1 className="product-imge">Category</h1>
                      <div className="catgory-data">
                        <div className="btn-group">
                          <select
                            {...register("gender")}
                            class="form-select male-btn"
                            aria-label="Default select example"
                            required
                          >
                            <option className=" Btndrop-item" value="female">
                              female
                            </option>
                            <option className=" Btndrop-item" value="male">
                              male
                            </option>
                            <option className=" Btndrop-item" value="other">
                              other
                            </option>
                          </select>
                        </div>
                        <div className="btn-group">
                          <select
                            {...register("productType")}
                            class="form-select male-btn"
                            aria-label="Default select example"
                            required
                          >
                            {/* <option selected>Open this menu</option> */}
                            <option className=" Btndrop-item" value="Female">
                              All
                            </option>
                            <option className=" Btndrop-item" value="Male">
                              Hillstation
                            </option>
                            <option className=" Btndrop-item" value="Other">
                              Beach
                            </option>
                          </select>
                        </div>

                        {/* <div className="btn-group">
                          <button
                            className="btn dropdown-toggle male-btn"
                            type="button"
                            id="defaultDropdown"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                          >
                            Hillstation
                            <span>
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </button>
                          <ul
                            className="dropdown-menu btnDrp-menu"
                            aria-labelledby="defaultDropdown"
                          >
                            <li>
                              <a
                                className="dropdown-item Btndrop-item"
                                href="#"
                              >
                                All
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item Btndrop-item"
                                href="#"
                              >
                                Hillstation
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item Btndrop-item"
                                href="#"
                              >
                                Beach
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        <div className="btn-group">
                          <button className="btn sub-categry">
                            <span className="add-icn">
                              <i className="fas fa-plus add-plusIcn"></i>
                            </span>
                            Sub Category
                          </button>
                        </div>
                      </div>

                      <h1 className="product-imge">Add Size</h1>
                      <div className="sizes-box">
                        <div className="size-m">M</div>
                        <button className="add-btnSize">
                          <i className="fas fa-plus add-iccon"></i>
                        </button>
                      </div>
                      <h1 className="product-imge">Add Colour</h1>
                      <div className="Colorinput-Box">
                        <input
                          {...register("ProductColor")}
                          type="text"
                          className="form-control colr-input"
                          id="exampleFormControlInput1"
                          placeholder="Enter Colour Code"
                          required
                        />
                        <input
                          {...register("ColorName")}
                          type="text"
                          className="form-control colr-input"
                          id="exampleFormControlInput1"
                          placeholder="Enter Colour Name"
                          required
                        />
                        <button className="btn add-color">
                          <span className="add-icn">
                            <i className="fas fa-plus add-plusIcn"></i>
                          </span>
                          Enter Colour
                        </button>
                      </div>
                      <h1 className="product-imge">Add Stock</h1>
                      <div className="Colorinput-Box">
                        <input
                          {...register("Stock")}
                          type="number"
                          className="form-control colr-input"
                          id="exampleFormControlInput1"
                          placeholder="Enter Stock"
                          required
                        />
                      </div>
                      <div className="save-continue">
                        <button
                          {...register("saveBtn")}
                          type="submit"
                          className="saveBtn"
                        >
                          Save
                        </button>

                        <button
                          {...register("continueBtn")}
                          type="submit"
                          className="saveBtn continue-btn"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="rightImge-data">
                      <div className="image-viewer">
                        <div className="card image-card">
                          <Swiper
                            navigation={{
                              nextEl: ".custom-next-button",
                              prevEl: ".custom-prev-button",
                            }}
                            modules={[Navigation]}
                            className="mySwiper Image-viewerInside"
                          >
                            {selectedImages.map((image, index) => (
                              <SwiperSlide key={index}>
                                <div className="item">
                                  <div className="image-top">
                                    <img
                                      src={image}
                                      className="card-img-top view-image"
                                      alt={`swiper-imge-${index}`}
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="card-body CardBody-edit">
                            <h5 className="dress-title">{productInfo.name}</h5>
                            <p className="dress-size">
                              Size: {productInfo.size}
                            </p>
                            <p className="dress-size">
                              Colour: {productInfo.color}
                            </p>
                            <p className="dress-price">{productInfo.price}</p>
                          </div>

                          {/* <div className="card-body CardBody-edit">
                            
                            <h5 className="dress-title">
                              RAREISM WOMENS ARIZU MAROON SHRUG FLORAL PRINT
                            </h5>
                            <p className="dress-size">Size: M</p>
                            <p className="dress-size">Colour: Mid Night Blue</p>
                            <p className="dress-price">Rs. 3,000</p>
                          </div> */}
                          <div className="custom-prev-button swiper-button-prev">
                          <img
                            className="next-iconn prev-icn"
                            src={prevButtonImage}
                            alt="Previous"
                          />
                        </div>
                        <div className="custom-next-button swiper-button-next">
                          <img
                            className="next-iconn"
                            src={nextButtonImage}
                            alt="Next"
                          />
                        </div>

                          {/* {selectedImages.length > 0 && (
                            <>
                              <div className="custom-prev-button swiper-button-prev">
                                <img
                                  className="next-iconn prev-icn"
                                  src={prevButtonImage}
                                  alt="Previous"
                                />
                              </div>
                              <div className="custom-next-button swiper-button-next">
                                <img
                                  className="next-iconn"
                                  src={nextButtonImage}
                                  alt="Next"
                                />
                              </div>
                            </>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="Description"
            role="tabpanel"
            aria-labelledby="Description-tab"
          >
            <div className="overview-dataBelow descrptin-data">
              <div className="row">
                <div className="col-8">
                  <div className="left-productData">
                    <h1 className="product-imge">Product Name</h1>
                    <div className="inputt-Box">
                      <input
                        type="email"
                        className="form-control dash-input"
                        id="exampleFormControlInput1"
                        placeholder="Tshirt yellow"
                      />
                    </div>
                    <h1 className="product-imge"> Description</h1>
                    <textarea
                      class="form-control dash-input"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Tshirt yellow"
                    ></textarea>

                    <div className="save-continue">
                      <button className="saveBtn">Save</button>
                      <button className="saveBtn continue-btn">Continue</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="rightImge-data">
                    <div className="image-viewer">
                      <div className="card image-card">
                        <Swiper
                          navigation={{
                            nextEl: ".custom-next-button",
                            prevEl: ".custom-prev-button",
                          }}
                          modules={[Navigation]}
                          className="mySwiper Image-viewerInside"
                        >
                          {selectedImages.map((image, index) => (
                              <SwiperSlide key={index}>
                                <div className="item">
                                  <div className="image-top">
                                    <img
                                      src={image}
                                      className="card-img-top view-image"
                                      alt={`swiper-imge-${index}`}
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          {/* <SwiperSlide>
                            <div className="item">
                              <div className="image-top">
                                <img
                                  src="/images/model.png"
                                  className="card-img-top view-image"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="item">
                              <div className="image-top">
                                <img
                                  src="/images/model.png"
                                  className="card-img-top view-image"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </SwiperSlide> */}
                        </Swiper>

                        <div className="card-body CardBody-edit">
                          <h5 className="dress-title">
                            RAREISM WOMENS ARIZU MAROON SHRUG FLORAL PRINT
                          </h5>
                          <p className="dress-size">Size: M</p>
                          <p className="dress-size">Colour: Mid Night Blue</p>
                          <p className="dress-price">Rs. 3,000</p>
                        </div>
                        {/* Custom navigation buttons */}
                        <div className="custom-prev-button swiper-button-prev">
                          <img
                            className="next-iconn prev-icn"
                            src={prevButtonImage}
                            alt="Previous"
                          />
                        </div>
                        <div className="custom-next-button swiper-button-next">
                          <img
                            className="next-iconn"
                            src={nextButtonImage}
                            alt="Next"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="Pricing"
            role="tabpanel"
            aria-labelledby="Pricing-tab"
          >
            <div className="overview-dataBelow">
              <div className="row">
                <div className="col-8">
                  <div className="left-productData">
                    <h1 className="product-imge">Add Price</h1>
                    <div className="inputt-Box">
                      <input
                        type="email"
                        className="form-control dash-input"
                        id="exampleFormControlInput1"
                        placeholder="Rs. 1500.00"
                      />
                    </div>
                    <h1 className="product-imge">Sale Price</h1>

                    <div className="inputt-Box">
                      <input
                        type="email"
                        className="form-control dash-input"
                        id="exampleFormControlInput1"
                        placeholder="Rs. 1500.00"
                      />
                    </div>
                    <div className=" Date-dataTop">
                      <label
                        htmlFor="inputAddress2"
                        className="form-label product-imge"
                      >
                        Start Date
                      </label>
                      <DateSelector
                        selectedDate={startDate}
                        onDateSelect={handleStartDateSelect}
                      />
                    </div>
                    <div className=" Date-dataTop">
                      <label
                        htmlFor="inputAddress2"
                        className="form-label product-imge"
                      >
                        End Date
                      </label>
                      <DateSelector
                        selectedDate={endDate}
                        onDateSelect={handleEndDateSelect}
                      />
                    </div>

                    <div className="save-continue">
                      <button className="saveBtn">Save</button>
                      <button className="saveBtn continue-btn">Continue</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="rightImge-data">
                    <div className="image-viewer">
                      <div className="card image-card">
                        <Swiper
                          navigation={{
                            nextEl: ".custom-next-button",
                            prevEl: ".custom-prev-button",
                          }}
                          modules={[Navigation]}
                          className="mySwiper Image-viewerInside"
                        >
                          <SwiperSlide>
                            <div className="item">
                              <div className="image-top">
                                <img
                                  src="/images/model.png"
                                  className="card-img-top view-image"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="item">
                              <div className="image-top">
                                <img
                                  src="/images/model.png"
                                  className="card-img-top view-image"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>

                        <div className="card-body CardBody-edit">
                          <h5 className="dress-title">
                            RAREISM WOMENS ARIZU MAROON SHRUG FLORAL PRINT
                          </h5>
                          <p className="dress-size">Size: M</p>
                          <p className="dress-size">Colour: Mid Night Blue</p>
                          <p className="dress-price">Rs. 3,000</p>
                        </div>
                        {/* Custom navigation buttons */}
                        <div className="custom-prev-button swiper-button-prev">
                          <img
                            className="next-iconn prev-icn"
                            src={prevButtonImage}
                            alt="Previous"
                          />
                        </div>
                        <div className="custom-next-button swiper-button-next">
                          <img
                            className="next-iconn"
                            src={nextButtonImage}
                            alt="Next"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="Confirmation"
            role="tabpanel"
            aria-labelledby="Confirmation-tab"
          >
            <div className="product-details">
              <div className="confirmed-imagesBelow">
                {selectedImages.map((image, index) => (
                  <div key={index} className="images-list">
                    <img
                      src={image}
                      alt={`imge-${index}`}
                      className="image-item"
                    />
                  </div>
                ))}
              </div>
              <div className="product-description">
                <h1 className="productImage-title">
                  RAREISM WOMENS ARIZU MAROON SHRUG FLORAL PRINT
                </h1>
                <h1 className="descript-title">DESCRIPTION</h1>
                <p className="desc-contents">
                  - A puffer jacket with a stand-up collar.
                </p>
                <p className="desc-contents">
                  - Includes a zipper at the front.
                </p>
                <p className="desc-contents">- Normal Fit</p>
                <p className="desc-contents">- Polyester Fabric SIZE & FIT</p>
                <p className="desc-contents">
                  SIZE & FIT <br />- The model (Bust-31, Waist-24, Hip-34,
                  Height-5'8") is wearing XS
                </p>
                <p className="desc-contents">
                  Note - This Product is Non Returnable and No Exchange
                </p>
              </div>
              <div className="productt-category">
                <h1 className="Categoryy-title">Category</h1>
                <p className="category-type">Male</p>
              </div>
              <div className="productt-category">
                <h1 className="Categoryy-title">Sub Category</h1>
                <p className="category-type">Hillstation</p>
              </div>
              <div className="product-options">
                <h1 className="size-title">Size</h1>
                <div className="size-options">
                  <button className="size-button">S</button>
                  <button className="size-button">M</button>
                  <button className="size-button">L</button>
                  <button className="size-button">XL</button>
                  <button className="size-button">XXL</button>
                  <br />
                </div>
              </div>
              <div className="color-quantityTop">
                <div className="color-options">
                  <p className="coloor-title">Color:</p>
                  <button
                    className="color-btn"
                    style={{ background: "red" }}
                  ></button>
                  <button
                    className="color-btn"
                    style={{ background: "blue" }}
                  ></button>
                  <button
                    className="color-btn"
                    style={{ background: "green" }}
                  ></button>
                </div>
              </div>
              <div className="prices-data">
                <p className="price-heading">Price</p>
                <p className="product-price">
                  Rs.<span>1500</span>
                </p>
              </div>

              {/* custom button  */}
              <CustomButton
                text="Post"
                color="#24a804"
                textColor="#FFFFFF"
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
