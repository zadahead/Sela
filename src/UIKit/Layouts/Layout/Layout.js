
//layouts -- functional componenets
//elements state -- calss components

import './Layout.css';

const Layout = (props) => {
    var className = `Layout ${props.template}`;
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Layout;