import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiPlusThin } from "react-icons/pi";
import { PiMinusThin } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

const Cart = () => {

  const [data, setData] = useState({})

  const getSingleData = () => {
    axios.get(`http://localhost:3000/cart`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSingleData()
  }, [])

  return <>
    <div className='container-fluid cart-top-text pt-1 pb-1'>
      <div className="container p-2 ps-5 pe-5">
        <p className='mb-0'>Due to safe transport and handling procedures, orders containing batteries cannot be shipped to Guam addresses. Orders containing power stations and related accessories can not be shipped to island addresses such as Hawaii, Alaska, Guam, American Samoa, United States Minor Outlying Islands, and Virgin Islands. Thank you for your understanding.</p>
      </div>
    </div>

    {data.length == 0 ? (
      <div className="cart-content container p-5">
        <h1 className='mb-3'>Your Shopping Cart is Empty</h1>
        <div className='d-flex mb-5'>
          <p className='mb-0'>Your cart is empty, log in to synchronize the items in your shopping cart.</p>
          <Link className='cart-login-btn ms-4 d-flex align-items-center' to={"/login"}>Log In Now<MdKeyboardArrowRight className='ms-1' />
          </Link>
        </div>
        <Link to={"/store"} style={{ textDecoration: "none" }}>
          <button className='cart-shop-btn d-flex align-items-center'>Shop Now<MdKeyboardArrowRight />
          </button>
        </Link>
      </div>) :
      (<div className="cart-content container p-5 pt-4">
        <h1 className='mb-3'>My Shopping Cart</h1>
        <div className='d-flex mb-4'>
          <p className='mb-0'>Log in to synchronize the items in your shopping cart.</p>
          <Link className='cart-login-btn ms-4 d-flex align-items-center' to={"/login"}>Log In Now<MdKeyboardArrowRight className='ms-1' />
          </Link>
        </div>
        <div className="cart-product container p-0">
          <div className="cart-product-header" style={{ borderBottom: "2px solid #f0f0f0" }}>
            <div className="row justify-content-between pb-4">
              <div className="col-1 p-0 ps-3">
                <div>
                  <label htmlFor="">Item</label>
                </div>
              </div>
              <div className="col-6">
                <div className="row justify-content-end">
                  <div className="col-3">
                    <label htmlFor="">Item Price</label>
                  </div>
                  <div className="col-3">
                    <label htmlFor="">Quentity</label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="">Price</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-product-detail container p-4 ps-0 pe-0" style={{ borderBottom: "2px solid #f0f0f0" }}>
            <div className="row justify-content-between align-items-center">
              <div className="col-1 p-0">
                <div className='cart-product-image'>
                  <img src="https://se-cdn.djiits.com/tpc/uploads/spu/cover/9b1bb4e6929cb9c5d0ea22bf33eedffd@small.png" height={128} alt="" />
                </div>
              </div>
              <div className="col-4">
                <Link className='cart-product-title'>DJI Mavic 3 Pro (DJI RC)</Link>
              </div>
              <div className="col-6 pe-0 ps-0">
                <div className="row justify-content-end align-items-center">
                  <div className="col-3 ps-3">
                    <label htmlFor="" className='d-flex'>USD $<p className='mb-0'>2,199</p></label>
                  </div>
                  <div className="col-3 pe-5">
                    <div className='d-flex justify-content-between align-items-center cart-product-qty'>
                      <button className='ps-2 pe-2 p-1' style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", borderRight: "1px solid gray" }}><PiMinusThin /></button>
                      <p className='mb-0'>1</p>
                      <button className='ps-2 pe-2 p-1' style={{ borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderLeft: "1px solid gray" }}><PiPlusThin /></button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className='d-flex justify-content-between align-items-center'>
                      <label htmlFor="" className='d-flex cart-product-price'>USD $<p className='mb-0'>2,199</p></label>
                      <button className='cart-delete-btn'><MdDelete className='cart-delete-icon' /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container p-4 ps-0 pe-0' style={{ borderBottom: "2px solid #f0f0f0" }}>
          <div className="row mb-3">
            <div className="col-6 d-flex align-items-start">
              <CiImageOn className='me-3 pt-1' style={{ fontSize: "26px" }} />
              <p className='mb-0'>Enjoy a 1% rebate on every purchase in the form of DJI Credit - the more you buy, the more you earn.
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span className='d-flex align-item'>CART SUBTOTAL: <h4 className='ms-3'>USD $2,199</h4></span>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex align-items-start">
              <CiImageOn className='me-3 pt-1' style={{ fontSize: "22px" }} />
              <p className='mb-0'>Have a Coupon Code?</p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span className='d-flex align-item'>CART SUBTOTAL: <h4 className='ms-3'>USD $2,199</h4></span>
            </div>
          </div>
        </div>

        <div className='pt-4'>
          <Link to={"/store"} style={{ textDecoration: "none" }}>
            <button className='cart-shop-btn d-flex align-items-center'>Continue Shopping<MdKeyboardArrowRight />
            </button>
          </Link>
        </div>
      </div>)}

    <Footer />
  </>
}

export default Cart
