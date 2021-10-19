import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import CryptoLogo from '../logo/CryptoLogo'

export default function Layout({ children, title = "Crypto Tracker" }) {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <div>
            <a>
              <CryptoLogo />
            </a>
          </div>
        </Link>
      </header>
      <h1 className="crypto_title">CRYPTO</h1>
      <div className="crypto_subtitle">TRACKER</div>
      <main>{children}</main>
    </div>
  )
}
