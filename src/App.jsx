
import Cards from "./Cards"
import Marquees from "./components/Marquees"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

function App() {


  return (
    <div className=" bg-black">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  )
}

export default App
