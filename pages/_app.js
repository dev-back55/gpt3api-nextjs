import Head from "next/head.js"
import Link from "next/link"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>GPT3&DALL-E API</title>
      <meta name="description" content="GPT3&DALL-E API in Next.js example coding by Horacio Abitú" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
      <Component {...pageProps} />
      <div className="footer">
        <p>
          <Link href="/" style={{ color: 'rgb(46, 98, 255)' }}>Texto</Link>
          <Link href="/art" style={{ color: 'rgb(46, 98, 255)' }}>Arte</Link>
        </p>
        <div className="dev">
        <span>GPT-3 & DALL.E API in NEXT.JS</span>
          <p>
            Coded by
            <Link href="https://horacio-abitu.vercel.app/" target="_blank" style={{ color: 'rgb(97, 89, 84)' }}>Horacio Abitú</Link>
          </p>
        </div>
      </div>
    </>
  )
}
