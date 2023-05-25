import React, { useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
       <div className="">
        <p className="text-center text-secondary-emphasis fw-bold">Copyright @ {year} </p>
       </div> 
    )
}

export default Footer;