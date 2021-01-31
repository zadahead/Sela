import React from 'react';

import './DropDown.css';

import { Line, Icon } from '../../index.js';
import { Core } from '../../Logic/core.js';

export class Dropdown extends React.Component {

    constructor(props) {
        super(props);



        this.state = { isOpen: false, list: [], name: props.name, onChange: props.onChange, selected: props.selected, title: props.title || props.name || 'Please Select' || [] }

        this.ref = React.createRef();
        this.refListwrap = React.createRef();
        this.body = new Core();
    }

    componentDidMount() {
        this.body.bind('click', this.hide);
        this.loadDefaults();
    }

    loadDefaults = async () => {
        var { list, selected } = this.props;

        if (typeof (this.props.list) == 'function') {
            list = await this.props.list();
        }

        this.setState({
            list: list,
            selected: selected
        })
    }

    componentDidUpdate() {
        if (this.props.force && (this.props.selected !== this.state.selected || this.props.list !== this.state.list)) {
            this.loadDefaults();
        }

        this.setListPos();
    }


    setListPos = () => {
        if (this.refListwrap.current) {
            var elem = this.refListwrap.current;
            var rt = window.innerWidth - elem.getBoundingClientRect().right;
            if (rt < 0) {
                elem.classList.add("right");
            }
        }
    }

    componentWillUnmount() {
        this.body.unbind('click', this.hide);
    }


    hide = (e) => {
        if (this.ref.current.contains(e.target)) {
            return;
        }

        this.isOpen(false);
    }


    toggle = () => {
        this.isOpen(!this.state.isOpen);
    }

    isOpen = (isOpen) => {
        this.setState({
            isOpen: isOpen
        })
    }

    select = (e) => {
        var selected = e.target.getAttribute("data-id");

        this.setState({
            isOpen: !this.state.isOpen,
            selected: selected
        })

        setTimeout(() => {
            if (this.props.onChange) {
                this.props.onChange(selected, this.state.name, this.getSelectedItem());
            }
        }, 10);
    }

    getTitle = () => {
        var selectedItem = this.getSelectedItem();

        var sel = this.getSelected() && selectedItem ? this.getItem(selectedItem).value : this.state.title;

        return sel;
    }

    getSelectedItem = () => {
        let sel = this.getList().find(i => {
            return this.getItem(i).id + '' === this.getSelected()
        });

        return sel;
    }

    getItem = (i) => {
        return this.props.onRender ? this.props.onRender(i) : { ...i };
    }

    getSelected = () => {
        return this.state.selected;
    }

    getList = () => {
        return this.state.list;
    }


    renderList = () => {
        if (this.state.isOpen && this.getList().length) {
            const map = () => {
                return this.getList().map(item => {
                    var it = this.getItem(item);

                    let selected = it.id === this.getSelected() ? 'selected' : '';
                    return (<div className={`item ${selected}`} key={it.id} data-id={it.id} onClick={this.select}>{it.value}</div>);
                })
            }

            return (
                <div className='listwrap' ref={this.refListwrap}>
                    <div className="list">
                        {map()}
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="Dropdown" ref={this.ref}>
                <div className="trig" onClick={this.toggle}>
                    <Line justify="between">
                        <div className="title">{this.getTitle()}</div>
                        <Icon sort-down />
                    </Line>
                </div>
                {this.renderList()}
            </div>
        )
    }
}

export default Dropdown;