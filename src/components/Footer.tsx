import React from 'react';
import { COLORS } from '../assets/constant';

const Footer = () => {
    return (
        <div
            style={{
                background: COLORS.red,
                color: "white",
                textAlign: "center",
                padding: "5px 0",
            }}
        >
            <p style={{fontSize: "2em", margin: "0"}}>
                Movies & Series
            </p>
            <p>
                by Emilien VASCHALDE
            </p>
        </div>
    );
};

export default Footer;