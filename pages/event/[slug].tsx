import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Event = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <h1>Event</h1>
            <h2>{ slug }</h2>
        </Layout>
    )
}

export default Event;