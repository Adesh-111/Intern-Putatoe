import React from 'react'
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav>
            <div className="top">
                <span className="location_icon"><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                <span className="location_text">Current Location</span>
                <span className="notifications_icon"><i className="fa-solid fa-bell"></i></span>
                <span className="cart_icon"><i className="fa-solid fa-cart-plus"></i></span>
            </div>
            <div className="searchbar">
                <div className="search_area">
                    <div className="search_icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <input type="text" placeholder="Search for Products..."></input>
                </div>
                <div className="Voice_recognition"><i className="fa-solid fa-microphone"></i></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
