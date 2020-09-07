import Nav from './nav'
import { NavLink } from '../types/interfaces'

const links: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
]

const Header = () => {

    const handleClick = () => {
        console.log('click');
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
        </header>
    )
}

export default Header