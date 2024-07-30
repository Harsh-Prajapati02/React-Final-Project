import React from 'react'

const Store = () => {
  return (
    <div className="container product-section ps-5 pe-5">
      <div className="product-sec-title p-4 d-flex justify-content-center" style={{ borderBottom: "2px solid #f5f5f5" }}>
        <h1>Shop Camera Drones</h1>
      </div>
      <div className="row">
        <div className="col-3 p-4" style={{ border: "1px solid black" }}>
          <div className="d-flex justify-content-between mb-2">
            <h5>Filter</h5>
            <a href="">Reset</a>
          </div>
          <div>
            <p className='mb-2'>Product Series</p>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <p class="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    DJI Mavic
                  </p>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body ps-0 pe-0 pt-1 pb-1">
                    <div className='pt-1 pb-1 d-flex align-items-center'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">DJI Mavic 3 Pro</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">DJI Mavic 3 Classic</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">DJI Mavic 3</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">Mavic 2</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">Mavic Pro</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <p class="accordion-button mb-0 collapsed p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                    DJI Mavic
                  </p>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse">
                  <div class="accordion-body ps-0 pe-0 pt-1 pb-1">
                    <div className='pt-1 pb-1 d-flex align-items-center'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">DJI Mavic 3 Pro</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">DJI Mavic 3 Classic</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">DJI Mavic 3</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">Mavic 2</label>
                    </div>
                    <div className='pt-1 pb-1 d-flex'>
                      <input className='me-2' type="checkbox"/>
                      <label htmlFor="">Mavic Pro</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9 p-2 pt-4" style={{ border: "1px solid black" }}>

        </div>
      </div>
    </div>
  )
}

export default Store
