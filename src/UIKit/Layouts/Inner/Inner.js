

import './Inner.css';

const Inner = (props) => {
    return (
        <div className="Inner">
            {props.children}
        </div>
    )
}

export default Inner;