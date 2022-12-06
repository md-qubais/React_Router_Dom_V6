import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'

const Contact = () => {
    const nagivate = useNavigate();
    // console.log(useParams());
    const location = useLocation();
    console.log(location);
    const handleClick = () => {
        nagivate('/')
    }
    return (
        <>
            <h1> contact us</h1>
            <button onClick={handleClick}>Go back</button>
        </>
    );
}

export default Contact;
