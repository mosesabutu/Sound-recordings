/** @format */
import { createContext, useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"

const BrowserContext = createContext()
const routerState = {}
export default function BrowserRouter({ children }) {
  const [currentUrl, SetcurrentUrl] = useState(new URL(window.location.href))
  useLayoutEffect(() => {
    function handlePopstateEvent(e) {
      SetcurrentUrl(new URL(window.location.href))
      console.log(e)
    }
    window.addEventListener("popstate", handlePopstateEvent)
 
    return () => window.removeEventListener("popstate", handlePopstateEvent)
  }, [])
  return (
    <>
      <BrowserContext.Provider
        value={{ routerState, currentUrl, SetcurrentUrl }}
      >
        {children}
      </BrowserContext.Provider>
    </>
  )
}
export { BrowserContext }
BrowserRouter.propTypes = {
  children: PropTypes.any.isRequired,
}
