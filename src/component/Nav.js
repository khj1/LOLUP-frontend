import React, { Component } from 'react';

class Nav extends Component {
    
    render() {
        const navStyle = {
            border: "1px solid black"
        };
        return (
            <div className="NavBar" style={navStyle}>
                menu
            </div>
        );
    }
}

export default Nav;