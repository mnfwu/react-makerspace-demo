import React, {useState} from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import screwIcon from '@iconify/icons-uil/screw';
import './NavButton.css'

const NavButton = () => {
    let [active, toggleActive] = useState('inactive');

    return (
        <div onClick={()=> toggleActive(active === 'inactive' ? active = 'active' : active = 'inactive')} className="mobile-show">
            <div className={`float-${active}`}>
                <div className="menu-float blu-bg">
                floating menu
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

export default NavButton