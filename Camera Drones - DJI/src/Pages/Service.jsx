import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Service = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    // const [itemsPerPage, setItemsPerPage] = useState(48); // Default limit
    // const [totalPages, setTotalPages] = useState(0);

    const [order, setOrder] = useState(null);
    const [series, setSeries] = useState(null);
    const [type, setType] = useState(null);
    // console.log(name)

    const getDataFromServer = () => {
        axios.get(`http://localhost:3000/service`, {
            params: {
                _page: page,
                _limit: 48,
                series: series,
                type: type,
                _sort: "price",
                _order: order
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    // const total = Math.ceil(data.length / itemsPerPage);
    // setTotalPages(total);

    // For Series Filter
    const handleChange = (e) => {
        if (e.target.checked) {
            setSeries(e.target.value)
        }
    }

    useEffect(() => {
        getDataFromServer()
    }, [page, series, type, order])

    return (
        <>
            <div className="container product-section ps-0 pe-0 ps-sm-0 pe-sm-0 ps-xxl-5 pe-xxl-5">
                <div className="product-sec-title p-4 ps-sm-2 pe-sm-2 d-flex justify-content-center p-sm-4" style={{ borderBottom: "2px solid #f5f5f5" }}>
                    <h1>Shop DJI Care and other services</h1>
                </div>
                <div className="row">
                    <div className="filter service-filter col-12 p-4 pb-0 p-sm-4 col-sm-3 ps-sm-3 pe-xl-3 ps-xxl-5 pe-xxl-2">
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
                                                <input className='me-2' value={"DJI Mavic 3 Pro"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mavic 3 Pro</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Mavic 3 Classic"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mavic 3 Classic</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Mavic 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mavic 3</label>
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
                                                <input className='me-2' value={"DJI Air 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Air 3</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Air 2S"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Air 2S</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"Mavic Air 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Mavic Air 2</label>
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
                                                <input className='me-2' value={"DJI Mini 4 Pro"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mini 4 Pro</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Mini 3 Pro"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mini 3 Pro</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Mini 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mini 3</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Mini 2 SE"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mini 2 SE</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI Mini 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mini 2</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI Mini SE"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mini SE</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Mavic Mini"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
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
                                                <input className='me-2' value={"DJI Avata 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Avata 2</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Avata"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
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
                                                <input className='me-2' value={"DJI FPV"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI FPV</label>
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
                                                <input className='me-2' value={"DJI Inspire 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Inspire 3</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"Inspire 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Inspire 2</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header">
                                        <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven">
                                            Osmo Action
                                        </p>
                                    </h2>
                                    <div id="flush-collapseSeven" className="accordion-collapse collapse">
                                        <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Osmo Action 4"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Osmo Action 4</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"Osmo Action 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Osmo Action 3</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Action 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Action 2</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header">
                                        <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight">
                                            Osmo Pocket
                                        </p>
                                    </h2>
                                    <div id="flush-collapseEight" className="accordion-collapse collapse">
                                        <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Osmo Pocket 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Osmo Pocket 3</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Pocket 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Pocket 2</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header">
                                        <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine">
                                            Osmo Mobile
                                        </p>
                                    </h2>
                                    <div id="flush-collapseNine" className="accordion-collapse collapse">
                                        <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Osmo Mobile 6"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Osmo Mobile 6</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"Osmo Mobile SE"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Osmo Mobile SE</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI OM 5"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI OM 5</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI OM 4 SE"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI OM 4 SE</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header">
                                        <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen">
                                            Ronin Cinema Cameras
                                        </p>
                                    </h2>
                                    <div id="flush-collapseTen" className="accordion-collapse collapse">
                                        <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI Ronin 4D"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Ronin 4D</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header">
                                        <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven">
                                            Ronin Stabilizers
                                        </p>
                                    </h2>
                                    <div id="flush-collapseEleven" className="accordion-collapse collapse">
                                        <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI RS 4 Pro"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RS 4 Pro</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI RS 4"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RS 4</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI RS 3 Mini"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RS 3 Mini</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI RS 3 Pro"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RS 3 Pro</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI RS 3"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RS 3</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI RS 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RS 2</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"DJI RSC 2"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI RSC 2</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ border: "none" }}>
                                    <h2 className="accordion-header">
                                        <p className="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve">
                                            Enterprise
                                        </p>
                                    </h2>
                                    <div id="flush-collapseTwelve" className="accordion-collapse collapse">
                                        <div className="accordion-body ps-0 pe-0 pt-1 pb-1">
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Matrice 350 RTK"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Matrice 350 RTK</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"DJI Mavic 3 Enterprise"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">DJI Mavic 3 Enterprise</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"M30"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">M30</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex'>
                                                <input className='me-2' value={"Payloads"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Payloads</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Mavic 2 Enterprise"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Mavic 2 Enterprise</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"Phantom 4 RTK"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">Phantom 4 RTK RS 2</label>
                                            </div>
                                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                                <input className='me-2' value={"M300"} type="radio" onChange={(e) => handleChange(e)} name="product-series" />
                                                <label htmlFor="">M300</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3 pb-3 ps-1 ps-sm-0' style={{ borderBottom: "2px solid #f5f5f5" }}>
                            <h6 className='mb-3'>Product Types</h6>
                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                <input className='me-2' value={"DJI Care Refresh"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                                <label htmlFor="">DJI Care Refresh</label>
                            </div>
                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                <input className='me-2' value={"License Key"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                                <label htmlFor="">License Key</label>
                            </div>
                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                <input className='me-2' value={"DJI Care Pro"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                                <label htmlFor="">DJI Care Pro</label>
                            </div>
                            <div className='pt-2 pb-2 d-flex align-items-center'>
                                <input className='me-2' value={"Renewed DJI Care Enterprise"} type="radio" onChange={(e) => setType(e.target.value)} name="product-type" />
                                <label htmlFor="">Renewed DJI Care Enterprise</label>
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
                                    <button className='me-4 pagination-btn' onClick={() => setPage(page - 1)} disabled={page == 1}>Prev</button>
                                    <p className='mb-0 page-count' style={{ fontSize: "18px", fontWeight: "700" }}>{page}</p>
                                    <button className='ms-4 pagination-btn' onClick={() => setPage(page + 1)} disabled={page == 7}>Next</button>
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

export default Service
