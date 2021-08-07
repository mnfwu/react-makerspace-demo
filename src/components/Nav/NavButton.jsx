import React, {useState} from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import screwIcon from '@iconify/icons-uil/screw';
import './NavButton.css'

const NavButton = () => {
    let [active, toggleActive] = useState('inactive');

    return (
        <div onClick={()=> toggleActive(active === 'inactive' ? active = 'active' : active = 'inactive')} className="grn-bg circle mobile-show">
            <div>
                <div className={active}>
                 <Icon className="icon-screw" icon={screwIcon} />
                 </div>
            </div>
        </div>
    )
}

export default NavButton