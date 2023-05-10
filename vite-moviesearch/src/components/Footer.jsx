export default function Footer() {
  return (
    <footer>
      <nav className="h-[13rem] p-20 text-center">
        <ul>
          <li>
            <a
              className="text-xl "
              href="/">
              <span className="text-regal-yellow opacity-30 ">OMDbAPI</span>.COM
            </a>
          </li>
          <li className="text-regal-yellow opacity-30 decoration: underline">
            <a
              className=""
              href="/about">
              (c)2023 HEROPY
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
