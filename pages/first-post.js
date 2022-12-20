import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import Script from 'next/script';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

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
        <Layout>
            <Head>
                <title>Hello there!</title>
                <link rel="icon" href="/images/profile.jpg" />
            </Head>

{/*            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />*/}

            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            <img
                 src="/images/profile.jpg" // Route of the image file
                 height={256} // Desired size with correct aspect ratio
                 width={256} // Desired size with correct aspect ratio
                 alt="Your Name"/>

            {/*<Image
                src="/images/profile.jpg" // Route of the image file
                height={256} // Desired size with correct aspect ratio
                width={256} // Desired size with correct aspect ratio
                alt="Your Name"
            />*/}

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    );
}