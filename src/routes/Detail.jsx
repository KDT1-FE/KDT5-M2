import TheHeader from '~/components/TheHeader.jsx'
import TheDetailList from '~/components/TheDetailList.jsx'
import { useParams } from 'react-router-dom'
import TheDetailNet from '~/components/TheDetailNet.jsx'

function Detail() {
  let { id } = useParams()
  console.log(id)

  return (
    <>
      <div className='container w-5/6 mt-[10px] font-sans block mx-auto '>
        <TheHeader />
        <TheDetailNet id={id} />
        <TheDetailList />
      </div>
    </>
  )
}

export default Detail



