import { useEffect, useRef } from 'react';

export default function TopBtn({ total, page }) {
  const target = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log('hi');
        entry.target.children[0].style.transform = 'translate(0)';
      } else {
        console.log('bye');
        entry.target.children[0].style.transform = 'translate(150px)';
      }
    }, {});
    console.log(total);
    io.observe(target.current);
  }, []);
  return (
    <>
      <div className="intersection" ref={target}>
        <div className="topBtn">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="omdb btn"
          >
            Top
          </button>
          <div className="omdb total">{`${page} / ${total}`}</div>
        </div>
      </div>
    </>
  );
}
