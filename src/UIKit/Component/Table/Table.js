import React, { useState, useEffect } from 'react';

import './Table.css';

const Table = (props) => {

    const [row0Clicked, setRow0Clicked] = useState(0);
    const [row1Clicked, setRow1Clicked] = useState(0);

    useEffect(() => {
        console.log('ComponentDidMount');

        return () => {
            console.log('ComponentWillUnmount');
        }
    }, []);

    useEffect(() => {
        console.log('row1Clicked state has changed');
    }, [row1Clicked]);

    useEffect(() => {
        console.log('ComponentDidUpdate');
    });

    const colWidth = 100 / Object.keys(props.map.headers).length;

    const colStyle = {
        width: `${colWidth}%`
    }


    const onRowClicked = (index) => {
        if (index) {
            setRow1Clicked(row1Clicked + 1);
        } else {
            setRow0Clicked(row0Clicked + 1);
        }
    }

    const renderHeaders = () => {
        return Object.keys(props.map.headers).map(i => {
            return <th key={i} style={colStyle}>{props.map.headers[i]}</th>;
        })
    }

    const renderList = () => {
        return props.map.list.map((item, index) => {
            return (
                <tr key={index} onClick={() => { onRowClicked(index) }}>
                    {renderListItem(item, index)}
                </tr>
            )
        })
    }


    const renderListItem = (item, rowIndex) => {
        var it = { ...item, ...props.map.addons };

        return Object.keys(it).map((i, index) => {
            return <td key={i} style={colStyle}>{getAddons(it[i], rowIndex)}</td>;
        })
    }

    const getAddons = (i, index) => {
        if (typeof (i) == "function") {
            console.log('index', index);
            return i(index);
        } else {
            return i;
        }
    }

    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        {renderHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
            <div>Row 0 has been clicked {row0Clicked}</div>
            <div>Row 1 has been clicked {row1Clicked}</div>
        </div>
    )
}

export default Table;