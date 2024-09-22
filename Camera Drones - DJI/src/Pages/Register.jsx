import { useFormik } from 'formik';
import React from 'react'
// import { useState } from 'react'
import { object, string } from 'yup';
import { MdErrorOutline } from "react-icons/md";
import { auth } from '../Services/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const userSchema = object({
        email: string().email("Incorrect email address format").required('Email cannot be empty'),
        password: string().required('Password cannot be empty')
            .min(8, 'Your password must be 8-20 characters.')
    })

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        validationSchema: userSchema,
        onSubmit: (value, action) => {
            handleFormSubmission(value.email, value.password)
            action.resetForm();
        }
    });

    const handleFormSubmission = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            alert("Registration Successful...")
        })
        .catch((err) => {
            console.log(err)
        });
    }

    const { email, password } = values;

    return (
        <div className='register-page d-flex align-items-center container-fluid p-0 p-sm-5'>
            <div className="container p-0 p-sm-0 ps-lg-5 pe-lg-5">
                <div className="row justify-content-end p-0 ps-sm-4 pe-sm-4 justify-content-md-center justify-content-xxl-end">
                    <div className="login-content col-12 p-4 col-sm-12 col-md-9 col-lg-8 col-xl-6 col-xxl-5">
                        <div className="ps-2 pe-2 pt-4">
                            <div className="login-logo mb-4">
                                <img src="https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg" alt="" />
                            </div>
                            <h3 className='mb-4'>Create Your DJI Account</h3>
                            <form onSubmit={handleSubmit} className='login-form'>
                                <div className='d-flex flex-column mb-4'>
                                    <label className='mb-2' htmlFor="">Email address</label>
                                    <input className='mb-1' name='email' value={email} onChange={handleChange} type="email" />
                                    {errors.email ? <span className='form-error d-flex align-items-center'><MdErrorOutline className='me-1' style={{ fontSize: "13px" }} />{errors.email}</span> : ""}
                                </div>
                                <div className='d-flex flex-column mb-4'>
                                    <label className='mb-2' htmlFor="">Password</label>
                                    <input className='mb-1' name='password' value={password} onChange={handleChange} type="password" />
                                    {errors.password ? <span className='form-error d-flex align-items-center'><MdErrorOutline className='me-1' style={{ fontSize: "13px" }} />{errors.password}</span> : ""}
                                </div>
                                <p className='terms-policy mb-2' style={{ fontSize: "14px" }}>By creating account, you conform that you agree to DJI <a href="">Privecy Policy</a> and <a href="">Terms of Use</a>.</p>
                                <div className='d-flex mb-4 pb-2 align-items-start'>
                                    <input type="checkbox" className='me-2 checkbox' style={{ width: "30px" }} />
                                    <p className='mb-0'>Get announcements, recommendations and updates about DJI Products, services, software updates and more.</p>
                                </div>
                                <button type='submit' className='mb-2 w-100'>Submit</button>
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
