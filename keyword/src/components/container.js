import React from 'react';
import logoA1 from "../logo/logo-a1-digihub.png";

class Container extends React.Component {
    render() {
    return (
        <div className="container-fluid">
        <a href="#" title="logo" className="logo">
        <img src={logoA1} width="32px" alt="logo" />
        </a>

    <div className="dropdown dropdown-list-menu-a1">
        <button type="button" className="btn-menu" data-toggles="dropdown">
            <i className="icon-menu-a1" />Connectors</button>
    </div>
    </div>
    );
    }
}
export default Container;