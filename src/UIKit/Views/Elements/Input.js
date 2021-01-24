import { useState } from 'react';

import { Article, Row, Header, Input } from "../../../UIKit";


const Layout = () => {
    const [h1Text, setH1Text] = useState('this is main value');

    const onChange = (value) => {
        setH1Text(value);
    }

    return (
        <div>
            <Article>
                <Header>
                    <h1>Input</h1>
                </Header>
                <Row>
                    <p>this is an input</p>
                </Row>
                <Row>
                    <Input value={h1Text} onChange={onChange} fix="upper"></Input>
                </Row>
                <Row>
                    <h1>{h1Text}</h1>
                </Row>
            </Article>
        </div>
    )
}

export default Layout;