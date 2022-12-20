import Head from 'next/head'
import Navigation from '../components/navigation';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Page({ allPostsData }) {
    return (
        <div>
            <Head>
                <title>Guides</title>
                <link rel="icon" href="/images/tab_icon.ico" />
            </Head>
            <Navigation />
        </div>
    );
}