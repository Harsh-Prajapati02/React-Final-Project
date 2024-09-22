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
import { BsTicketDetailed } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

const Cart = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0)

  const getDataFromServer = () => {
    axios.get(`http://localhost:3000/cart`)
      .then((res) => {
        setData(res.data)
        for (let i = 0; i < res.data.length; i++) {
          setPrice(res.data[i].price)
        }
      })
      .catch((err) => console.log(err))
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then((res) => {
        console.log(res.data)
        alert("Product Deleted Successfully...")
        getDataFromServer();
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getDataFromServer()
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
                    <label htmlFor="">Quantity</label>
                  </div>
                  <div className="col-4">
                    <label htmlFor="">Price</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-product-detail container ps-0 pe-0">
            {data.map((el) => (
              <div key={el.id} className="row justify-content-between align-items-center p-4 ps-0 pe-0" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="col-1 p-0">
                  <div className='cart-product-image'>
                    <img src={el.image} height={128} alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <Link className='cart-product-title'>{el.title}</Link>
                </div>
                <div className="col-6 pe-0 ps-0">
                  <div className="row justify-content-end align-items-center">
                    <div className="col-3 ps-3">
                      <label htmlFor="" className='d-flex'>USD $<p className='mb-0'>{el.price}</p></label>
                    </div>
                    <div className="col-3 pe-5">
                      <div className='d-flex justify-content-between align-items-center cart-product-qty'>
                        <button onClick={() => {
                          setCount(count - 1)
                          setPrice(price - el.price)
                        }} disabled={count == 1} className='ps-2 pe-2 p-1' style={{ borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", borderRight: "1px solid gray" }}><PiMinusThin /></button>
                        <p className='mb-0'>{count}</p>
                        <button onClick={() => {
                          setCount(count + 1)
                          setPrice(price + el.price)
                        }} className='ps-2 pe-2 p-1' style={{ borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderLeft: "1px solid gray" }}><PiPlusThin /></button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className='d-flex justify-content-between align-items-center'>
                        <label htmlFor="" className='d-flex cart-product-price'>USD $<p className='mb-0'>{price}</p></label>
                        <button onClick={(id) => deleteProduct(el.id)} className='cart-delete-btn'><MdDelete className='cart-delete-icon' /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="row justify-content-between align-items-center">

              <div className="col-1 p-0">
                <div className='cart-product-image'>
                  <img src={"https://se-cdn.djiits.com/tpc/uploads/spu/cover/7820c86b51011167f9a8221353e20518@xlarge.png"} height={128} alt="" />
                </div>
              </div>
              <div className="col-4">
                <Link className='cart-product-title'>{"DJI Avata 2 Fly More Combo (Single Battery)"}</Link>
              </div>
              <div className="col-6 pe-0 ps-0">
                <div className="row justify-content-end align-items-center">
                  <div className="col-3 ps-3">
                    <label htmlFor="" className='d-flex'>USD $<p className='mb-0'>{999}</p></label>
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
                      <label htmlFor="" className='d-flex cart-product-price'>USD $<p className='mb-0'>{999}</p></label>
                      <button className='cart-delete-btn'><MdDelete className='cart-delete-icon' /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className='cart-bottom-content container p-4 ps-0 pe-0' style={{ borderBottom: "2px solid #f0f0f0" }}>
          <div className="row mb-3">
            <div className="col-6 d-flex align-items-start">
              <CiImageOn className='me-3 pt-1' style={{ fontSize: "22px" }} />
              <div>
                <p className='mb-0'>Enjoy a 1% rebate on every purchase in the form of DJI Credit - the more you buy, the more you earn.
                </p>
                <a href="">Learn more about DJI Credit <MdKeyboardArrowRight /></a>
              </div>
            </div>
            <div className="col-6 text-end d-flex justify-content-end">
              <div>
                <label className='d-flex align-items-center mb-3'>CART SUBTOTAL: <h4 className='ms-3 mb-0'>USD $2,199</h4></label>
                <div className='d-flex justify-content-end'>
                  <span className='me-2'>Tax :</span><p className='mb-0 d-flex align-items-center'>Calculated at checkout<BsQuestionCircle className='ms-2' /></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex align-items-start">
              <BsTicketDetailed className='me-3 pt-1' style={{ fontSize: "22px" }} />
              <div>
                <p className='mb-0'>Have a Coupon Code?</p>
                <span style={{ fontSize: "12px" }}>Proceed to checkout to use Coupons and DJI Credits.</span>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span className='me-2'>Shipping :</span><p className='mb-0'>Free</p>
            </div>
          </div>
        </div>

        <div className='cart-botton-btns pt-4 d-flex justify-content-between'>
          <Link to={"/store"} style={{ textDecoration: "none" }}>
            <button className='cart-shop-btn d-flex align-items-center'>Continue Shopping<MdKeyboardArrowRight />
            </button>
          </Link>
          <div className='d-flex'>
            <button className='cart-checkout-btn1 d-flex align-items-center me-3'>
              <img className='me-2' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" height={23} alt="" />
              Checkout
            </button>
            <button className='cart-checkout-btn2 d-flex align-items-center'>Check Out
            </button>
          </div>
        </div>
      </div>)}

    <Footer />
  </>
}

export default Cart
