import React from "react";
import {useEffect} from 'react';
  
const Play = () => {

    useEffect(() => {
        document.getElementById('PlayNavLinkItem').classList.add('actived-link');
        return () => {
            document.getElementById('PlayNavLinkItem').classList.remove('actived-link');
        }
    }, []);

    return (
        <div className="container">
        <div className='overlay-img'></div>
        </div>
    );
};
  
export default Play;