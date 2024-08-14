import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import CartBtn from '../Components/CartBtn';

const Description = () => {

  const [data, setData] = useState({})
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const params = useParams()
  const getSingleData = () => {
    axios.get(`http://localhost:3000/products/${params.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSingleData()
  }, [])

  const postData = () => {
    axios.post("http://localhost:3000/cart", data)
      .then((res) => {
        alert("Added Successfully...")
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  const { title, price, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8 } = data

  return (
    <>
      <div className="container description p-3 pt-2 p-sm-2 pt-sm-3 pt-lg-2 pt-xl-4 p-xxl-5" style={{ borderBottom: "2px solid #f5f5f5" }}>
        <div className="row p-2 pt-1 p-sm-2">
          <div className="description-slider col-12 ps-0 pb-1 pe-0 col-sm-12 ps-sm-0 pe-sm-0 pb-sm-3 ps-md-5 pe-md-5 col-lg-6 ps-lg-0 pe-lg-4 pb-lg-0 ps-xl-5 pe-xl-5">
            {/* <div className="des-prod-img d-flex justify-content-center">
              <img src={image} height={500} alt="" />
            </div> */}
            <Swiper
              style={{
                '--swiper-navigation-color': 'lightgray',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={slide1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide6} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide7} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide8} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={8}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slide1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide6} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide7} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide8} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="description-content col-12 ps-1 pe-1 pt-3 col-sm-12 ps-sm-0 pe-sm-0 pt-sm-4 pb-sm-3 col-lg-6 pt-lg-3 ps-xl-4 ps-xxl-5 pe-xxl-5 pt-xxl-0">
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
      <div className='description-images p-0 pt-4 text-center ps-sm-0 pe-sm-0 pt-sm-4 ps-md-3 pe-md-3 pt-lg-5 p-xxl-5'>
        <h2 className='description-images-title mb-1 mb-sm-0'>Take a Closer Look</h2>
        <div className="row justify-content-center">
          <div className="col-12 p-0 pt-4 pb-4 col-sm-12 p-sm-4 pe-sm-3 col-lg-10 pt-lg-5 col-xxl-8 p-xl-5">
            <img className='description-image1' src="https://se-cdn.djiits.com/tpc/uploads/image/file/99057e014f27e102ed4c8fce04914b53@origin.jpg" alt="" />
            <img className='description-image2' src="https://se-cdn.djiits.com/tpc/uploads/image/file/94b0f1f471b80bf634cc4fd846a1a95c@origin.jpg" alt="" />
            <img className='description-image3' src="https://se-cdn.djiits.com/tpc/uploads/image/file/6048af804cf6d48487027ea347e24ca7@origin.jpg" alt="" />
            <img className='description-image4' src="https://se-cdn.djiits.com/tpc/uploads/image/file/02663997c5b90a3b16a907d59ef94b03@origin.jpg" alt="" />
            <img className='description-image5' src="https://se-cdn.djiits.com/tpc/uploads/image/file/2f899d6abc7b00cc62fc8b87cf1d1eed@origin.jpg" alt="" />
            <img className='description-image6' src="https://se-cdn.djiits.com/tpc/uploads/image/file/2591d998bf995c77f09cbf5d858c7788@origin.jpg" alt="" />
            <img className='description-image7' src="https://se-cdn.djiits.com/tpc/uploads/image/file/e0a2fd6f271bb63b31c6c2bfd64e0552@origin.jpg" alt="" />
            <img className='description-image8' src="https://se-cdn.djiits.com/tpc/uploads/image/file/4f69cb91b31866aa312f8fcbfb6d2fa6@origin.jpg" alt="" />
            <img className='description-image9' src="https://se-cdn.djiits.com/tpc/uploads/image/file/3a20ba5d9bbe84969e96568890603c30@origin.jpg" alt="" />
          </div>
        </div>
      </div>

      <Footer />

      <div className='add-to-cart p-3 d-flex justify-content-center'>
        <Link to={"/cart"}>
          <button onClick={postData} className='add-to-cart-btn'>Add To Cart</button>
        </Link>
      </div>
    </>
  )
}

export default Description
