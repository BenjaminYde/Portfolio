import Navigation from '../components/navigation';

import Head from "next/head";

export default function Page() {
  return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/images/tab_icon.ico" />
        </Head>
        <Navigation />
      </div>
  );
}