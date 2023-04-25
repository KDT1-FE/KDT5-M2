import React from 'react'

export default function NavBar() {
  return (
    <header className="h-20 related flex justify-between items-center">
      <div className="ml-24 flex justify-start items-center">
        <a href="/">
          <img src="/logo_nbg.png" alt="logo" className="max-w-20 max-h-20" />
        </a>
        <nav>
          <a href="/" className="mr-6">
            Home
          </a>
          <a href="/detail?id=tt10954600" className="mr-6">
            details
          </a>
          <a href="/about" className="mr-6">
            About
          </a>
        </nav>
      </div>
      <div className="mr-24">profile image</div>
    </header>
  )
}
