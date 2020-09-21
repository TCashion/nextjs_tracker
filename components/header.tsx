import { useState } from 'react'
import Nav from './nav'
import Sidenav from './sidenav'
import Overlay from './overlay'
import { NavLink } from '../@types/interfaces'

const links: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Habits', href: '/habits' },
    { label: 'About', href: '/about' },
]

const Header = () => {

    const [sidenavVisible, setSidenavVisible] = useState(false);

    const handleClick = () => {
        setSidenavVisible(!sidenavVisible);
    };

    return (
        <header className="overflow-hidden">
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
            <Overlay 
                visible={sidenavVisible}
                handleClick={handleClick}
            />
        </header>
    )
};

export default Header;