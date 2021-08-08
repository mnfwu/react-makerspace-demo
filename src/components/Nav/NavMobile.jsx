import React, {useState} from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import { Link } from 'react-router-dom';
import screwIcon from '@iconify/icons-uil/screw';
import './NavMobile.css'

const NavMobile = () => {
    let [active, toggleActive] = useState('inactive');

    return (
        <div onClick={()=> toggleActive(active === 'inactive' ? active = 'active' : active = 'inactive')} className="mobile-show">
            <div className={`float-${active}`}>
                    <div className="menu-float blu-bg">
                        <ul className="menu-mobile mobile-show">
                        <div className={`float-${active}`}>
                            <li className="nav-link-mobile"><Link to='/'>Home</Link></li>
                            <li className="nav-link-mobile"><Link to='/events'>Events</Link></li>
                            <li className="nav-link-mobile"><Link to='/info'>Info</Link></li>               
                            <li className="nav-link-mobile"><Link to='/projects'>Projects</Link></li>
                        </div>
                        </ul>
                    </div>
            </div>
            <div className="grn-bg circle">
                <div className={active}>
                 <Icon className="icon-screw" icon={screwIcon} />
                 </div>
            </div>
        </div>
    )
}

export default NavMobile 