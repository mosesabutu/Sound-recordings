/** @format */

import PropTypes from "prop-types"
import { useContext } from "react"
import { BrowserContext } from "./BrowserRouter"
export default function Link({ children, to }) {
  const { SetcurrentUrl } = useContext(BrowserContext)
  function handleNavigation() {
    window.history.pushState(null, null, to)
    SetcurrentUrl(new URL(window.location.origin + to))
  }
  return <a onClick={handleNavigation}>{children}</a>
}
Link.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
}
