
import React from 'react';

import { Line, Layout } from './UIKit';

import { Route, NavLink } from 'react-router-dom';

import './UIKit/Styles/attributes.css';
import './UIKit/Styles/core.css';
import './UIKit/Styles/elements.css';
import './UIKit/Styles/layouts.css';

import { Inner, Logo, Nav } from './UIKit';

import NavView from './UIKit/Views/Layouts/Nav.js';
import LayoutView from './UIKit/Views/Layouts/Layout.js';

import InputView from './UIKit/Views/Elements/Input.js';

import ReduxView from './UIKit/Views/Views/Redux.js';
import CRUDView from './UIKit/Views/Views/CRUD.js';


import Layouts from './UIKit/Views/Sidebar/Layouts.js';
import Elements from './UIKit/Views/Sidebar/Elements.js';
import Views from './UIKit/Views/Sidebar/Views.js';

import { Alert, Confirm, Popup } from "./UIKit/Shared/Modal.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null,
      confirm: {},
      popup: {}
    }
  }

  componentDidMount = () => {
    window.alert = (msg) => { this.setState({ alert: msg }); }
    window.alertHide = () => { this.setState({ alert: null }); }

    window.confirm = (msg, onOk) => { this.setState({ confirm: { msg, onOk } }) }
    window.confirmHide = () => { this.setState({ confirm: {} }); }

    window.popup = (children, onOk) => { this.setState({ popup: { children, onOk } }) }
    window.popupHide = () => { this.setState({ popup: {} }); }
  }

  render = () => {
    return (
      <div className="App">

        <Alert msg={this.state.alert} onHide={window.alertHide} />
        <Confirm msg={this.state.confirm.msg} onOk={this.state.confirm.onOk} onHide={window.confirmHide} />
        <Popup onOk={this.state.popup.onOk} onHide={window.popupHide}>{this.state.popup.children}</Popup>


        <Layout template="main">
          <Line justify="center">
            <Inner>
              <Line justify="between">
                <Logo />
                <Nav template="header">
                  <NavLink to="/layouts">Layouts</NavLink>
                  <NavLink to="/elements">Elements</NavLink>
                  <NavLink to="/views">Views</NavLink>
                </Nav>
              </Line>
            </Inner>
          </Line>
          <Line justify="center">
            <Inner>
              <Layout template="sidebar">
                <div>
                  <Nav template="sidebar">
                    <Route path="/layouts" component={Layouts}></Route>
                    <Route path="/elements" component={Elements}></Route>
                    <Route path="/views" component={Views}></Route>
                  </Nav>
                </div>
                <div>
                  <Route path="/layouts/layout" exact component={LayoutView} />
                  <Route path="/layouts/nav" exact component={NavView} />

                  <Route path="/elements/input" exact component={InputView} />

                  <Route path="/views/redux" exact component={ReduxView} />
                  <Route path="/views/crud" exact component={CRUDView} />

                </div>
              </Layout>
            </Inner>
          </Line>
        </Layout>
      </div>
    );
  }
}

export default App;
