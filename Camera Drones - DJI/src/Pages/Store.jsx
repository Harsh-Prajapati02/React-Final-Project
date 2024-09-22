import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useSearchParams } from 'react-router-dom';

const Store = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // const [itemsPerPage, setItemsPerPage] = useState(48); // Default limit
  // const [totalPages, setTotalPages] = useState(0);

  const [order, setOrder] = useState(null);
  const [series, setSeries] = useState(null);
  const [type, setType] = useState(null);
  const [search, setSearch] = useState(null);

  // Multi-Level Filter
  let [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("category") || []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/products`, {
      params: {
        _page: page,
        _limit: 48,
        series: searchParams.getAll("category") || [],
        type: type,
        _sort: "price",
        _order: order,
        q: search
      }
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  // const total = Math.ceil(data.length / itemsPerPage);
  // setTotalPages(total);

  // For Series Filter
  const handleChange = (e) => {

    const { value } = e.target;
    let filterValue = [...category]

    if (filterValue.includes(value)) {
      filterValue = filterValue.filter((el) => el != value)
    } else {
      filterValue.push(value);
    }
    setCategory(filterValue);

    // if (e.target.checked) {
    //   setSeries(e.target.value)
    // }
  }

  useEffect(() => {
    getDataFromServer()
    setSearchParams({ category });
    // const id = setTimeout(() => {
    //   getDataFromServer();
    // }, 800)

    // return () => {
    //   clearInterval(id)
    // }
  }, [page, series, type, order, search, category, searchParams])

  return (
    <>
      <div className="container product-section ps-0 pe-0 ps-sm-0 pe-sm-0 ps-xxl-5 pe-xxl-5">
        <div className="product-sec-title p-4 ps-sm-2 pe-sm-2 d-flex justify-content-center p-sm-4" style={{ borderBottom: "2px solid #f5f5f5" }}>
          <h1>Shop Camera Drones</h1>
        </div>
        <div className="row">
          <div className="filter col-12 p-4 pb-0 p-sm-4 pb-sm-0 col-md-3 ps-sm-3 pe-md-2 pe-xl-3 ps-xxl-5 pe-xxl-2">
            <div className="d-flex justify-content-between mb-2 ps-1 pe-1 ps-sm-0 pe-sm-0">
              <h5>Filter</h5>
              <a href="">Reset</a>
            </div>
            <div className='pb-3 ps-1 pe-1 ps-sm-0 pe-sm-0' style={{ borderBottom: "2px solid #f5f5f5" }}>
              <h6 className='mb-3'>Product Series</h6>
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
                        <input className='me-2' 
                        value={"DJI Mavic 3 Pro"} 
                        type="checkbox" 
                        onChange={(e) => handleChange(e)} 
                        name="product-series"
                        checked={category.includes("DJI Mavic 3 Pro")} />
                        <label htmlFor="">DJI Mavic 3 Pro</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Mavic 3 Classic"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mavic 3 Classic")}/>
                        <label htmlFor="">DJI Mavic 3 Classic</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Mavic 3"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mavic 3")} />
                        <label htmlFor="">DJI Mavic 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"Mavic 2"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Mavic 2")}/>
                        <label htmlFor="">Mavic 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"Mavic Pro"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Mavic Pro")}/>
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
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' value={"DJI Air 3"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Air 3")} />
                        <label htmlFor="">DJI Air 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Air 2S"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Air 2S")} />
                        <label htmlFor="">DJI Air 2S</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"Mavic Air 2"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Mavic Air 2")} />
                        <label htmlFor="">Mavic Air 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"Mavic Air"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Mavic Air")} />
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
                        <input className='me-2' value={"DJI Mini 4 Pro"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mini 4 Pro")} />
                        <label htmlFor="">DJI Mini 4 Pro</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Mini 3 Pro"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mini 3 Pro")} />
                        <label htmlFor="">DJI Mini 3 Pro</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Mini 3"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mini 3")} />
                        <label htmlFor="">DJI Mini 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Mini 2 SE"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mini 2 SE")} />
                        <label htmlFor="">DJI Mini 2 SE</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' value={"DJI Mini 2"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mini 2")} />
                        <label htmlFor="">DJI Mini 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' value={"DJI Mini SE"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Mini SE")} />
                        <label htmlFor="">DJI Mini SE</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex align-items-center'>
                        <input className='me-2' value={"Mavic Mini"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Mavic Mini")} />
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
                        <input className='me-2' value={"DJI Avata 2"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Avata 2")} />
                        <label htmlFor="">DJI Avata 2</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI Avata"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Avata")} />
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
                        <input className='me-2' value={"DJI FPV"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI FPV")} />
                        <label htmlFor="">DJI FPV</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"DJI 03 Air Unit"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI 03 Air Unit")} />
                        <label htmlFor="">DJI 03 Air Unit</label>
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
                        <input className='me-2' value={"DJI Inspire 3"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("DJI Inspire 3")} />
                        <label htmlFor="">DJI Inspire 3</label>
                      </div>
                      <div className='pt-2 pb-2 d-flex'>
                        <input className='me-2' value={"Inspire 2"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Inspire 2")} />
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
                        <input className='me-2' value={"Phantom 4"} type="checkbox" onChange={(e) => handleChange(e)} name="product-series" checked={category.includes("Phantom 4")} />
                        <label htmlFor="">Phantom 4 Series</label>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className='pt-2 pb-2 d-flex align-items-center'>
                <input className='me-2' value={"service"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                <label htmlFor="">Services</label>
              </div>
            </div>
          </div>
          <div className="product-list col-12 p-4 pe-sm-2 ps-sm-2 col-md-9 ps-xl-3 pe-xxl-4">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center ps-2 pe-2 mb-3 flex-wrap">
              <p className='col-5 col-sm-5 mb-3 mb-sm-0 col-lg-2'>{data.length} Item(s) Found</p>
              <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search dji.com...' className='search ps-2 col-12 col-sm-7 mb-3 mb-sm-0 col-lg-5 col-xl-4' />
              <div className="sort p-1 ps-3 pe-3 mt-sm-3 mt-lg-0">
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

                {/* Pagination*/}
                <div className='d-flex justify-content-center align-items-center p-4'>
                  <button className='me-4 pagination-btn' onClick={() => setPage(page - 1)} disabled={page == 1}>Prev</button>
                  <p className='mb-0 page-count' style={{ fontSize: "18px", fontWeight: "700" }}>{page}</p>
                  <button className='ms-4 pagination-btn' onClick={() => setPage(page + 1)} disabled={page == 7}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Store
