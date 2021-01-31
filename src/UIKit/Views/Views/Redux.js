import { useState } from 'react';

import { Row, Line, Layout, Box, Input } from "../../../UIKit";

const Redux = () => {
    const [inputValue, setInputValue] = useState('');


    const onChange = (val) => {
        setInputValue(val);
    }
    return (
        <Layout>
            <Row>
                <Line justify="center">
                    <Box>Redux</Box>
                </Line>
                <Line justify="between">
                    <Box>
                        <Input onChange={onChange} value={inputValue}></Input>
                    </Box>
                    <Box>{inputValue}</Box>
                </Line>
            </Row>
        </Layout>
    )
}

export default Redux;