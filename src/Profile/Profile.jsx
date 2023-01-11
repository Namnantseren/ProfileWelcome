import React from "react";
import './Prostyle.css'

export default function logout(prop) {
    const { setlogout } = prop;
    return(
        <button className='hoh' onClick={() => setlogout()}>logout</button>
    )
}