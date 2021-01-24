import logo from '../../../Images/logo.svg';
import { Line } from '../../../UIKit';

import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <Line>
                <img src={logo} alt="logo " />
                <div className="title">React UIKit</div>
            </Line>
        </div>
    )
}

export default Logo;