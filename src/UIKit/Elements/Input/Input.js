import React from 'react';

import './Input.css';

import { Line, Icon } from '../../../UIKit';

class Input extends React.Component {

    //constructor
    constructor(props) {
        super(props);

        this.state = {
            isFocus: false,
            value: props.value
        }

        this.textInput = React.createRef();
        this.textInputWrap = React.createRef();
    }

    //when component first render 
    componentDidMount() {
        this.textInput.current.addEventListener("focus", this.focus);
        this.textInput.current.addEventListener("blur", this.blur);
        this.textInputWrap.current.addEventListener("click", this.focus);
    }

    focus = () => {
        if (!this.state.isFocus) {
            this.textInput.current.select();
            this.textInputWrap.current.classList.add('focused');
            this.setState({ isFocus: true });
        }
    }

    blur = () => {
        setTimeout(() => {
            this.setState({ isFocus: false });
        }, 300);
    }

    //when component is updated     
    componentDidUpdate() {
    }

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
                return value || '';
        }
    }

    getValue = () => {
        return this.fixText(this.state.value);
    }

    getPlaceholder = () => {
        return this.props.placeholder || 'Write something...';
    }

    getIcon = () => {
        return this.props.icon ? <Icon icon={this.props.icon}></Icon> : null;
    }

    getMaxLength = () => {
        return this.props.maxLength ? this.props.maxLength : '';
    }


    getCharactersLeft = () => {
        var total = this.props.maxLength;
        var length = this.textInput.current?.value.length || '0';

        return `${length}/${total}`;
    }

    //render 

    render = () => {
        return (
            <div className="Input">
                <div className="wrap" ref={this.textInputWrap}>
                    <Line>
                        <input ref={this.textInput} value={this.getValue()} onChange={this.onChange} placeholder={this.getPlaceholder()} maxLength={this.getMaxLength()}></input>
                        {this.getIcon()}
                    </Line>
                </div>
                {
                    (() => {
                        return this.props.maxLength ?
                            <Line justify="between" margin="t">
                                <div>Max {this.props.maxLength} Characters</div>
                                <div>{this.getCharactersLeft()}</div>
                            </Line>
                            :
                            null
                    })()
                }
            </div>
        )
    }

}

export default Input;