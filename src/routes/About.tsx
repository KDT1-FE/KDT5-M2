import hprofile from '../assets/hprofile.jpg';

export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 justify-center about-hieght">
      <div className="bg-slate-300 w-[250px] h-[250px] flex justify-center items-center rounded-full">
        <div className="bg-slate-200 w-[230px] h-[230px] flex justify-center items-center rounded-full">
          <img
            src={hprofile}
            alt="profile"
            className="rounded-full h-[170px] w-[170px]"
          />
        </div>
      </div>
      <h3 className="font-Oswald text-6xl">HOWOO</h3>
      <div>
        <p>junsgk@gmail.com</p>
        <p>https://heropy.blog</p>
        <p>+82-10-1234-5678</p>
      </div>
    </div>
  );
}
