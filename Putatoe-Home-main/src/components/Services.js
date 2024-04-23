import React from 'react';
import "../App.css";
import rechargeLogo from "../images/image1.png";

const Services = () => {
  return (
    <div>
        <div className="mainContainer">
            <div>
                <img className="mainLogo" src={rechargeLogo} alt = "Recharge Logo"></img>
            </div>
        </div>
        <div className="icons">
            <div>
                <div>
                    <i className="fa-solid fa-mobile-screen"></i>
                </div>
                <span>Prepaid Mobile recharge</span>
            </div>
            <div>
                <div>
                    <i className="fa-sharp fa-solid fa-tv"></i>
                </div>
                <span>DTH Recharge</span>
            </div>
            <div>
                <div>
                  <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
                </div>
                <span>Loans</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-bullhorn"></i>
                </div>
                <span>Promotion</span>
            </div>
            <div>
                <div>
                    <i className="fa-regular fa-newspaper"></i>
                </div>
                <span>News</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-message"></i>
                </div>
                <span>Blog</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-people-group"></i>
                </div>
                <span>Jobs</span>
            </div>
            <div>
                <div>
                    <i className="fa-sharp fa-solid fa-comment"></i>
                </div>
                <span>Anonymous Feedback</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-fire-burner"></i>
                </div>
                <span>Gas Booking</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
                <span>Electricity Bill</span>
            </div>
            <div>
                <div>
                    <i className="fa-solid fa-droplet"></i>
                </div>
                <span>Water Bill</span>
            </div>
            <div>
                <div>
                <i class="fa-solid fa-angle-right"></i>
                </div>
                <span>See More</span>
            </div>
        </div>
    </div>
  )
}

export default Services