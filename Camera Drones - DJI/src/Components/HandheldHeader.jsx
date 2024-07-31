import React from 'react'
import { Link } from 'react-router-dom'

const HandheldHeader = () => {
    return (
        <div className='container-fluid d-flex justify-content-center ps-2 pe-2 pt-2 pb-2 ps-xxl-5 pe-xxl-5' style={{backgroundColor:"#00000005"}}>
            <div className='dron-header row col-12 flex-nowrap fle-lg-wrap col-xxl-10'>
              <div className="col-3 d-flex justify-content-center col-sm-2 col-lg-1">
                <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/7c8319405a3529d93c8fa583fa70a1a6.png" height={65} alt="" />
                  <p>Osmo Pocket</p>
                </Link>
              </div>
              <div className="col-3 d-flex justify-content-center col-sm-2 col-lg-1">
              <Link to={"/store"} className='link'>
                  <img src="https://stag-dji-official-fe.djicdn.com/pre/dps/f6f6675cd3c58ce3683eb16f9f6b0b26.png" height={65} alt="" />
                  <p>Osmo Action</p>
                </Link>
              </div>
              <div className="col-3 d-flex justify-content-center col-sm-2 col-lg-1">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/ef8311c4c307fb42deb65afd23b43269.png" height={65} alt="" />
                  <p>Osmo Mobile</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/ea988e584e6816ddae6b6175f97ed51d.png" height={65} alt="" />
                  <p>DJi Mavic</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/5cc2e019595adec2e1b8d1319be88b81.png" height={65} alt="" />
                  <p>Ronin Cinema Cameras</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/5417cd502563ad2025951f030fb69a99.png" height={65} alt="" />
                  <p>Ronin Stabilizers</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/b0e6c88f2943a03d8169310748a03085.png" height={65} alt="" />
                  <p>DJi Pro Accessories</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/2fb13926f6e7b4b0cbeb01fbcce28320.png" height={65} alt="" />
                  <p>DJI Power</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/dd80d4f36df9091f5ebcebd5fe864399.svg" height={65} alt="" />
                  <p>Take a quiz</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/ab660f7a8c5a5ab1b776f800c8cbc6ee.svg" height={65} alt="" />
                  <p>Consumer Drones Comparison</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/dbb0d774602c8769b173939c66bf4bfa.svg" height={65} alt="" />
                  <p>Professional Drones Comparison</p>
                </Link>
              </div>
              <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <Link to={"/store"} className='link'>
                  <img src="https://dji-official-fe.djicdn.com/dps/42af7c7d7cc7b425c30b5ec52859318c.svg" height={65} alt="" />
                  <p>Accessories</p>
                </Link>
              </div>
            </div>
          </div>
      )
}

export default HandheldHeader
