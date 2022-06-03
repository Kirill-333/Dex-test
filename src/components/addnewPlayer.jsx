import Navifation from "./navigation"
import Search from "../UI/search"
import Add from "../UI/add+"
import ReactPaginate from 'react-paginate';
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import  Input1 from '../UI/Input1'
import  Input from '../UI/input_type'
import Selector from "../UI/selector";
import SmallInput from "../UI/smallInput";
import SideBar from "./sideBar";
import api from "../API copy";
import { useEffect } from "react";
import calendar from "./calendar";
import Calendar from "./calendar";
import { useParams } from "react-router-dom";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// s=10
// let s
function AddnewPlayer () {
    const [positions, setPositions] = useState([])
    const [teams, setTeams] = useState([])
    const [photo, setPhoto] = useState('')
    const domain = "http://dev.trainee.dex-it.ru";
    let dispatch = useDispatch()
    let name2 = useSelector(state => state.player)
    useEffect(() => {
        console.log(id)
        api.player.get({
            id:+id
        
        }).then((res) => {
            console.log(res)
            store.dispatch({
                type: 'player/set',
                payload: res.data
              })
        })
    }, [])
    const sendData = () => {
        if (id) {
            console.log({
                
                "name": name,
                "number":+number,
                "position": position,
                "team": +team,
                "birthday": currentDate,
                "height": +height,
                "weight": +weight,
                "avatarUrl": "string",
                "id": +id          
            })
            api.player.upDate(
            //     {
            //     // "id": teams.value,
            //     "id": +id,
            //     "name": name,
            //     "number":+number,
            //     "position": position,
            //     "team": +team,
            //     "birthday": currentDate,
            //     "height": +height,
            //     "weight": +weight,
            //     "avatarUrl": 'photo'          
            // }
            store.getState().player
            ).then((r) => {
                console.log(r)
            }).catch((e) => {
                console.log(e)
            }) 
        }
            
        else {
            console.log({
                "name": name,
                "number":number,
                "position": position,
                "team": team,
                "birthday": currentDate,
                "height": height,
                "weight": weight,
                "avatarUrl": "string"          
            })
            api.player.add({
                "name": name,
                "number":number,
                "position": position,
                "team": team,
                "birthday": currentDate,
                "height": height,
                "weight": weight,
                "avatarUrl": photo          
            }).then((r) => {
                console.log(r)
            }).catch((e) => {
                console.log(e)
            }) 
        }

            
    }

    const params = useParams();
    const id = params.id
    console.log(id)

    useEffect(() => {
        api.player.getPositions().then((res) => {console.log(res) 
            setPositions(res.data)})
    }, [])
    useEffect(() => {
        api.team.getTeams({
            name:'',
            page:1,
            pageSize:10
        }).then((response) => {
            setTeams(response.data.data.map((one) => ({
                name: one.name,
                value:one.id
            })))
            console.log(response)

        })
    }, [])
    //   let s
    const {coloritem, setColoritem} = useState(false);
    // var s = 7
    // var s = 15
    // let num = 7
    // num=15
    function changeColorofSign () {
        // s=10
        // let num = 3;
        setColoritem(!coloritem);
    }
    // num = 5
    // {
    //     let n = 7
    //     {
    //         n=10
    //     }
    // }

    // {
    //     var s = 11
    //     {
    //         s=15
    //     }
    // }
    // s=17
    let name
    let position
    let team
    let height
    let weight
    let currentDate
    let number
    console.log(currentDate)
    function onDateChange(date) {
        currentDate = date
        console.log(date)
    }
    const sendName= (e) => {
        name = e.target.value
        console.log(name)
        store.dispatch({
            type: 'player/set',
            payload: {name: name}
          })
          console.log(store.getState().player)
    }
    const sendPosition= (e) => {
        position = e.target.value
        console.log(position)
        store.dispatch({
            type: 'player/set',
            payload: {position: position}
          })
    }
    const sendteam= (e) => {
        team = e.target.value
        console.log(team)
        store.dispatch({
            type: 'player/set',
            payload: {team: team}
          })
    }
    const sendHeight = (e) => {
        height = e.target.value
        console.log(height)
        store.dispatch({
            type: 'player/set',
            payload: {height: height}
          })
    }

    const sendPhoto = (e) => {
        let formData = new FormData();
        formData.append('file', e.target.files[0])
        api.saveImage(formData).then((response) => setPhoto(response.data))
       
    }

    const sendWeight = (e) => {
        weight = e.target.value
        console.log(weight)
        store.dispatch({
            type: 'player/set',
            payload: {weight: weight}
        })
        store.dispatch({
            type: 'player/set',
            payload: {weight: weight}
          })
    }

    const sendNumber = (e) => {
        
        number = e.target.value
        console.log(number)
        store.dispatch({
            type: 'player/set',
            payload: {number: number}
        })
        console.log(store.getState().player) 
    }
   
    return <div className="cardsTeam">
    <Navifation/>
    <div className="underNavPlayer">
    <SideBar/>
        <div className="AddPlayer">
            <div className="NavAddPlayer">
                <p className="textinAddplayer">Players/Add Players</p>
            </div>
            <div className="ADDPlayerONE">
            {!photo && <label>
                    <div className="inputPhoto">
                            <input type="file" className="Input_file" onInput={sendPhoto} />
                            <img src={ "img/add_a_photo_24px_rounded.png"} className="ImgofCamera"/>
                    
                            
                    

                    </div>
                    
                </label>}
                {photo && <img src={ `${domain}${photo}` } className="photo-location"/> }
                <div className="InputNameAddPlayer">
                <Input1 label="Name"  type="text" onInput1={sendName}  value={store.getState().player.name }/>
                value={store.getState().player.name }
               
                <Selector label='Position' options={positions} onInput={sendPosition} value={store.getState().player.position}/>
               <input type='text' value='text'/>
              
                <Selector label='Team' options={teams} onInput={sendteam} value={store.getState().player.team} />
            
            <div className="FourInputs">
                <div className="ftwofirsrsmallinputs">
                  
                        <SmallInput label='Height (cm)' onInput={sendHeight} value={store.getState().player.height}/>
                
                    <div className="small2">
                        <SmallInput label='Weight (kg)' onInput={sendWeight} value={store.getState().player.weight}/>
                    </div>
                </div>
                <div className="stwosecondsmallinputs">
                    <div className='calendar'>
                    <Calendar onDateChange={onDateChange} valueCurrent={store.getState().player.birthday}   />
                    {/* {console.log(birthday)} */}
                    </div>
                        
                    
                    <div className="small4">
                        <SmallInput label='Number' onInput={sendNumber} value={store.getState().player.number} />
                        
                    </div>
                 </div>
            </div>
            <div className="buttons">
         <div className="marginforcancel">
         <button className="cancel">Cancel</button>
         </div>
            <div className="marginforsave">
            <button className='save' onClick={sendData}>Save</button>
            </div>
       
            </div>
         
                
               
                </div>
         
            </div>
        </div>
    
    
    </div>
</div>
}

export default AddnewPlayer