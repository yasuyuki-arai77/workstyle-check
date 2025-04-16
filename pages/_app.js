import Script from 'next/script';
import '../styles/globals.css'; // ← Tailwind用

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics埋め込み */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7DBJL8W2NN"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7DBJL8W2NN', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* アプリ本体 */}
      <Component {...pageProps} />
    </>
  );
}
