import React from 'react'

const Register = () => {
    return (
        <div className='register-page container-fluid p-5'>
            <div className="container ps-5 pe-5">
                <div className="row justify-content-end ps-4 pe-4">
                    <div className="login-content col-5 p-4">
                        <div className="ps-2 pe-2 pt-4">
                            <div className="login-logo mb-4">
                                <img src="https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg" alt="" />
                            </div>
                            <h3 className='mb-4'>Create Your DJI Account</h3>
                            <form action="" className='login-form'>
                                <div className='d-flex flex-column mb-4'>
                                    <label className='mb-2' htmlFor="">Email address</label>
                                    <input type="text"/>
                                </div>
                                <div className='d-flex flex-column mb-4'>
                                    <label className='mb-2' htmlFor="">Password</label>
                                    <input type="password"/>
                                </div>
                                <p className='terms-policy mb-2' style={{fontSize:"14px"}}>By creating account, you conform that you agree to DJI <a href="">Privecy Policy</a> and <a href="">Terms of Use</a>.</p>
                                <div className='d-flex mb-4 pb-2 align-items-start'>
                                    <input type="checkbox" className='me-2 checkbox' style={{width:"30px"}}/>
                                    <p className='mb-0'>Get announcements, recommendations and updates about DJI Products, services, software updates and more.</p>
                                </div>
                                <button className='mb-2 w-100'>Submit</button>
                                <p className='text-center mb-4'>Already have an account?<a href="/login" className='ps-1' style={{ fontSize: "14px" }}>Log In Now</a></p>
                                <hr />
                                <p className='text-center mb-4'>Need help with registration?<a href="" className='ps-1' style={{ fontSize: "14px" }}>FAQ DJI Support</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
