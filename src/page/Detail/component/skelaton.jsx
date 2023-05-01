import Skeleton from "@mui/material/Skeleton";
import styles from '../../../scss/Detail/detail.module.scss'
import classNames from 'classnames/bind'

function DetailSkeleton () {
  const st = classNames.bind(styles);
  return (
  <>
  <div className={st('Detail-Container__moviebox')} >
  <div className={st('Detail-Container__movieimg')} >
    <Skeleton variant="rectangular" width={500} height={800} animation="wave" sx={{ bgcolor: 'grey.800' }}/>
  </div>
  </div>
  <div className={st('Detail-Container__infobox')}>
    <div className={st('Detail-infobox__title')}>
      <Skeleton variant="rectangular" width={300} height={80} animation="wave" sx={{ bgcolor: 'grey.800' }}/>
    </div>
    <div className={st('Detail-infobox__label')}>
      <Skeleton variant="rectangular" width={400} height={25} animation="wave" sx={{ bgcolor: 'grey.800' }}/>
    </div>
    <div className={st('Detail-infobox__plot')}>
      <Skeleton variant="rectangular" width={800} height={122} animation="wave" sx={{ bgcolor: 'grey.800' }}/>
    </div>
    <div className={st('Detail-infobox__ratings')}>
      <Skeleton variant="rectangular" width={400} height={300} animation="wave" sx={{ bgcolor: 'grey.800' }}/>
    </div>
  </div>
  </>
  )
};
export default DetailSkeleton;