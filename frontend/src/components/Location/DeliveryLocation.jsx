import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { assets } from "../../assets/assets";
import "./DeliveryLocation.css"

const DeliveryLocation = ({ onClose }) => {
    const [pincode, setPincode] = useState('');

    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    };

    const handlePincodeSubmit = () => {
        // Add logic to handle the pincode submission
        console.log(`Pincode submitted: ${pincode}`);
    };

    return (
        <div className="delivery-location-popup">
            <div className="popup-content">
                <FaTimes className="location-close-icon" onClick={onClose} />
                <div className="de-location">
                    <div className='delivery-one'>
                        <h1>LOCATION</h1>
                        <p>Select your location/address to<br /> see accurate product delivery<br /> date.</p>
                        <img src={assets.Deliverytruck} alt="Deliverytruck" style={{width:'150px', margin:'40px'}}/>
                    </div>
                    
                    <div className='delivery-two'>
                        <>
                            <h2>SELECT ADDRESS</h2>
                            <div className="del-login">
                                <p>Login to view your saved delivery address</p>
                                <button style={{ padding: '5px', background: "blue", color: "white",width:'310px',margin:'10px 0' ,height:"40px", cursor:"pointer"}}>
                                    Login
                                    </button>
                            </div>
                        </>
                        <>
                    <p style={{margin:'20px 160px',color:'grey',fontSize:""}}>OR</p>
                    </>
                        <>
                            <h2 style={{padding:"0px 0 20px 0"}}>PINCODE</h2>
                            <div className="del-pin">
                                <p>Enter a pincode</p>
                                <input 
                                    type="text" 
                                    value={pincode} 
                                    onChange={handlePincodeChange} 
                                    placeholder="Enter pincode" 
                                    style={{padding: '5px', color: "white",width:'150px',margin:'10px 0' ,height:"40px"}}
                                />
                                <button onClick={handlePincodeSubmit} style={{ padding: '5px', background: "blue", color: "white",width:'150px' ,margin:'10px 0 0 10px' ,height:"40px", cursor:"pointer"}}>Apply</button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryLocation;
