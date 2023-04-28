import { ClipLoader } from 'react-spinners'

export default function LoadingPage() {
  //중앙 정렬
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div style={style}>
      <ClipLoader
        color="#ff0000"
        height={100}
        width={100}
      />
    </div>
  )
}
