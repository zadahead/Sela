import Layout from "../../Layouts/Layout/Layout"

import { NavLink, Redirect } from 'react-router-dom';

const Layouts = () => {
    return (
        <>
            <NavLink to="/layouts/layout">Layout</NavLink>
            <NavLink to="/layouts/inner">Inner</NavLink>
            <NavLink to="/layouts/line">Line</NavLink>
            <NavLink to="/layouts/nav">Nav</NavLink>

            <Redirect from="/layouts" exact to="/layouts/layout" />
        </>
    )
}

export default Layouts;