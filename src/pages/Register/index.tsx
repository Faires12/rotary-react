import React from 'react'
import './styles.css'

const Register = () => {
    return(
        <>
            <div className="big-ball-1"></div>
    <div className="big-ball-2"></div>
    <div className="main-form">
        <div className="main-form-title">
            <div className="main-form-title-x">X</div>
            <div className="main-form-title-signup">
                Sign Up
            </div>
            <div className="main-form-title-login">
                Login
            </div>
        </div>
        <input type="text" className="input-form" placeholder="Name"/>
        <input type="text" className="input-form" placeholder="Email"/>
        <input type="password" className="input-form" placeholder="Password"/>
        <div className="terms">
            <input type="checkbox" className="input-check"/>
            <div className="terms-text">
                I would like to receive your newsletter and other promotional information.
            </div>
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="forgot-password">
            Forgot your password?
        </div>
    </div>
        </>
    )
}

export default Register