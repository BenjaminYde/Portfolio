import "../styles/globals.scss";
import Head from "next/head";
import Navigation from "../components/navigation";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/tab_icon.ico"/>
            </Head>
            <Navigation/>
            <Component {...pageProps} />
        </>
    )
};