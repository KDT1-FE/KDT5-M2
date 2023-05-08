import SKELETON_HIEGHT from '@/constants/skeletonHieght';

export default function MovieDetailSkeleton() {
  return (
    <div className="flex gap-10">
      <div className="skeleton w-[500px] h-[750px] shrink-0"></div>
      <div className="flex flex-col gap-4 w-full">
        {SKELETON_HIEGHT.map((h, index) => (
          <div className={`skeleton h-${h}`} key={index}></div>
        ))}
      </div>
    </div>
  );
}
