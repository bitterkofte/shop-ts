import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Store } from "./Store"
import { About } from "./About"

export const RouteTree = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </>
  )
}