import React from 'react';
import {NavLink} from "react-router-dom";
import { motion } from "framer-motion";

const HomeFooter = () => {

    return (
        <div
          style={{
            backgroundColor: '#AFD951',
            height: '20%',
            width: '100%',
            position: 'fixed',
            left: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 20px',
            zIndex: 5
          }}
        >   
            <div>
                <img src="footer_garden.svg" style={{ left:'-15%', position:'fixed', bottom:'-22%', height:'50%' }} />
            </div>
            <div style={{ position: 'absolute', marginRight: '10%' }}>

              <a href='/garden' style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                src={"footer_visit.svg"} 
                />
              </a>

            </div>
            <img src="footer_flowers.svg" alt="Footer Flowers" style={{ height: '120%', marginRight: '2%', marginTop: '-1%' }} />
        </div>
    );
};

export default HomeFooter;

