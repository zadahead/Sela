
import { useState } from 'react';

import { Table, Row, Line, Layout, Input, DropDown, Icon } from "../../../UIKit";

var questionsList = [
    { id: 'Q43', title: 'Interaction 1', date: 'Jan 11 2021' },
    { id: 'Q45', title: 'Interaction 2', date: 'Jan 11 2021' },
    { id: 'Q53', title: 'Interaction 3', date: 'Jan 11 2021' },
    { id: 'Q56', title: 'Interaction 4', date: 'Jan 11 2021' }
];

var sortList = [
    { id: '-1', value: 'None' },
    { id: 'title', value: 'Name' },
    { id: 'date', value: 'Date Created' }
]

var inputParams = {
    maxLength: 15
}

const CRUD = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [sortQuery, setSortQuery] = useState(1);

    //events
    const onChangeDropDown = (val) => {
        console.log(val);
        setSortQuery(val);
    }

    const onChangeInput = (val) => {
        console.log(val);
        setSearchQuery(val);
    }

    const getFilteredData = () => {
        if (!searchQuery) { return [...questionsList] }

        return questionsList.filter(i => {
            var isTitle = i.title.indexOf(searchQuery.toLowerCase().toLocaleLowerCase()) !== -1;
            var isId = i.id.indexOf(searchQuery.toLowerCase().toLocaleLowerCase()) !== -1;

            return isTitle || isId;
        })
    }

    const getSortedData = () => {
        var list = getFilteredData();
        return list.sort((a, b) => {
            if (!a[sortQuery]) { return 1 }

            return a[sortQuery] > b[sortQuery] ? -1 : 1;
        })
    }

    const onEdit = (index) => {

        console.log('edit', index);
        //console.log(e);
        //window.popup(<h1>popop</h1>)
    }

    const onDelete = (index) => {
        console.log('delete', index);
        window.confirm(`This will delete ${questionsList[index].id}. continue?`, () => {

        })

    }



    //state



    var questionsMap = {
        headers: {
            id: 'No,',
            title: 'Name',
            date: 'Creation Date',
            action: 'Actions'
        },
        addons: {
            action: (index) => {

                return (
                    <Line>
                        <Icon edit onClick={() => onEdit(index)}></Icon>
                        <Icon trash onClick={() => onDelete(index)}></Icon>
                    </Line>
                )
            }
        },
        list: getSortedData()
    }
    //



    return (
        <Layout>
            <Row>
                <Line justify="center">
                    <h1>CRUD Questions</h1>
                </Line>
                <Row>
                    <Line justify="between">
                        <div>
                            <Input icon="search" onChange={onChangeInput} placeholder="Search" maxLength={inputParams.maxLength}></Input>
                        </div>
                        <div>
                            <DropDown list={sortList} onChange={onChangeDropDown}></DropDown>
                        </div>
                    </Line>
                </Row>
                <Row>
                    <Table map={questionsMap} />
                </Row>
            </Row>
        </Layout>
    )
}

export default CRUD;