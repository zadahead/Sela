
import './Article.css';

const Article = (props) => {
    return (
        <div className="Article">
            {props.children}
        </div>
    )
}

export default Article;