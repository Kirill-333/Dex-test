import { useState } from "react"
import Burger from "../UI/busrger"
import MenuByBurger from "../UI/menuByBurger"
import store from "../redux/store"
import { useSelector } from "react-redux"
function Navifation () {
    let name = useSelector(state => state.auth.name)
    const [menuActive, setMenuActive] = useState(false)
    return <div className="NAVBAR">
    <div className="burgerOnclick"  >
    <Burger menu={menuActive} setActive={setMenuActive} />
    </div>
    
   <div className="LogoBaske"> <img src="/img/logo.png" className="LogoBaske-1"></img></div>
   <div className='NameACC'>
       
       <div className="c">
           {/* John Smith */}
           {name}
           </div>
       <div className="accLogo"><img src="/img/profile.png"></img></div>
   </div>
   <MenuByBurger active={menuActive} /> 
    </div>
    

}

export default Navifation