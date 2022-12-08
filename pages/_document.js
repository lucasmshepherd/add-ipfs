import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon.png" />
      </Head>
      <body>
        <div className="monitor-effect-overlay"></div>
        <Main />
        <NextScript />
      </body>
    </Html>

  )
}