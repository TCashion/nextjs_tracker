import Head from 'next/Head';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { children }
        </div>
    )
};


export default Layout;