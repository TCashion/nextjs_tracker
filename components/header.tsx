import { useState } from 'react'
import Nav from './nav'
import Sidenav from './sidenav'
import { NavLink } from '../types/interfaces'

const links: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
]

const Header = () => {

    const [sidenavVisible, setSidenavVisible] = useState(false);

    const handleClick = () => {
        setSidenavVisible(!sidenavVisible);
    };

    return (
        <header>
            <Nav 
                links={links}
            />
            <p
                id="hamburger-menu"
                className="sm:hidden m-8"
                onClick={handleClick}
            >
                menu
            </p>
            <Sidenav 
                links={links}
                visible={sidenavVisible}
            />
        </header>
    )
};

export default Header;