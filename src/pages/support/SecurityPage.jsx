
import Navbar from "../../components/shared/navigation/Navbar/navbar"
import Footer from '../../components/shared/Footer/footer'
import SecurityAdvice from "../../components/support/SecurityAdvice/SecurityAdvice"

const SecurityPage = () => {
  return (
    <div>
     <Navbar/>
         <SecurityAdvice/>
        <Footer/>
    </div>
  )
}

export default SecurityPage