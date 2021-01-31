


import './Box.css';

const Box = (props) => {


    const getBodyText = () => {
        return props.body.replace(/\</gi, '&lt;').replace(/\>/gi, '&gt;').replace(/[\r\n]+/gi, '<br />');
    }

    function createMarkup() {
        return { __html: getBodyText() };
    }

    function getBody() {
        return props.body ? <span dangerouslySetInnerHTML={createMarkup()} /> : props.children;
    }

    return (
        <div className="Box">
            {getBody()}
        </div>
    )
}

export default Box;