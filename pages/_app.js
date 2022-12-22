import "../styles/globals.scss";
import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/fonts/global_fonts.css"/>
                <link rel="icon" href="/images/icons/tab_icon.ico"/>
{/*
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
*/}
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
};