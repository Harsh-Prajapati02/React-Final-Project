import React from 'react'
import Header from '../Components/Header'
// Icons
import { IoIosArrowForward } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
      <Header />

      {/* Main */}
      {/* Hero Card */}
      <div className='hero-card container-fluid ps-3 pe-3 ps-sm-3 pe-sm-3 ps-md-4 pe-md-4 ps-lg-3 pe-lg-3 ps-xl-4 pe-xl-4 ps-xxl-3 pe-xxl-3'>
        <div className='hero-card-title pt-5 pb-3  d-flex flex-column align-items-center p-sm-5 pt-sm-4 pb-sm-3'>
          <h1 className='mb-2 mb-sm-2 mb-xxl-4'>Camera Drones</h1>
          <p className='mb-0'>Capture your moments from above with</p>
          <p>a mini drone, FPV, or professional aerial camera.</p>
        </div>
        <div className='hero-card-banner p-5 d-flex flex-column align-items-center'>
          <span className='mb-2'>FPV Drone</span>
          <img className='hero-card-img mb-2' src="https://dji-official-fe.djicdn.com/dps/afb17757cc6ba0ebc3d26bf993cc7a90.svg" alt="" />
          <p>All Thrills, No Frills</p>
          <div>
            <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
            <a href="">Learn More<CiShare1 className='ms-1' />
            </a>
          </div>
        </div>
      </div>

      {/* Card Wrapper */}
      <div className="card-wrappers container-fluid pt-1 ps-md-3 pe-md-3">
        <div className="row p-2 ps-md-3 pe-md-3 ps-lg-1 pe-lg-1 ps-xl-3 pe-xl-3 ps-xxl-2 pe-xxl-2">
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 ps-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/c2cf5f3b8c738ee773a4035a4da36214.jpg)"}}>
              <span className='text-center mb-2 pt-2'>Multiple Focal Length Triple-Lens Flagship Camera Drone</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg" alt="" />
              <p className='mb-4'>Inspiration in Focus</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 pe-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/a0d11066ee221205f88cba5ff2f07836.jpg)" }}>
              <span className='mb-2 pt-2'>All-In-One Mini Drone</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg" height={28} alt="" />
              <p className='mb-4'>Mini to the Max</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 ps-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/e49a66fff20c5b41a43665582a770578.jpg)" }}>
              <span className='text-center mb-2 pt-2'>Advanced All-Around Drone With Dual Cameras
              </span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg" height={28} alt="" />
              <p className='mb-4'>Double Up</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 pe-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/2389a2287c637fb8ca719370290e30d7.jpg)" }}>
              <span className='mb-2 pt-2'>Integrated Aerial Cinema Camera</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg" height={28} alt="" />
              <p className='mb-4'>Master the Unseen</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Camera Drones */}
      <div className='quiz-camera-drones container p-4 ps-sm-3 pe-sm-3 pt-sm-4 ps-md-2 pe-md-2 p-xxl-5'>
        <div className="row ps-1 pe-1 p-sm-0 ps-md-1 pe-md-1 p-xl-0">
          <div className="quiz-drone-content col-6 p-4 d-flex flex-column justify-content-center text-center col-12 order-2 p-sm-4 col-md-6 order-md-2 text-md-start p-xl-5" style={{ backgroundColor: "#f5f5f5" }}>
            <h2 className='pe-3 mb-3'>Want to choose your perfect drone?</h2>
            <p className='mb-4'>Take a quick quiz to find your perfect drone match.</p>
            <button>Take a quiz</button>
          </div>
          <div className="col-6 quiz-drone-img col-12 order-1 col-md-6 order-md-2"></div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className='comparison-section container pb-4 pb-lg-5'>
        <h1 className='text-center mb-4 mt-sm-3 mt-md-4 mt-xl-2'>Which camera drone is right for you?</h1>
        <nav className='d-flex justify-content-center'>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Aerial Imaging</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Immersive Flight</button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className='container-fluid p-0 p-sm-0 ps-xl-5 pe-xl-5'>
              <div className="row pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png" alt="" />
                  <span className='mb-3'>Flagship</span>
                  <h2 className='mb-4'>DJI Mavic 3 Pro</h2>
                  <p>USD $2,199</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/a656cc79725b55d02616072360469ffd.png" alt="" />
                  <span className='mb-3 text-center'>Advanced</span>
                  <h2 className='mb-4'>DJI Air 3</h2>
                  <p>USD $1,099</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/892e39b4b76dc5a83b267ed12ce69b97.png" alt="" />
                  <span className='mb-3'>Entry</span>
                  <h2 className='mb-4'>DJI Mini 4 Pro</h2>
                  <p>USD $759</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/0e65b98eaee5cad6f74196e9594b99cd.png" alt="" />
                  <span className='mb-3'>Entry</span>
                  <h2 className='mb-4'>DJI Mini 3</h2>
                  <p>USD $419</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row pt-4 pb-3">
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <h1>958 g</h1>
                  <span>Takeoff Weight</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <h1>720 g</h1>
                  <span>Takeoff Weight</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <h1 className='d-flex align-items-center'><IoIosArrowBack />249 g</h1>
                  <span>Takeoff Weight</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <h1 className='d-flex align-items-center'><IoIosArrowBack />249 g</h1>
                  <span>Takeoff Weight</span>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p>43 mins Max Flight Time</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p>46-Min Max Flight Time</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p className='mb-1'>34/45-Min Max Flight Time</p>
                  <span className='text-center'>Depending on the Choice of Battery</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p className='mb-1'>38/51-Min Max Flight Time</p>
                  <span className='text-center'>Depending on the Choice of Battery</span>
                </div>
              </div>
              <div className="row pb-6">
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/622b35c1bd89ae5f7d1c9d71bcc89027.png" height={48} alt="" />
                  <p className='mb-0'>4/3 CMOS Hasselblad Camera</p>
                  <p className='text-center mb-0'>1/1.3-inch CMOS Medium Tele Camera</p>
                  <p className='text-center'>1/2-inch CMOS Tele Camera</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/e6d69d8526ae168721a188e57bc0ede9.svg" height={48} alt="" />
                  <p className='mb-0'>1/1.3-inch CMOS Wide-Angle Camera</p>
                  <p className='text-center'>1/1.3-inch CMOS Medium-Tele Camera</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/2174e1eac98cc8a86bfea6bbfb13e155.svg" height={48} alt="" />
                  <p>1/1.3-inch CMOS Wide-Angle Camera</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/cd0846ffff48ba7425dcb2a71b58f28c.svg" height={48} alt="" />
                  <p>1/1.3-inch CMOS</p>
                </div>
              </div>
              <div className='row pb-4'>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/34ce18b21920b3b32b9a1d420819e9d6.svg" height={48} alt="" />
                  <p className='mb-0'>5.1K/50fps</p>
                  <span>Max Video Resolution</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/44f942e54c7d597c6c6475ae77aba5e7.svg" height={48} alt="" />
                  <p className='mb-0'>Wide-Angle/Medium Tele Camera:</p>
                  <p className='mb-0'>4K/60fps HDR</p>
                  <p className='mb-0'>4K/100fps</p>
                  <span>Max Video Resolution</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/ce6212fadcaa928f60b8ac3137964027.svg" height={48} alt="" />
                  <p className='mb-0'>4K/60fps HDR</p>
                  <p className='mb-0'>4K/100fps</p>
                  <span>Max Video Resolution</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/09501f6dc9c6a85d31cab93a1c99e1ba.svg" height={48} alt="" />
                  <p className='mb-1'>4K/30fps</p>
                  <span>Max Video Resolution</span>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <h1>48 MP</h1>
                  <span>Max Photo Resolution</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <h1>48 MP</h1>
                  <span>Max Photo Resolution</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <h1>48 MP</h1>
                  <span>Max Photo Resolution</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <h1>48 MP</h1>
                  <span>Max Photo Resolution</span>
                </div>
              </div>
              <div className="row pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg" height={48} alt="" />
                  <p className='mb-0'>Omnidirectional Obstacle Sensing</p>
                  <span className='text-center'>Forward, Backward, Upward, Downward, Left, Right</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg" height={48} alt="" />
                  <p className='mb-0'>Omnidirectional Obstacle Sensing</p>
                  <span className='text-center'>Forward, Backward, Upward, Downward, Left, Right</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/491a0c65c81c35787d8bcbe54ded59a1.svg" height={48} alt="" />
                  <p className='mb-0'>Omnidirectional Obstacle Sensing</p>
                  <span className='text-center'>Forward, Backward, Upward, Downward, Left, Right</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/d1a0d66a2a2ed40d42623099d158f083.svg" height={48} alt="" />
                  <p className='mb-0'>Downward Obstacle Sensing</p>
                  <span>Downward</span>
                </div>
              </div>
              <div className="row pb-5">
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/3d0d77b212222ab4f20219cc95ca6d20.svg" height={48} alt="" />
                  <p className='mb-0 text-center'>DJI O3+ HD Digital Video Transmission</p>
                  <span className='text-center'>Up to 15 km Transmission Distance
                    1080p/60fps Live Feed</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/e16f6ac22cae133b96cd821630616f3b.svg" height={48} alt="" />
                  <p className='mb-0'>DJI O4: Up to 20 km</p>
                  <span>1080p/60fps Live Feed</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/29f52685353ff9104d6583646ae64ee6.svg" height={48} alt="" />
                  <p className='mb-0'>DJI O4: Up to 20 km</p>
                  <span>1080p/60fps Live Feed</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none d-sm-flex">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/be3175b345d0203f023a220119cf21f9.svg" height={48} alt="" />
                  <p className='mb-0'>DJI O2: Up to 10 km</p>
                  <span>720p/30fps Live Feed</span>
                </div>
              </div>
              <div className='d-flex justify-content-center flex-column flex-sm-row '>
                <button className='d-flex justify-content-center me-0 mb-3 comp-btn me-sm-4'>Compare DJI Camera Drones<IoIosArrowForward className='ms-2' /></button>
                <button className='d-flex justify-content-center comp-btn'>Shop DJI Camera Drone<IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/6e82e273e1d05044bc6f02a278df51eb.png" height={240} alt="" />
                  <span className='mb-3'>Flagship</span>
                  <h2 className='text-center mb-4'>DJI Mavic 3 Pro</h2>
                  <p>USD $2,199</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/7a4013b046ea008a2beb1f5f6ca74253.png" height={240} alt="" />
                  <span className='mb-3'>Advanced</span>
                  <h2 className='text-center mb-4'>DJI Air 3</h2>
                  <p>USD $1,099</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-3 d-flex flex-column align-items-center d-none d-sm-flex col-sm-4  col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/c2d80cfc937aef441cf77ec385663966.jpg" height={240} alt="" />
                  <span className='mb-3'>Entry</span>
                  <h2 className='text-center mb-4'>DJI Mini 4 Pro</h2>
                  <p>USD $759</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <h1>377 g</h1>
                  <span>Takeoff Weight</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <h1>410 g</h1>
                  <span>Takeoff Weight</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <h1>795 g</h1>
                  <span>Takeoff Weight</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-3">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/6d02680909fb31b59036cc5b430ded31.svg" height={48} alt="" />
                  <p>Built-In Propeller Guard</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/6d02680909fb31b59036cc5b430ded31.svg" height={48} alt="" />
                  <p>Built-In Propeller Guard</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/6d02680909fb31b59036cc5b430ded31.svg" height={48} alt="" />
                  <p>Built-In Propeller Guard</p>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p>23-Min Max Flight Time</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p>18-Min Max Flight Time</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <img src="https://dji-official-fe.djicdn.com/dps/4570d6ceb1d669af5ac9729f4d5c3aac.svg" height={48} alt="" />
                  <p>16-Min Max Flight Time</p>
                </div>
              </div>
              <div className="row justify-content-center pb-5">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/3f33a0bdf1d06c34852e7c24e1cac54b.svg" height={48} alt="" />
                  <p className='mb-0 text-center'>DJI O4+ Flagship Digital Video Transmission</p>
                  <span className='text-center'>13km Max Transmission Distance</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/be3175b345d0203f023a220119cf21f9.svg" height={48} alt="" />
                  <p className='mb-0'>DJI O3+ HD Digital Video Transmission</p>
                  <span>10km Max Transmission Distance</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/be3175b345d0203f023a220119cf21f9.svg" height={48} alt="" />
                  <p className='mb-0'>DJI O3 HD Digital Video Transmission</p>
                  <span>10km Max Transmission Distance</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/2174e1eac98cc8a86bfea6bbfb13e155.svg" height={48} alt="" />
                  <p>1/1.3-inch CMOS</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/2174e1eac98cc8a86bfea6bbfb13e155.svg" height={48} alt="" />
                  <p>1/1.7-inch CMOS</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <img className='mb-2' src="https://dji-official-fe.djicdn.com/dps/cd0846ffff48ba7425dcb2a71b58f28c.svg" height={48} alt="" />
                  <p>1/2.3-inch CMOS</p>
                </div>
              </div>
              <div className="row justify-content-center pb-5">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <h1>155°</h1>
                  <p>Ultra-Wide FOV</p>
                  <p className='mb-0'>HorizonSteady and RockSteady 3.0+</p>
                  <span>Electronic Image Stabilization</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <h1>155°</h1>
                  <p>Ultra-Wide FOV</p>
                  <p className='mb-0'>HorizonSteady and RockSteady</p>
                  <span>Electronic Image Stabilization</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <h1>150°</h1>
                  <p>Ultra-Wide FOV</p>
                  <p className='mb-0'>RockSteady</p>
                  <span>Electronic Image Stabilization</span>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button className='comp-btn'>Buy Avata 2<IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Vertical Wrapper */}
      <div className="hero-vertical-wrapper container-fluid p-2 pt-4 pb-4 pt-sm-4 ps-sm-2 pe-sm-2 pb-sm-0 pt-lg-5 p-xxl-5 pb-xxl-4" style={{ backgroundColor: "#f5f5f5" }}>
        <div className='hero-vertical-wrapper-title d-flex justify-content-center'>
          <h1 className='mb-4'>Explore More</h1>
        </div>
        <div className="container p-0 p-sm-0 ps-xxl-5 pe-xxl-5">
          <div className="row ps-2 pe-2 p-sm-0 ps-xxl-2 pe-xxl-2">
            <div className="col-12 col-sm-12 mb-4 col-md-6 mb-md-0">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/e536a543e1ae498a2ba2cd5def951781.jpg)"}}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 ps-md-5 pe-md-5 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>Accessories</h3>
                <p>Controllers, goggles, batteries, and more</p>
                <a href="">Where to Buy<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/08afdd8dd25f713d05cd9fd085b82b03.jpg)"}}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>DJI Care Refresh</h3>
                <p>Protect your drone with this comprehensive plan</p>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Vertical Wrapper */}
      <div className="hero-vertical-wrapper container-fluid p-2 pt-4 pb-4 ps-sm-2 pe-sm-2 p-xxl-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className='hero-vertical-wrapper-title d-flex justify-content-center'>
          <h1 className='mb-4'>Product Support</h1>
        </div>
        <div className="container p-0 p-sm-0 ps-xxl-5 pe-xxl-5">
          <div className="row ps-2 pe-2 p-sm-0 ps-xxl-2 pe-xxl-2">
            <div className="col-12 col-sm-12 mb-4 col-md-6 mb-md-0">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/71685a7a83e4c70907f3c504f6806561.jpg)"}}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>Support</h3>
                <p>After-sale support and services for your drone</p>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/dd1b12f9a5c1f65019873c542d4e5860.jpg)"}}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>Download Center</h3>
                <p>Download official apps, software, and user guides</p>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Vertical Wrapper */}
      <div className="hero-vertical-wrapper container-fluid p-4 pb-5 p-sm-3 pb-sm-5 p-lg-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container ps-xl-5 pe-xl-5">
          <div className="row ps-2 pe-2 pb-lg-4">
            <div className="col-12 mb-4 d-flex flex-column align-items-center col-sm-4">
              <div className='hero-vertical-img'>
                <img className='mb-3' src="https://dji-official-fe.djicdn.com/dps/030ab0747266dbb01f54d79189f102b8.svg" height={64} alt="" />
              </div>
              <div className='hero-vertical-content d-flex flex-column align-items-center'>
                <h2 className='mb-3'>Where to Buy</h2>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
            <div className="col-12 mb-4 d-flex flex-column align-items-center col-sm-4">
              <div className='hero-vertical-img'>
                <img className='mb-3' src="https://dji-official-fe.djicdn.com/dps/657c4cd9d4804015c381fa1aa38e272e.svg" height={64} alt="" />
              </div>
              <div className='hero-vertical-content d-flex flex-column align-items-center'>
                <h2 className='mb-3'>Support</h2>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
            <div className="col-12 d-flex flex-column align-items-center col-sm-4">
              <div className='hero-vertical-img'>
                <img className='mb-3' src="https://dji-official-fe.djicdn.com/dps/eb57940aeee1ca763e1ba1a3cae8c885.svg" height={64} alt="" />
              </div>
              <div className='hero-vertical-content d-flex flex-column align-items-center'>
                <h2 className='mb-3'>Fly Safe</h2>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
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

export default Homepage
