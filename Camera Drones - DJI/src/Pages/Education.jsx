import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Education = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [order, setOrder] = useState(null);
  const [order2, setOrder2] = useState(null);
  const [page, setPage] = useState(1);

  const [series, setSeries] = useState(null);
  const [type, setType] = useState(null);

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/enterprise`, {
      params : {
        _page : page,
        _limit : 48,
        series: series,
        type: type,
        _sort : "price",
        _order : order
      }
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  const getDataFromServer2 = () => {
    axios.get(`http://localhost:3000/education?_page=${page}&_limit=48`, {
      params : {
        _page : page,
        _limit : 48,series: series,
        type: type,
        _sort : "price",
        _order : order2
      }
    })
      .then((res) => setData2(res.data))
      .catch((err) => console.log(err))
  }

  // For Series Filter
  const handleChange = (e) => {
    if (e.target.checked) {
      setSeries(e.target.value)
    }
  }

  useEffect(() => {
    getDataFromServer();
  }, [page, order, series, type])

  useEffect(() => {
    getDataFromServer2();
  }, [page, order2, series, type])

  return (
    <>
      <div className="container product-section ps-0 pe-0 ps-sm-0 pe-sm-0 ps-xxl-5 pe-xxl-5">
        <div className="product-sec-title p-4 ps-sm-2 pe-sm-2 d-flex justify-content-center p-sm-4 pb-xl-5">
          <h1>Education & Industry</h1>
        </div>
        <nav className='d-flex justify-content-center'style={{ borderBottom: "2px solid #f5f5f5" }}>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Enterprise</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Education</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              <div className="filter col-12 p-4 pb-0 p-sm-4 col-sm-3 ps-sm-3 pe-xl-3 ps-xxl-5 pe-xxl-2">
                <div className="d-flex justify-content-between mb-2 ps-1 pe-1 ps-sm-0 pe-sm-0">
                  <h5>Filter</h5>
                  <a href="">Reset</a>
                </div>
                <div className='pb-3 ps-1 pe-1 ps-sm-0 pe-sm-0' style={{ borderBottom: "2px solid #f5f5f5" }}>
                  <h6 className='mb-3'>Product Series</h6>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Matrice 350 RTK"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Matrice 350 RTK</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"DJi Mavic 3 Enterprice"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">DJi Mavic 3 Enterprice</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"M30"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">M30</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Payloads"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Payloads</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Mavic 2 Enterprice"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Mavic 2 Enterprice</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Phantom 4 RTX"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Phantom 4 RTX</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Developer Tools"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Developer Tools</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"M200 V2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">M200 V2</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"M300"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">M300</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Software"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Software</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Flight Controllers"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Flight Controllers</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Livox"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Livox</label>
                  </div>
                </div>
                <div className='pt-3 pb-3 ps-1 ps-sm-0' style={{ borderBottom: "2px solid #f5f5f5" }}>
                  <h6 className='mb-3'>Product Types</h6>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"main-product"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                    <label htmlFor="">Main Products</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"accessory"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                    <label htmlFor="">Accessory</label>
                  </div>
                </div>
              </div>
              <div className="product-list col-12 p-4 col-sm-9 pe-sm-2 ps-sm-2 ps-xl-3 pe-xxl-4">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center ps-2 pe-2 mb-3">
                  <p className='mb-3 mb-sm-0'>{data.length} Item(s) Found</p>
                  <div className="sort p-1 ps-3 pe-3">
                    <select name="" id="" onChange={(e) => setOrder(e.target.value)}>
                      <option value="">Sort by: Recommendation</option>
                      <option value="asc">Price from low to high</option>
                      <option value="desc">Price from high to low</option>
                    </select>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    {data.map((el) => (
                      <div key={el.id} className="product col-12 ps-2 pe-2 mb-3 col-sm-6 col-lg-4">
                        <div style={{ backgroundColor: "#f5f5f5" }}>
                          <Link className='d-flex justify-content-center'  to={`/description/${el.id}`}>
                            <img className='product-img' src={el.image} alt="" />
                          </Link>
                          <div className="p-3 pt-0 p-sm-4">
                            <h6>{el.title}</h6>
                            <div className='d-flex justify-content-between align-items-center'>
                              <span className='d-flex align-items-center pt-2'>USD $<h4>{el.price}</h4></span>
                              <button><MdOutlineArrowForwardIos /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className='d-flex justify-content-center align-items-center p-4'>
                      <button className='me-4' onClick={() => setPage(page - 1)} disabled={page == 1}>Prev</button>
                      <p className='mb-0'>{page}</p>
                      <button className='ms-4' onClick={() => setPage(page + 1)} disabled={page == 3}>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="row">
              <div className="filter col-12 p-4 pb-0 p-sm-4 col-sm-3 ps-sm-3 pe-xl-3 ps-xxl-5 pe-xxl-2">
                <div className="d-flex justify-content-between mb-2 ps-1 pe-1 ps-sm-0 pe-sm-0">
                  <h5>Filter</h5>
                  <a href="">Reset</a>
                </div>
                <div className='pb-3 ps-1 pe-1 ps-sm-0 pe-sm-0' style={{ borderBottom: "2px solid #f5f5f5" }}>
                  <h6 className='mb-3'>Product Series</h6>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"RoboMaster S1"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">RoboMaster S1</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"RoboMaster TT"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">RoboMaster TT</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"RoboMaster"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">RoboMaster</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"Tello"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                    <label htmlFor="">Tello</label>
                  </div>
                </div>
                <div className='pt-3 pb-3 ps-1 ps-sm-0' style={{ borderBottom: "2px solid #f5f5f5" }}>
                  <h6 className='mb-3'>Product Types</h6>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"main-product"} type="radio"  onChange={(e) => setType(e.target.value)} name="product-type" />
                    <label htmlFor="">Main Products</label>
                  </div>
                  <div className='pt-2 pb-2 d-flex align-items-center'>
                    <input className='me-2' value={"accessory"} type="radio"  onChange={(e) => setType(e.target.value)} name="product-type" />
                    <label htmlFor="">Accessory</label>
                  </div>
                </div>
              </div>
              <div className="product-list col-12 p-4 col-sm-9 pe-sm-2 ps-sm-2 ps-xl-3 pe-xxl-4">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center ps-2 pe-2 mb-3">
                  <p className='mb-3 mb-sm-0'>{data2.length} Item(s) Found</p>
                  <div className="sort p-1 ps-3 pe-3">
                    <select name="" id="" onChange={(e) => setOrder2(e.target.value)}>
                      <option value="">Sort by: Recommendation</option>
                      <option value="asc">Price from low to high</option>
                      <option value="desc">Price from high to low</option>
                    </select>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    {data2.map((el) => (
                      <div key={el.id} className="product col-12 ps-2 pe-2 mb-3 col-sm-6 col-lg-4">
                        <div style={{ backgroundColor: "#f5f5f5" }}>
                          <Link className='d-flex justify-content-center' to={`/description/${el.id}`}>
                            <img className='product-img' src={el.image} alt="" />
                          </Link>
                          <div className="p-3 pt-0 p-sm-4">
                            <h6>{el.title}</h6>
                            <div className='d-flex justify-content-between align-items-center'>
                              <span className='d-flex align-items-center pt-2'>USD $<h4>{el.price}</h4></span>
                              <button><MdOutlineArrowForwardIos /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className='d-flex justify-content-center align-items-center p-4'>
                      <button className='me-4' onClick={() => setPage(page - 1)} disabled={page == 1}>Prev</button>
                      <p className='mb-0'>{page}</p>
                      <button className='ms-4' onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Education
