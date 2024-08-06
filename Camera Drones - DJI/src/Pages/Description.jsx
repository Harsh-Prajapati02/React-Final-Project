import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Description = () => {

  const [data, setData] = useState({})

  const params = useParams()

  const getSingleData = () => {
    axios.get(`http://localhost:3000/products/${params.id}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSingleData()
  },[])

  const {image, title, price} = data

  return (
    <>
      <div className="container description p-5">
        <div className="row p-2">
          <div className="description-image col-6">
            <div className="des-prod-img d-flex justify-content-center">
              <img src={image} height={500} alt="" />
            </div>
          </div>
          <div className="description-content col-6">
            <div className="des-prod-content">
              <h2 className='des-prod-title mb-3'>{title}</h2>
              <span className='des-prod-price d-flex mb-2'>USD $<h4>{price}</h4></span>
              <div className="p-3 d-flex" style={{ backgroundColor: "#f6f8f9", borderRadius: "10px" }}>
                <div className="me-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6051 5.04635C10.8755 4.5298 9.80396 4 8.46663 4C5.45524 4 3 6.4095 3 9.39924C3 12.291 4.86606 14.7519 6.57728 16.4345C8.33825 18.166 10.2353 19.3653 10.8509 19.7361C11.4349 20.0873 12.1643 20.0878 12.7483 19.7366C13.3639 19.3658 15.2617 18.166 17.0227 16.4345C17.4321 16.032 17.8503 15.585 18.2497 15.0982L13.9351 10.7837L12.4505 11.8441C11.2917 12.6719 9.69061 12.466 8.77893 11.3719C7.87806 10.2909 7.95017 8.7013 8.94521 7.70627L11.6051 5.04635Z" fill="#595959"></path><path d="M18.9773 14.1288C19.9065 12.7649 20.6 11.1621 20.6 9.39924C20.6 6.4095 18.1448 4 15.1334 4C14.5719 4 14.0616 4.2869 13.6646 4.68391L9.79373 8.55479C9.23756 9.11097 9.19726 9.99948 9.70079 10.6037C10.2104 11.2152 11.1053 11.3303 11.753 10.8676L14.0649 9.21633L18.9773 14.1288Z" fill="#595959"></path></svg>
                </div>
                <div className="ms-1">
                  <h6>Free Shipping</h6>
                  <p>Provides official products, comprehensive services and free shipping for orders.</p>
                  <h6>Free Fast-Delivery Upgrade*</h6>
                  <p>* This limited-time offer is available for in-stock items. Fast delivery is not available for island addresses. Orders with island addresses or containing more than 2 batteries will be shipped via standard delivery methods.</p>
                  <h6>1% DJI Credit Reward</h6>
                  <p>1% DJI Credit reward on the paid value, which can be used to reduce order amounts in the same currency unit next time.</p>
                  <h6>14-Day Returns</h6>
                  <p className="mb-0">Easy shopping with hassle-free returns and replacements. *Some products have special return and replacement policies. Please refer to the information on the corresponding product detail page.</p>
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

export default Description
