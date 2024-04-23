import React from 'react';
import "../App.css";
import Logo from "../images/image2.png"

const Footer = () => {
  return (
    <>
      <div className='putatoeLogo'>
          <img src = {Logo} alt='Logo'></img>
        </div>
        <div className='icons footer'>
            <div>
                <div>
                    <i class="fa-solid fa-house"></i>
                </div>
                <span>Home</span>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <span>Profile</span>
            </div>
            <div className='logo-div'>
                <div className='logo-icon'>
                    <img src = {Logo} alt='Logo'></img>
                </div>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-list"></i>
                </div>
                <span>Follow List</span>
            </div>
            <div>
                <div>
                    <i class="fa-brands fa-rocketchat"></i>
                </div>
                <span>Chat</span>
            </div>
        </div>
    </>
  )
}

export default Footer
