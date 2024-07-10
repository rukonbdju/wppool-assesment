
import './App.css'
import About from './components/About'
import Brands from './components/Brands'
import Companies from './components/Companies'
import CompanyTable from './components/CompanyTable'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Stories from './components/Stories'
import WppoolIndex from './components/WppoolIndex'

function App() {
  return(
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
      <WppoolIndex></WppoolIndex>
      <CompanyTable></CompanyTable>
      <Brands></Brands>
      <Slider></Slider>
      <Stories></Stories>
      <div className="h-[1px] bg-[#90B8F0] w-4/5 mx-auto my-24"></div>
      <About></About>
      <div className="h-[1px] bg-[#90B8F0] w-4/5 mx-auto my-24"></div>
      <Companies></Companies>
      <Footer></Footer>
    </div>
  )
}

export default App