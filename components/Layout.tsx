import Head from 'next/Head'
import Header from '../components/header'
import { ChildrenProps } from '../@types/interfaces'

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <Head>
                <title>Tracker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
        </div>
    )
};


export default Layout;