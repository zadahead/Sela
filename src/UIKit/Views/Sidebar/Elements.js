

import { NavLink, Redirect } from 'react-router-dom';

const Elements = () => {
    return (
        <>
            <NavLink to="/elements/action">Action</NavLink>
            <NavLink to="/elements/input">Input</NavLink>
            <NavLink to="/elements/dropdown">Dropdown</NavLink>

            <Redirect from="/elements" exact to="/elements/input" />
        </>
    )
}

export default Elements;