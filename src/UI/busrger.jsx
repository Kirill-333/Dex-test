import CardsTeam from "../components/cardsTeams";
import { useState } from "react"
function Burger({menu, setActive}) {
    
    return <div className="burger" onClick={() => setActive(!menu)} >
        <img src="img/menu_24px.png"></img>
    </div>
}

export default Burger