import React from 'react';

const Hamburger = ({ onHamburgerIconClick }) => {
    return (
        <div className="menu-btn" onClick={onHamburgerIconClick}>
            <i className="fas fa-bars fa-2x"></i>
        </div>
    );
};

export default Hamburger;