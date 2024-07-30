import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-fluid d-flex justify-content-center ps-2 pe-2 pt-2 pb-2 ps-xxl-5 pe-xxl-5' style={{backgroundColor:"#00000005"}}>
        <div className='dron-header row col-12 flex-nowrap fle-lg-wrap col-xxl-10'>
          <div className="col-3 d-flex justify-content-center col-sm-2 col-lg-1">
            <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png" height={65} alt="" />
              <p>DJI Mavic</p>
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-center col-sm-2 col-lg-1">
          <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png" height={65} alt="" />
              <p>DJI Air</p>
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-center col-sm-2 col-lg-1">
          <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/3b2958e69dfc377784a5a995c8c16c06.png" height={65} alt="" />
              <p>DJI Mini</p>
            </Link>
          </div>
          <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
          <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/62a29804a802d6a3e54c3e43b30399e9.png" height={65} alt="" />
              <p>DJi Avata 2</p>
            </Link>
          </div>
          <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
          <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png" height={65} alt="" />
              <p>DJI Inspire</p>
            </Link>
          </div>
          <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
          <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png" height={65} alt="" />
              <p>DJI FPV</p>
            </Link>
          </div>
          <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
          <Link to={"/store"} className='link'>
              <img src="https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png" height={65} alt="" />
              <p>RC</p>
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

export default Header
