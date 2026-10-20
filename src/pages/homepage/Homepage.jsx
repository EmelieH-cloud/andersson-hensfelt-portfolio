
import Navbar from "../../components/shared/navigation/Navbar/navbar"
import Hero from '../../components/homepage/Hero/hero'
import AppSection from "../../components/homepage/AppSection/AppSection"
import Footer from '../../components/shared/Footer/footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AppSection/>
        <Footer/>
    </div>
  )
}

export default Homepage