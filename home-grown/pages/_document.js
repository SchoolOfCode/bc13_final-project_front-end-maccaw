import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <title>Home Grown</title>
      <link rel="icon" type="image/png" href="icons/browsertablogo.png"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
