import React from 'react';
import check from "../../assets/Check Mark.png";
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return(
        <div className='confirm'>
            <div>
                <h1 className='confirmation-title'>Your reservation has been <span>confirmed!</span></h1>
                <img src={check} className='confirm-check' alt=''/>
                <Link to="/"><button className='confirm-back-btn'>Back to Home</button></Link>
            </div>
        </div>
    )
}

export default ConfirmedBooking