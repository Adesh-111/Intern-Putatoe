import React from 'react';
import "../App.css";

const ServiceProviders = () => {
  return (
    <div>
        <div className="service_products">
            <div className="head">All Popular Service Providers</div>
            <div className="sub_head">Consultancy</div>
            <div className="companies_container">
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B8E8FC"}}>A</div>
                    <div className="text">
                        Service Provider 1
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B3FFAE"}}>B</div>
                    <div className="text">
                        Service Provider 2
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#B1AFFF"}}>C</div>
                    <div className=" text">
                        Service Provider 3
                    </div>
                </div>
                <div className="companies">
                    <div className="image" style={{backgroundColor : "#fdb1c8"}}>D</div>
                    <div className="text">
                        Service Provider 4
                    </div>
                </div>
            </div>
        </div>
        <div className="service_products">
            <div className="head">Services We Provide</div>
            <div className="companies_container">
                <div className="providing_services">
                    <div><h3><b>Consultancy</b></h3></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceProviders