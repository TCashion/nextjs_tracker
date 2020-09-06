import Link from 'next/link';

const Nav = () => {
    return (
        <header>        
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;