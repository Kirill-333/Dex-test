
import Link1 from "../UI/link"
import Create from "../UI/create"
import Delete from "../UI/delete"
import store from "../redux/store"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function PlayerCard () {
    let navigate = useNavigate()
    let {id} = useParams()
  let player = store.getState().player
console.log(player)
function getChange() {
    navigate(`/updateNewPlayer/${id}`)
    console.log(id)
    console.log(1)
      }
   return <div className="cardBlock">
        <div className="navBarteam">
            {/* {.map(el => (<div>{el.name}</div>))} */}
            <div className="teamsLink">
                <Link1 to='/Player' text='Player'></Link1>/
                <Link1 to='/GregWhittinghton' text='Greg Whittinghton'></Link1>
            </div>
            <div className="DeleteCreate">
            <button  className="create" onClick={() => getChange()}></button> 
                <Delete/>
            </div>
        </div>
        <div className="teamInf">
            <div className="logotip">
        </div>
            <div className="teamsinf">
                <div className="DenverNuggets">{player.name}</div>
                <div className="middleColumn">
                    <div className="middleColumn1">
                        <p>Position</p>
                        <div>{player.position}</div>
                        <p>Height</p>
                        <div>{player.height}</div>
                        <p>Age</p>
                        <div>{player.age}</div>
                    </div>
                    <div className="middleColumn2">
                    <p>Team</p>
                       <div>{player.team}</div>  
                       <p>Weight</p>
                        <div>{player.weight}</div>
                        
                    </div>
                </div>
                <div className="middleColumn3">
                <div>Conference</div> 
                 <div>Western</div>  
                </div>
            </div>
        </div>   
    </div>
}



export default PlayerCard