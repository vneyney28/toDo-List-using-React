import React from "react";

function Footer(){

    var d= new Date();
    return(
        <footer>
    <p>CODED by <a href="">Varshney</a> </p>
    <span >COPYRIGHT © {d.getFullYear()}</span>
    </footer>
    );
}

export default Footer;