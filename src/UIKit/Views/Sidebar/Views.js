
import { NavLink, Redirect } from 'react-router-dom';

const Layouts = () => {
    return (
        <>
            <NavLink to="/views/redux">Redux</NavLink>
            <NavLink to="/views/crud">CRUD</NavLink>

            <Redirect from="/views" exact to="/views/crud" />
        </>
    )
}

export default Layouts;