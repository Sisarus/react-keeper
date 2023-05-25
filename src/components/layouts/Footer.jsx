import React, { useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
       <div style={style}>
        <p className="text-center text-secondary-emphasis fw-bold">Copyright © {year} </p>
       </div> 
    )
}

export default Footer;

const style = {
    position: 'absolute',
    textAling: 'center',
    bottom: '0',
    width: '100%',
    height: '2.5rem'
}