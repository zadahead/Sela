import { Article, Row, Header, Box } from "../../../UIKit";


const Layout = () => {
    return (
        <div>
            <Article>
                <Header>
                    <h1>Layout</h1>
                </Header>
                <Row>
                    <p>this is a layout</p>
                </Row>
                <Box>
                    asdasdasasd
                </Box>
                <Row>
                    <h2>another headline</h2>
                    <Row>
                        <div>this is a content text</div>
                    </Row>
                </Row>
            </Article>
        </div>
    )
}

export default Layout;