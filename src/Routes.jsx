/** @format */

import { useContext } from "react"
import { BrowserContext } from "./BrowserRouter"
import PropTypes from "prop-types"

export default function Routes({ children, path }) {
  //Am i at the current url render myself
  //Else render nothing
  const { currentUrl } = useContext(BrowserContext)
  // console.log(currentUrl.pathname, path)
  if (currentUrl.pathname == path) {
    return <>{children}</>
  } else {
    return null
  }
}
Routes.propTypes = {
  children: PropTypes.any.isRequired,
  path: PropTypes.any.isRequired,
}
