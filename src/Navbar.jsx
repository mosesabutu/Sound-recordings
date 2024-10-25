/** @format */

import Link from "./Link"
export default function Navbar() {
  return (
    <>
      <Link to={"/home"}>Home</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/about"}>About</Link>
    </>
  )
}
