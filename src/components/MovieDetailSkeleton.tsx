export default function MovieDetailSkeleton() {
  return (
    <div className="flex gap-10">
      <div className="skeleton w-[500px] h-[750px] shrink-0"></div>
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-[70px]"></div>
        <div className="skeleton h-10"></div>
        <div className="skeleton h-52"></div>
        <div className="skeleton h-16"></div>
        <div className="skeleton h-16"></div>
        <div className="skeleton h-16"></div>
        <div className="skeleton h-16"></div>
        <div className="skeleton h-16"></div>
      </div>
    </div>
  );
}
