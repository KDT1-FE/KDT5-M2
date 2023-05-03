
function Loading() {
  const url = 'src/assets/img/Spinner-1s-200px(1).gif'

    return (
      <div className={'w-full h-auto z-30 flex justify-center'}>
        <img src={url} alt='로딩중' className={'block mx-auto absolute'} />
      </div>
    )
}

export default Loading