import React, { useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
       <footer style={style}>
        <p className="text-center text-secondary-emphasis fw-bold">Copyright © {year} </p>
       </footer> 
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