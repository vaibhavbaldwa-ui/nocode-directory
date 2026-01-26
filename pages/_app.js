import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="izbrIsILGCMw6QV1lkfHfWBh_GL50Q2JzHwH2oOmlmw" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5099977081953527"
     crossorigin="anonymous"></script>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5099977081953527"
     crossorigin="anonymous"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FB0V1ES4MQ');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}