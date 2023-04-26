import React from 'react'
import heropyLogo from '../assets/heropy.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />

      <div className=" text-center ">
        <div className="w-full flex justify-center mt-10 mb-10  ">
          <img
            className=" w-60 h-60 p-8 bg-gray-100 border-8 rounded-full"
            src={heropyLogo}
            alt="HEROPY"
          />
        </div>
        <h1 className="font-extrabold text-4xl mb-6">HEROPY</h1>
        <ul className="font-bold text-base">
          <li>thesecon@gmail.com</li>
          <li>https://heropy.blog</li>
          <li>+82-10-1234-5678</li>
        </ul>
      </div>

      <Footer />
    </>
  )
}
