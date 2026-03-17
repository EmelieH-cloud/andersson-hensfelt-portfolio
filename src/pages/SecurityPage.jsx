
import Navbar from "../components/Navbar/navbar"
import Footer from '../components/Footer/footer'
import SecurityAdvice from "../components/SecurityAdvice/SecurityAdvice"

const SecurityPage = () => {
  return (
    <div>
     <Navbar variant="light"/>
         <SecurityAdvice/>
        <Footer/>
    </div>
  )
}

export default SecurityPage