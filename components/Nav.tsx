import Link from 'next/link'
import { NavProps } from '../types/interfaces'

const Nav = ({ links }: NavProps) => {
    return (
        <nav className="hidden sm:flex justify-center m-8">
            <ul className="flex">
                {links.map((link) => (
                    <li 
                        className="pr-8 pl-8"
                        key={`nav-link-${link.href}-${link.label}`}
                    >
                        <Link href={link.href}>
                            <a>{link.label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;