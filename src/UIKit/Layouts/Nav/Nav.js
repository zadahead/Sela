

import './Nav.css';

const Nav = (props) => {
    var className = `Nav ${props.template}`;

    return (
        <nav className={className}>
            {props.children}
        </nav>
    )
}

export default Nav;