import Head from 'next/Head'
import { ReactNode } from 'react'
import Nav from '../components/nav'


interface Props {
    children: ReactNode
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>Tracker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {children}
        </div>
    )
};


export default Layout;