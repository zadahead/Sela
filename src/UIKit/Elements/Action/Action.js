
import './Action.css';

export const Action = (props) => {
    var className = props.className + ` ${props.loading ? 'on_loading' : ''}`;
    return (
        <div className={`Action ${className}`} onClick={props.onClick} >
            <div className="text">
                {props.value}
            </div>
        </div>
    )
}

export const LinkBtn = (props) => {
    var className = props.className + ` LinkBtn`;

    return Action({ ...props, className: className });
}