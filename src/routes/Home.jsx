import '~/css/index.css'
import TheHeader from '~/components/TheHeader.jsx'
import TheInputSection from '~/components/TheInputSection.jsx'
import TheList from '~/components/TheList.jsx'
import ThefetchMovie from '~/components/ThefetchMovie.jsx'


export default function Home() {

  return (
    <>
      <div className='container w-5/6 mt-[10px] font-sans block mx-auto '>
        <TheHeader />
        <div className='hero rounded-[50px] mt-[10px] flex justfy-left items-start'>
          <div className='hero-content flex-col lg:flex-row '>
            <img src='src/assets/img/movie.jpg' className='mask mask-hexagon max-w-sm rounded-[50px] w-[600px] h-[400px] shadow-2xl' />
            <div>
              <p className={"font-sans font-bold text-[60px] text-amber-400 "}>OMDB API</p>
              <p className={"font-sans font-bold text-[40px] text-400 italic"}>THE OPEN MOVIE DATABASE</p>
              <p className='py-6 text-lg font-sans text-l' >The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
                If you find this service useful, please consider making a one-time donation or become a patron.</p>
              <TheInputSection />
            </div>
          </div>
        </div>
        <div className={'divider'}></div>
        <div className={'container p-[20px] flex flex-wrap justify-center gap-4'}>
          <ThefetchMovie />
          <TheList />
        </div>

      </div>
    </>
  )
}


