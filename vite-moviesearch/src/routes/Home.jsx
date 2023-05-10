import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-10 px-3 mx-auto sm:w-[36rem] md:w-[42.5rem] lg:w-[56.25rem] xl:w-[75rem] 2xl:w-[82.25rem]">
        <div className="HeaderInfo">
          <h1 className="text-7xl font-extrabold leading-none mt-0 mb-2 ">
            <span className="text-regal-yellow ">OMDb API</span>
            <br />
            THE OPEN
            <br />
            MOVIE DATABASE
          </h1>
          <p className="my-8 text-regal-gray font-medium">
            The OMDb API is a RESTful web service to obtain movie information,
            all content and images on the site are contributed and maintained by
            our users.
            <br />
            If you find this service useful, please consider making a one-time
            donation or become a patron.
          </p>
        </div>

        <Search />
      </main>

      <Footer />
    </>
  )
}
