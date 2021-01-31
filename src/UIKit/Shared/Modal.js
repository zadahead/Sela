import React from 'react';
import ReactDOM from "react-dom";

import { Row, Action, Line } from "../../UIKit";

// These two containers are siblings in the DOM
const modalRoot = document.getElementById('root-modal');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export class Alert extends React.Component {


    onOk = () => {
        if (this.props.onOk) {
            this.props.onOk();
        }
        this.onHide();
    }

    onHide = () => {
        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    getContent = () => {
        if (this.props.popup) {
            return this.props.children;
        } else {
            return this.props.msg;
        }
    }

    getActions = () => {
        if (this.props.confirm) {
            return (
                <Line justify="center">
                    <Action className="secondary" value="Cancel" onClick={this.onHide} />
                    <Action value="OK" onClick={this.onOk} />
                </Line>
            )
        }

        else if (this.props.popup) {
            return (
                <Line justify="center">
                    <Action className="secondary" value="Cancel" onClick={this.onHide} />
                    <Action value="Save" onClick={this.onOk} />
                </Line>
            )
        }

        else {
            return <Action value="OK" onClick={this.onHide} />;
        }
    }

    render() {
        var content = this.getContent();

        if (content) {
            return (
                <Modal>
                    <div className="Alert">
                        <div className="wrap">
                            <h3>{this.props.title}</h3>
                            <Row>
                                {content}
                            </Row>
                            <Row justify="center">
                                {this.getActions()}
                            </Row>
                        </div>
                    </div>
                </Modal>
            )
        } else {
            return null;
        }

    }
}

export class Confirm extends Alert {
    render() {
        return <Alert confirm title='Please Confirm' msg={this.props.msg} onOk={this.props.onOk} onHide={this.props.onHide}></Alert>
    }
}

export class Popup extends Alert {
    render() {
        return (
            <Alert popup title={this.props.title} onOk={this.props.onOk} onHide={this.props.onHide}>
                {this.props.children}
            </Alert>
        )
    }
}

export default Modal;