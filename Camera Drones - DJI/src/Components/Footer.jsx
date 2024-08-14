import React from 'react'
// Icons
import { CiMail } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <>
            <div className='container-fluid p-0 pb-4 pt-4 ps-sm-0 pe-sm-0 ps-xxl-5 pe-xxl-5' style={{ backgroundColor: "#272727" }}>
                <div className="footer container pt-2 ps-5 pe-5 pb-5 d-none d-lg-block ps-lg-0 pe-lg-0 ps-xxl-5 pe-xxl-5">
                    <div className="row ps-0 pe-0">
                        <div className="col-2 me-5 d-flex flex-column me-lg-4 me-xl-5">
                            <p className='mb-2'>Product Categories</p>
                            <a className='mb-2' href="">Consumer</a>
                            <a className='mb-2' href="">Professional</a>
                            <a className='mb-2' href="">Enterprise</a>
                            <a className='mb-2' href="">Components</a>
                            <p className='mt-3 mb-2'>Service Plans</p>
                            <a className='mb-2' href="">DJI Care Refresh</a>
                            <a className='mb-2' href="">DJI Care Pro</a>
                            <a className='mb-2' href="">DJI Care Enterprise</a>
                            <a className='mb-2' href="">DJI Maintenance Program</a>
                        </div>
                        <div className="col-2 me-5 d-flex flex-column me-lg-4 me-xl-5">
                            <p className='mb-2'>Where to Buy</p>
                            <a className='mb-2' href="">DJI Online Store</a>
                            <a className='mb-2' href="">Flagship Stores</a>
                            <a className='mb-2' href="">DJI-Operated Stores</a>
                            <a className='mb-2' href="">Retail Stores</a>
                            <a className='mb-2' href="">Enterprise Retailers</a>
                            <a className='mb-2' href="">Agricultural Drone Dealer</a>
                            <a className='mb-2' href="">Delivery Drone Dealer</a>
                            <a className='mb-2' href="">Pro Retailers</a>
                            <a className='mb-2' href="">DJI Store App</a>
                            <p className='mt-3 mb-2'>Cooperation</p>
                            <a className='mb-2' href="">Become a Dealer</a>
                            <a className='mb-2' href="">Apply For Authorized Store</a>
                        </div>
                        <div className="col-2 me-5 d-flex flex-column me-lg-4 me-xl-5">
                            <p className='mb-2'>Fly Safe</p>
                            <a className='mb-2' href="">Fly Safe</a>
                            <a className='mb-2' href="">DJI Flying Tips</a>
                            <p className='mt-3 mb-2'>Support</p>
                            <a className='mb-2' href="">Product Support</a>
                            <a className='mb-2' href="">Service Request and Inquiry</a>
                            <a className='mb-2' href="">Help Center</a>
                            <a className='mb-2' href="">After-Sales Service Policies</a>
                            <a className='mb-2' href="">Download Center</a>
                            <a className='mb-2' href="">Security and Privacy</a>
                        </div>
                        <div className="col-2 me-4 d-flex flex-column me-lg-4 me-xxl-5">
                            <p className='mb-2'>Explore</p>
                            <a className='mb-2' href="">Media Center</a>
                            <a className='mb-2' href="">Buying Guides</a>
                            <a className='mb-2' href="">DJI Trust Center</a>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <p className='mb-2'>Community</p>
                            <a className='mb-2' href="">SkyPixel</a>
                            <a className='mb-2' href="">DJI Forum</a>
                            <a className='mb-2' href="">Developer</a>
                            <p className='mt-3 mb-2'>Subscribe</p>
                            <a className='mb-2' href="">Get the latest news from DJI</a>
                            <div className='footer-input d-flex align-items-center'>
                                <input type="text" placeholder="Email Address"/>
                                <div className='footer-icon p-2'>
                                    <CiMail style={{ color: "white" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer2 container p-0 pt-3 ps-sm-0 pe-sm-0 ps-xxl-5 pe-xxl-5">
                    <div className='footer2-top ms-3 me-0 d-flex justify-content-between pb-3 flex-column m-sm-0 ms-lg-3 me-lg-3 flex-md-row' style={{ borderBottom: "1px solid #6c7073" }}>
                        <div className='mb-3 mb-sm-4 mb-md-0'>
                            <img className='me-4 mb-2' src="https://www1.djicdn.com/dps/cee842f19dde1561650754528f49d6b5.svg" height={24} alt="" />
                            <a className='ms-0 me-3 ms-sm-2 me-sm-2 pe-sm-1' href="">Who We Are</a>
                            <a className='me-3 me-sm-2 pe-sm-1' href="">Contact Us</a>
                            <a className='me-3 me-sm-2 pe-sm-1' href="">Careers</a>
                            <a className='me-3 me-sm-2 pe-sm-1' href="">Dealer Portal</a>
                            <a className='me-3 me-sm-2 pe-sm-1' href="">RoboMaster</a>
                            <a className='me-0 me-sm-2' href="">DJI Automotive</a>
                        </div>
                        <div>
                            <a className='ms-0 ms-sm-0' href="">
                                <img className='footer-icon' src="https://dji-official-fe.djicdn.com/uploads/footer_social/cover/1792/793cb64aaae69d1dd1b478336fd1b42e.png" alt=""/>
                            </a>
                            <a className='ms-3' href="">
                                <img className='footer-icon' src="https://dji-official-fe.djicdn.com/uploads/footer_social/cover/1793/f973c01f1a95ba549a2e54b60a0e90a1.png" alt=""/>
                            </a>
                            <a className='ms-3' href="">
                                <img className='footer-icon' src="https://dji-official-fe.djicdn.com/uploads/footer_social/cover/1794/8f24c284378a0920e6df15c87c4b9b59.png" alt=""/>
                            </a>
                            <a className='ms-3' href="">
                                <img className='footer-icon' src="https://dji-official-fe.djicdn.com/uploads/footer_social/cover/1797/bdea782ad15bc2dda49f5b2ceeac17b9.png" alt=""/>
                            </a>
                            <a className='ms-3' href="">
                                <img className='footer-icon' src="https://dji-official-fe.djicdn.com/uploads/footer_social/cover/1798/51bab9bb7867de27a68b9ea14ae8f8b3.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className='footer2-bottom d-flex justify-content-between ps-3 pe-3 pt-3 pb-3 pb-sm-0 ps-sm-0 pe-sm-0 flex-column flex-lg-row ps-lg-3 pe-lg-3'>
                        <div>
                            <div className='mb-2'>
                                <a href="">DJI Privacy Policy<BsDot className='ms-1 me-1'/></a>
                                <a href="">Use of Cookies<BsDot className='ms-1 me-1'/></a>
                                <a href="">Terms of Use<BsDot className='ms-1 me-1'/></a>
                                <a href="">Business Information</a>
                            </div>
                            <div className='d-flex flex-column flex-sm-row'>
                                <p className='me-4 mb-2'>Copyright © 2024 DJI All Rights Reserved</p>
                                <span>Feedback on web experience</span>
                            </div>
                        </div>
                        <div className='d-none d-lg-block'>
                            <button className='d-flex align-items-center pt-1 pb-1'><TbWorld className='me-2' style={{fontSize:"20px"}}/>Other Regions / English</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
