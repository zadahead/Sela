

export const Icon = (props) => {
    const getIcon = () => {
        if (props.icon) {
            return props.icon;
        } else {
            for (var ic in props) {
                return ic;
            }
        }
    }
    return (
        <i className={`fas fa-${getIcon()} ${props.className} ${props.onClick ? 'action' : ''}`} onClick={props.onClick}></i>
    )
}