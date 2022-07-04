import React from 'react'
import './styles.css'

const Login = () => {
    return(
        <>
            <div className="big-ball-1"></div>
            <div className="big-ball-2"></div>
            <div className="main-form">
                <div className="main-form-title">
                    <div className="main-form-title-signup">
                        Log In
                    </div>
                </div>
                <input type="text" className="input-form" placeholder="Email"/>
                <input type="password" className="input-form" placeholder="Password"/>
                <div className="line"></div>
                <button className="signup-button">Log In</button>
                <div className="forgot-password">
                    Forgot your password?
                </div>
            </div>
        </>
    )
}

export default Login