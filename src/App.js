
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

import Layouts from './UIKit/Views/Sidebar/Layouts.js';
import Elements from './UIKit/Views/Sidebar/Elements.js';

function App() {
  return (
    <div className="App">

      <Layout>
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
                </Nav>
              </div>
              <div>
                <Route path="/layouts/layout" exact component={LayoutView} />
                <Route path="/layouts/nav" exact component={NavView} />

                <Route path="/elements/input" exact component={InputView} />

              </div>
            </Layout>
          </Inner>
        </Line>
      </Layout>
    </div>
  );
}

export default App;
