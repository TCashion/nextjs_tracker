import Link from 'next/link';
import { link } from '../types/interfaces';

const links: link[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
];

const Nav = () => {
    return (
        <header>
            <nav className="flex justify-center m-8">
                <ul className="flex">
                    {links.map((link, idx) => (
                        <>
                            <li 
                                className="pr-8 pl-8"
                                key={idx}
                            >
                                <Link href={link.href}>
                                    <a>{link.label}</a>
                                </Link>
                            </li>
                            {idx !== links.length - 1 && '|'}
                        </>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;