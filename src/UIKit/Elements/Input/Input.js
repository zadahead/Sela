import React from 'react';

import './Input.css';

class Input extends React.Component {

    //constructor
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    //when component first render 

    //when component is updated 

    //when component is deleted


    onChange = (e) => {
        var value = e.target.value;

        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }

        this.setState({
            value: value
        })
    }

    fixText = (value) => {
        switch (this.props.fix) {
            case 'upper':
                return value.toUpperCase();
            case 'lower':
                return value.toLowerCase();
            default:
                return value;
        }
    }

    getValue = () => {
        console.log(this.state.value);
        return this.fixText(this.state.value);
    }

    //render 

    render = () => {
        return (
            <div className="Input">
                <input value={this.getValue()} onChange={this.onChange}></input>
            </div>
        )
    }

}

export default Input;