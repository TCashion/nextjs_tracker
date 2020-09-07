import Link from 'next/link'
import { NavProps } from '../types/interfaces'

const Sidenav = ({ links }: NavProps) => {
    return (
        <nav className="sm:hidden justify-center m-8">
            <ul className="flex">
                {links.map((link) => (
                    <li 
                        className="pr-8 pl-8"
                        key={link.href}
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

export default Sidenav