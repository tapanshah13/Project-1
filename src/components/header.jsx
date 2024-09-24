import React from "react";
import headerImage from "../assets/awning.png"

const Header = () => {
    return (
        <div className="header">
            <img src={headerImage} alt="awning" />
            <h1>Food Trucks Favorites</h1>
        </div>
    )
}

export default Header