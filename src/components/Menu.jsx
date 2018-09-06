import React from "react";

const Menu = () => (
    <div className="sidebar">
        <div className="header">
            <p>Alyssa</p>
            <p>Alecci</p>
        </div>

        <div className="description" align="center">
        <p>Frontend designer,</p> <p>illustrator,</p> <p>tea enthusiast.</p>
         </div>  

         <div className="sidebarlinks">
         <ul>
         <li><a href="/my-portfolio/about">About</a></li>
         <li><a href="/my-portfolio/portfolio">Portfolio</a></li>
         <li><a href="/my-portfolio/contact">Contact</a></li>
         </ul>
         </div>

    </div>
);

export default Menu;