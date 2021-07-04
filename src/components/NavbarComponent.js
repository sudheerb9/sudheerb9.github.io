import React from 'react';

function Navbar () {
    return(
        <div className="nav">
            <h4 className="nav-title">Sudheer Bulusu</h4>
            <div className="nav-links">
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Projects</a>
                <a className="nav-link" href="#">Contact</a>
            </div>
            <div className="nav-empty"></div>
        </div>
    );
}

export default Navbar;