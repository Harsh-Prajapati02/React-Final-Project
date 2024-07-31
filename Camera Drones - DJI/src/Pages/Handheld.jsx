import React from 'react'
// Icons
import { IoIosArrowForward } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Footer from '../Components/Footer';
import HandheldHeader from '../Components/HandheldHeader';

const Handheld = () => {
  return (
    <>
      <HandheldHeader />

      {/* Main */}
      {/* Hero Card */}
      <div className='hero-card container-fluid ps-3 pe-3 ps-sm-3 pe-sm-3 ps-md-4 pe-md-4 ps-lg-3 pe-lg-3 ps-xl-4 pe-xl-4 ps-xxl-3 pe-xxl-3'>
        <div className='hero-card-title pt-4 pb-3  d-flex flex-column align-items-center p-sm-5 pt-sm-4 pb-sm-3 pt-xxl-5'>
          <h1 className='text-center mb-2 mb-sm-2 mb-xxl-4'>Handheld Imaging Devices</h1>
          <p className='mb-0 text-center'>From casual vlogging to professional shoots, there's always an action camera or a hand-held</p>
          <p>stabilizer that's right for you.</p>
        </div>
        <div className='hero-card-banner p-4 p-sm-5 d-flex flex-column align-items-center' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/040924580127624bea9a05c38545784b@origin.jpg)" }}>
          <span className='mb-2 text-center'>Powered by Software-Defined Radio Technology</span>
          <img className='hero-card-img2 mb-2' src="https://dji-official-fe.djicdn.com/dps/130d80b95d197fae67371b58ac61f918.svg" alt="" />
          <p>Boundless Potential</p>
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
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/822e2e1cdf00af149cabbc7722953e51.jpg)" }}>
              <span className='text-center mb-2 pt-2'>Lightweight Commercial Stabilizer</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/54cd95366e578c1dcdf0fdba10658cd4.svg" alt="" />
              <p className='mb-4' style={{ color: "#fff" }}>Gripping Storytelling</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 pe-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/4da7adda2e30246082f72437eb9423ff.jpg)" }}>
              <span className='mb-2 pt-2'>AMF Lens Control System</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/aa3dff8a18e1cfd57487523d5b9b10d9.svg" height={28} alt="" />
              <p className='mb-4' style={{ color: "#fff" }}>Feel the Focus</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 ps-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/18a3ca578b5178c8ac7c432f820c3d00.jpg)" }}>
              <span className='text-center mb-2 pt-2'>1″ CMOS Pocket Gimbal Camera</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg" height={28} alt="" />
              <p className='mb-4'>For Moving Moments</p>
              <div>
                <a href="" className='me-3'>Learn More<IoIosArrowForward className='ms-1' /></a>
                <a href="">Learn More<CiShare1 className='ms-1' /></a>
              </div>
            </div>
          </div>
          <div className='col-12 p-2 col-sm-12 ps-md-1 pe-md-1 col-lg-6 p-lg-2 pe-xl-1'>
            <div className="card-wrapper d-flex flex-column align-items-center p-4" style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/390af4904d4c36673e6a9da1f2a083c3.jpg)" }}>
              <span className='mb-2 pt-2'>Wireless Microphone for Pro-Level Audio</span>
              <img className='card-wrapper-img mb-2 mt-1' src="https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg" height={28} alt="" />
              <p className='mb-4'>Pocket-Sized Pro Audio</p>
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
          <div className="quiz-drone-content p-4 d-flex flex-column justify-content-center text-center col-12 order-2 p-sm-4 col-md-6 order-md-2 text-md-start p-xl-5" style={{ backgroundColor: "#f5f5f5" }}>
            <h2 className='pe-3 mb-3'>Want to choose your perfect drone?</h2>
            <p className='mb-4'>Take a quick quiz to find your perfect drone match.</p>
            <button>Take a quiz</button>
          </div>
          <div className="quiz-drone-img col-12 order-1 col-md-6 order-md-2"></div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className='comparison-section container pb-4 pb-lg-5'>
        <h1 className='text-center mb-4 mt-sm-3 mt-md-4 mt-xl-2'>Which camera drone is right for you?</h1>
        <nav className='d-flex justify-content-center align-items-center'>
          <div class="nav nav-tabs d-flex flex-nowrap comparison-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab">Osmo Action Series</button>
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab">Osmo Pocket Series</button>
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab">Osmo Mobile Series</button>
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-about" type="button" role="tab">Ronin Stabilizers</button>
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-blog" type="button" role="tab">Ronin Cinema Cameras</button>
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-service" type="button" role="tab">DJI Mic Series </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/c58213b847e85616ccfc9c7a5b57f94f.png" height={240} alt="" />
                  <span className='mb-3'>Action Camera with Best-in-Class Image Quality</span>
                  <h2 className='text-center mb-4'>Osmo Action 4</h2>
                  <p>USD $299</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/c8103bb55839b122fa16fd79c20f13f5.png" height={240} alt="" />
                  <span className='mb-3'>Cold-Resistant and Durable</span>
                  <h2 className='text-center mb-4'>Osmo Action 3</h2>
                  <p>USD $199</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-3 d-flex flex-column align-items-center d-none d-sm-flex col-sm-4  col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/082dc9f5842856d65ad2f63e6933569c.png" height={240} alt="" />
                  <span className='mb-3'>Magnetic Wearable</span>
                  <h2 className='text-center mb-4'>DJI Action 2</h2>
                  <p>USD $299</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>145 g</p>
                  <span>Weight</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>145 g</p>
                  <span>Weight</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>120 g</p>
                  <span>Weight</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>160 minutes</p>
                  <span>Max Operating Time</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>160 minutes</p>
                  <span>Max Operating Time</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>160 minutes</p>
                  <span>Max Operating Time</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>18m Waterproof</p>
                  <span>Without waterproof case</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>16m Waterproof</p>
                  <span>Without waterproof case</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>10m Waterproof</p>
                  <span>Without waterproof case</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>-20° to 45° C (-4° to 113° F)</p>
                  <span>Operating Temperature</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>-20° to 45° C</p>
                  <p className='mb-1'>(-4° to 113° F)</p>
                  <span>Operating Temperature</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>0° to 40° C</p>
                  <p className='mb-1'>(32° to 104° F)</p>
                  <span>Operating Temperature</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/120fps</p>
                  <span>Max Video Resolution</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/120fps</p>
                  <span>Max Video Resolution</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/120fps</p>
                  <span>Max Video Resolution</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports Fast Charge</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports Fast Charging</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports Fast Charging</p>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Quick-Release Design</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Quick-Release Design</p>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Quick-Release Design</p>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>RockSteady 3.0/3.0+</p>
                  <p className='mb-1'>HorizonSteady</p>
                  <p className='mb-1'>HorizonBalancing</p>
                  <span>Electronic Image Stabilization</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>RockSteady 3.0 and HorizonSteady</p>
                  <span>Electronic Image Stabilization</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>RockSteady 2.0 and HorizonSteady</p>
                  <span>Electronic Image Stabilization</span>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button className='comp-btn'>Osmo Action Series Comparison
                  <IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pt-4 pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/8c6ec9b0dc4e170120dfd4ebf9f0ffd6.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>Osmo Pocket 3</h2>
                  <p>USD $519</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/99319cc99a9fa82d519a48b975b4a4f9.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>DJI Pocket 2</h2>
                  <p>USD $279</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-3 d-flex flex-column align-items-center d-none d-sm-flex col-sm-4  col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/99319cc99a9fa82d519a48b975b4a4f9.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>Osmo Pocket</h2>
                  <p>USD $199</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1-inch CMOS</p>
                  <span>Image Sensor</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1/1.7-inch CMOS</p>
                  <span>Image Sensor</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>1/2.3-inch CMOS</p>
                  <span>Image Sensor</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>f/2.0, 20 mm</p>
                  <span>Lens</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>f/1.8, 20 mm</p>
                  <span>Lens</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>f/2.0, 26 mm</p>
                  <span>Lens</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Full-Pixel PDAF</p>
                  <span>Focusing</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Hybrid Focusing</p>
                  <span>Focusing</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Hybrid Focusing</p>
                  <span>Focusing</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/120fps</p>
                  <span>Max Video Specification</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/60fps</p>
                  <span>Max Video Specification</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/60fps</p>
                  <span>Max Video Specification</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>10-bit HLG Video</p>
                  <span>HDR Video</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>HDR Video</p>
                  <span>HDR Video</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>HDR Video</p>
                  <span>HDR Video</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>2-inch OLED, 556×314 Pixels</p>
                  <span>Screen</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1-inch LCD, 240×220 Pixels</p>
                  <span>Screen</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>1-inch LCD, 240×220 Pixels</p>
                  <span>Screen</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Stereo Recording</p>
                  <p className='mb-1'>Supports Connection to Two DJI Mic 2</p>
                  <p className='mb-1'>Transmitters</p>
                  <span>Sound Recording</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Stereo Recording</p>
                  <p className='mb-1'>Supports Connection to the DJI Pocket 2</p>
                  <p className='mb-1'>Wireless Mic</p>
                  <span>Sound Recording</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Monophonic Recording</p>
                  <span>Sound Recording</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>80% in 16 Mins</p>
                  <span>Charging Time</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>80% in 48 Mins</p>
                  <span>Charging Time</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>80% in 48 Mins</p>
                  <span>Charging Time</span>
                </div>
              </div>
              <div className='d-flex justify-content-center pt-4'>
                <button className='comp-btn'>Osmo Pocket Series Comparison
                  <IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pt-4 pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/07378296d58d982d9cf104dbe587cb05.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>Osmo Mobile 6</h2>
                  <p>USD $149</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/7db7af94e3458e68f61e829db3ea1ad9.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>Osmo Mobile SE</h2>
                  <p>USD $99</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>309 g</p>
                  <span>Gimbal Weight</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>352 g</p>
                  <span>Gimbal Weight</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Approx. 6 hours and 24 minutes</p>
                  <span>Opperating Time</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Approx. 8 hours</p>
                  <span>Opperating Time</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Status Panel</p>
                  <span>For gimbal mode control</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Status Panel</p>
                  <span>Intuitive Gimbal Status Checking</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>New Side Wheel Design</p>
                  <span>For zoom and focus control</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Zoom Slider</p>
                  <p className='mb-1'>(-4° to 113° F)</p>
                  <span>Push to Zoom</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Quick Launch</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Quick Launch</p>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>ActiveTrack 6.0</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>ActiveTrack 6.0</p>
                </div>
              </div>
              <div className='d-flex justify-content-center pt-4'>
                <button className='comp-btn'>Osmo Mobile Series Comparison
                  <IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-about" role="tabpanel">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pt-4 pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/826f5989a28daa8d5527cbce35f22539.png" height={240} alt="" />
                  <span className='mb-3'>Expansive Flagship Stabilizer</span>
                  <h2 className='text-center mb-4'>DJI RS 4 Pro</h2>
                  <p>USD $869</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/347f34da25542830aef58541921d2593.png" height={240} alt="" />
                  <span className='mb-3'>Lightweight Commercial Stabilizer</span>
                  <h2 className='text-center mb-4'>DJI RS 4</h2>
                  <p>USD $549</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-3 d-flex flex-column align-items-center d-none d-sm-flex col-sm-4  col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/fc108eb596103f42e68a51d465c859a3.png" height={240} alt="" />
                  <span className='mb-3'>Lightweight Travel Stabilizer</span>
                  <h2 className='text-center mb-4'>DJI RS 3 Mini</h2>
                  <p>USD $279</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1.6 kg (3.5 lbs)</p>
                  <span>Weight</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1.4 kg (3.0 lbs)</p>
                  <span>Weight</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>≥ 795 g (1.75 lbs)</p>
                  <span>Weight</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4.5 kg (10 lbs)</p>
                  <span>Max Payload</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>3 kg (6.6 lbs)</p>
                  <span>Max Payload</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>2 kg (4.4 lbs)</p>
                  <span>Max Payload</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports Komodo</p>
                  <span>RF 24-70 mm F2.8</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports FX3</p>
                  <span>RF 24-70 mm F2.8</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports A7</p>
                  <span>RF 24-70 mm F2.8</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>2nd-Gen Native Vertical Shooting</p>
                  <span>No additional accessories required</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>2nd-Gen Native Vertical Shooting</p>
                  <span>No additional accessories required</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Native Vertical Shooting</p>
                  <span>No additional accessories required</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Bluetooth Shutter Control</p>
                  <span>Shutter Connection</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Bluetooth Shutter Control</p>
                  <span>Shutter Connection</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Bluetooth Shutter Control</p>
                  <span>Shutter Connection</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports DJI Focus Pro and Transmission</p>
                  <span>Sold separately</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports DJI Focus Pro Motor and Ronin</p>
                  <p className='mb-1'>Image Transmitter</p>
                  <span>Sold separately</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>Supports Briefcase Handles</p>
                  <span>Sold separately</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1.8″ OLED Full-Color</p>
                  <span>Touchscreen</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>1.8″ OLED Full-Color</p>
                  <span>Touchscreen</span>
                </div>
                <div className="col-3 d-flex flex-column align-items-center d-none  d-sm-flex col-sm-4 col-xl-3">
                  <p className='mb-1'>1.4" LCD Full-Color</p>
                  <span>Touchscreen</span>
                </div>
              </div>
              <div className='d-flex justify-content-center pt-4'>
                <button className='comp-btn'>Ronin Stabilizers Comparison
                  <IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-blog" role="tabpanel">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pt-4 pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/2041defeec9813030404560dbceb1a42.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>DJI Ronin 4D-8K</h2>
                  <p>USD $12838</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/886526fd85f4cc0bed0e5345ddf7e7df.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>DJI Ronin 4D-6K</h2>
                  <p>USD $6799</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>8K/75fps (Full-frame 2.39:1)</p>
                  <p className='mb-1'>8K/60fps (Full-frame 17:9)</p>
                  <span>Highest Resolution</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>6K/60fps (Full-frame 2.39:1)</p>
                  <p className='mb-1'>6K/50fps (Full-frame 17:9)</p>
                  <span>Highest Resolution</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/120fps (Full-frame 17:9)</p>
                  <span>Highest Frame Rate</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>4K/120fps (S35 2.39:1)</p>
                  <span>Highest Frame Rate</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Apple ProRes RAW</p>
                  <p className='mb-1'>Apple ProRes 422 HQ</p>
                  <p className='mb-1'>H.264</p>
                  <span>Recording Codec</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Apple ProRes RAW</p>
                  <p className='mb-1'>Apple ProRes 4444 XQ</p>
                  <p className='mb-1'>Apple ProRes 422 HQ</p>
                  <p className='mb-1'>Apple ProRes 422 LT</p>
                  <p className='mb-1'>H.264</p>
                  <span>Recording Codec</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>320/1600</p>
                  <p className='mb-1'>(Default)</p>
                  <p className='mb-1'>800/4000</p>
                  <p className='mb-1'>(Dynamic Range Expansion on*）</p>
                  <span>Native ISO</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>800/5000</p>
                  <span>Native ISO</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>14.7 stops</p>
                  <span>Highest Dynamic Range</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>14.3 Stops</p>
                  <span>Highest Dynamic Range</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Compared to the 6K combo, it additionally</p>
                  <p className='mb-1'>includes a DJI DL PZ 17-28 mm T3.0 ASPH</p>
                  <p className='mb-1'>Lens, PROSSD 1TB, PROSSD Mount, a RAW</p>
                  <p className='mb-1'>License Key, and more, ready to be used</p>
                  <p className='mb-1'>right out of box.</p>
                  <span>Combo Includes</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Main Body, Gimbal Camera, Main Monitor,</p>
                  <p className='mb-1'>LiDAR Range Finder, Hand Grips, Top</p>
                  <p className='mb-1'>Handle, and more.</p>
                  <span>Combo Includes</span>
                </div>
              </div>
              <div className='d-flex justify-content-center pt-4'>
                <button className='comp-btn'>Osmo Mobile Series Comparison
                  <IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-service" role="tabpanel">
            <div className='container-fluid ps-0 pe-0 p-sm-0 ps-md-5 pe-md-5 ps-lg-5 pe-lg-5'>
              <div className="row justify-content-center pb-4" style={{ borderBottom: "2px solid #f0f0f0" }}>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/6e61a4668dd5cca507484a47a1260521.png" height={240} alt="" />
                  <h2 className='text-center mb-4'>DJI Mic 2</h2>
                  <p>USD $129</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
                <div className="comparison-drone col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <img className='comparison-drone-img' src="https://dji-official-fe.djicdn.com/cms/uploads/0ee8d575100444581a8809f1bb6c1fcb.jpg" height={240} alt="" />
                  <h2 className='text-center mb-4'>DJI Mic</h2>
                  <p>USD $159</p>
                  <button className='mb-3'>Buy Now</button>
                  <a href="">Learn More</a>
                </div>
              </div>
              <div className="row justify-content-center pt-4 pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>120 dB SPL</p>
                  <span>Maximum Sound Pressure Level (SPL)</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>114 dB SPL</p>
                  <span>Maximum Sound Pressure Level (SPL)</span>
                </div>
              </div>
              <div className="row  justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Intelligent Noise Cancelling</p>
                  <span>Noise Cancelling</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>No Active Noise Cancelling</p>
                  <span>Noise Cancelling</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>14 hours, supporting 32-bit float internal</p>
                  <p className='mb-1'>recording</p>
                  <span>Internal Recording</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>14 Hours</p>
                  <span>Internal Recording</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>18 Hours</p>
                  <span>Total Operating Time</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>15 Hours</p>
                  <span>Total Operating Time</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Touchscreen + Dial</p>
                  <span>Interaction</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Touchscreen</p>
                  <span>Interaction</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Preset RX gains for different camera models;</p>
                  <p className='mb-1'>RX automatically powers on and off in sync</p>
                  <p className='mb-1'>with the camera</p>
                  <span>Camera Compatibility</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>No</p>
                  <span>Camera Compatibility</span>
                </div>
              </div>
              <div className="row justify-content-center pb-4">
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Via the receiver Directly connect to Osmo</p>
                  <p className='mb-1'>Action 4, Osmo Pocket 3 or smartphone via</p>
                  <p className='mb-1'>Bluetooth</p>
                  <span>Connection Type</span>
                </div>
                <div className="col-6 d-flex flex-column align-items-center col-sm-4 col-xl-3">
                  <p className='mb-1'>Via the receiver</p>
                  <span>Connection Type</span>
                </div>
              </div>
              <div className='d-flex justify-content-center pt-4'>
                <button className='comp-btn'>Osmo Mobile Series Comparison
                  <IoIosArrowForward className='ms-2' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Vertical Wrapper */}
      <div className="hero-vertical-wrapper container-fluid p-2 pt-4 pb-4 pt-sm-4 ps-sm-2 pe-sm-2 pb-sm-0 pt-lg-5 p-xxl-5 pb-xxl-4" style={{ backgroundColor: "#f5f5f5" }}>
        <div className='hero-vertical-wrapper-title d-flex justify-content-center'>
          <h1 className='mb-4'>More Popular Products</h1>
        </div>
        <div className="container p-0 p-sm-0 ps-xxl-5 pe-xxl-5">
          <div className="row ps-2 pe-2 p-sm-0 ps-xxl-2 pe-xxl-2">
            <div className="col-12 col-sm-12 mb-4 col-md-6 mb-md-0">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/327fe299b56cb99590b4dd254665a336.jpg)" }}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 ps-md-5 pe-md-5 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>DJI Mic</h3>
                <p>Record crystal-clear audio on the go</p>
                <a href="">Where to Buy<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/6baf014ee9859ef6158914c3616af2f8.jpg)" }}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>DJI Osmo Mobile 6</h3>
                <p>Flagship Smartphone Gimbal Stabilizer</p>
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
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/4b43fc757ca56ca3c96a1bd0c5c9129d.jpg)" }}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>DJI Care Refresh</h3>
                <p>After-sale support and services for your drone</p>
                <a href="">Learn More<IoIosArrowForward className='ms-1' /></a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className='hero-vertical-banner' style={{ backgroundImage: "url(https://dji-official-fe.djicdn.com/dps/dd1b12f9a5c1f65019873c542d4e5860.jpg)" }}></div>
              <div className='hero-vertical-content p-3 d-flex flex-column align-items-center p-sm-4 p-xl-5' style={{ backgroundColor: "#fff" }}>
                <h3 className='mb-3'>Download Center</h3>
                <p>Official apps, software, and product manuals</p>
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

export default Handheld
