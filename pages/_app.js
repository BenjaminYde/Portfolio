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
            </Head>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
};