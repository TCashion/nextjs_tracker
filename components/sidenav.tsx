import Link from 'next/link'
import { NavProps } from '../types/interfaces'

const Sidenav = ({ links, visible }: NavProps) => {

    return (
        <nav className={`${visible ? 'block' : 'hidden'} justify-center p-8 bg-white h-full w-9/12 fixed top-0`}>
            <ul className="flex flex-col">
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

export default Sidenav;