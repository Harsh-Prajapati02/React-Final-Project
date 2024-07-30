import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Store = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/products?_page=${page}&_limit=10`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getDataFromServer();
  }, [page])

  return (
    <>
      <div className="container product-section ps-5 pe-5">
        <div className="product-sec-title p-4 d-flex justify-content-center" style={{ borderBottom: "2px solid #f5f5f5" }}>
          <h1>Shop Camera Drones</h1>
        </div>
        <div className="row">
          <div className="filter col-3 p-4 ps-5 pe-2">
            <div className="d-flex justify-content-between mb-2">
              <h5>Filter</h5>
              <a href="">Reset</a>
            </div>
            <div className='pb-3' style={{ borderBottom: "2px solid #f5f5f5" }}>
              <h6 className='mb-2'>Product Series</h6>
              <div className="accordion accordion-flush">
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                      DJI Mavic
                    </p>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mavic 3 Pro</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mavic 3 Classic</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mavic 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Mavic 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Mavic Pro</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                      DJI Air
                    </p>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-1 pb-1 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Air 3</label>
                      </div>
                      <div className='pt-1 pb-1 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Air 25</label>
                      </div>
                      <div className='pt-1 pb-1 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Mavic Air 2</label>
                      </div>
                      <div className='pt-1 pb-1 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Mavic Air</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                      DJI Mini
                    </p>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mini 4 Pro</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mini 3 Pro</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mini 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mini 2 SE</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mini 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Mini SE</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Mavic Mini</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                      DJI Avata
                    </p>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-1 pb-1 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Avata 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Avata</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">
                      DJI FPV
                    </p>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI FPV</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Digital FPV System</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Dji 03 Air Unit</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix">
                      Inspire
                    </p>
                  </h2>
                  <div id="flush-collapseSix" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-1 pb-1 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">DJI Inspire 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Inspire 2</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven">
                      Phantom
                    </p>
                  </h2>
                  <div id="flush-collapseSeven" className="accordion-collapse collapse">
                    <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' type="checkbox" />
                        <label htmlFor="">Phantom 4 Series</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-3 pb-3'>
              <h6 className='mb-2'>Product Types</h6>
              <div className='pt-2 pb-2 d-flex align-items-center'>
                <input className='me-2' type="checkbox" />
                <label htmlFor="">Main Products</label>
              </div>
              <div className='pt-2 pb-2 d-flex align-items-center'>
                <input className='me-2' type="checkbox" />
                <label htmlFor="">Accessory</label>
              </div>
              <div className='pt-2 pb-2 d-flex align-items-center'>
                <input className='me-2' type="checkbox" />
                <label htmlFor="">Services</label>
              </div>
            </div>
          </div>
          <div className="product-list col-9 p-4 ps-3">
            <div className="d-flex justify-content-between align-items-center ps-2 pe-2 mb-3">

              <p className='mb-0'>35 Item(s) Found</p>
              <div className="sort p-1 ps-3 pe-3">
                <select name="" id="">
                  <option value="">Sort by</option>
                  <option value="">Price from low to high</option>
                  <option value="">Price from high to low</option>
                </select>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                {data.map((el) => (
                  <div key={el.id} className="product col-4 ps-2 pe-2 mb-3">
                    <div style={{ backgroundColor: "#f5f5f5" }}>
                      <img src={el.image} height={272} alt="" />
                      <div className="p-4">
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
                  <button className='me-4' onClick={() => setPage(page - 1)}>Prev</button>
                  <p className='mb-0'>{page}</p>
                  <button className='ms-4' onClick={() => setPage(page + 1)}>Next</button>
                </div>
                {/* <div className="product col-4 ps-2 pe-2 mb-3">
                <div style={{ backgroundColor: "#f5f5f5" }}>
                  <img src="https://se-cdn.djiits.com/tpc/uploads/spu/cover/7820c86b51011167f9a8221353e20518@xlarge.png" height={272} alt="" />
                  <div className="p-4">
                    <h6>DJI Avata 2 Fly More Combo (Single Battery)</h6>
                    <p className='d-flex align-items-center'>USD $<h4>2199</h4></p>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Store
