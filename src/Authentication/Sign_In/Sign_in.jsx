import React from 'react'
import './Sign_in.css'
import { FaMoneyCheckAlt } from "react-icons/fa";

const Sign_in = () => {
    return (
        <>
            <div className='root'>
                <div className='container r'>
                    <div className='f-card'>
                        <h1 className='sign-in_'>Sign In</h1>
                        <p className='sing-in_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                        <div className=' social-media-button'>
                            <a href="https://google.com/" target="_blank" className='buttons'>Sign In With Google</a>
                            <a href="https://facebook.com/" target="_blank" className='buttons'>Sign In With Facebook</a>
                        </div>
                        <div class="sign-in-border-wrapper">
                            <div class="border"></div>
                            <div class="or-text-block">OR</div>
                            <div class="border"></div>
                        </div>
                        <form>
                            <div className='sign-in-input'>
                                <label htmlFor="email">Email</label>
                                <input type="text" placeholder='johndoe@gmail.com' />
                            </div>
                            <div className='sign-in-input'>
                                <label htmlFor="Password">Password</label>
                                <input type="password" placeholder='********' />
                            </div>
                            <div className='social-media-button'>
                                <span className='r'> <input type="checkbox" />Remember me</span>
                                <a href="" className='forgot-pass'>Forgot Password</a>
                            </div>

                            <button className='sign-in-button'>Sign In</button>
                            <p>Don't have an account? <a href="/signup" className='forgot-pass'>Sign Up</a></p>
                        </form>
                    </div>
                    <div className='f-card  s-card'>
                        <img src="https://assets.website-files.com/625653855a98a355d49f4743/625d219ca0be43d8e9c7ff53_Sign%20Up%20Image.png" alt="people" className='signup-image' />
                        <div className='logo '>
                            <FaMoneyCheckAlt className='pic' />
                            <p >Gold-Money</p>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sign_in