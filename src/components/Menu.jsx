import React from "react";

const Menu = () => (
    <div className="menu">
        <div className="header">
            <p>Alyssa Alecci</p>
        </div>

        <div className="description" align="center">
        <span>Frontend designer,</span> <span>illustrator,</span> <span>tea enthusiast.</span>
         </div>  

         <div className="menulinks">
         <ul>
         <li><a href="/my-portfolio/about">About</a></li>
         <li><a href="/my-portfolio/portfolio">Portfolio</a></li>
         <li><a href="/my-portfolio/contact">Contact</a></li>
         </ul>
         </div>

    </div>
);

export default Menu;