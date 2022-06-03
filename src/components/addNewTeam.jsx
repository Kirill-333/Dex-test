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
import api from '../API copy';

function AddnewTeam () {
  
    const {coloritem, setColoritem} = useState(false);
    const [photo, setPhoto] = useState('')
    const sendData = () => {
        api.team.add({
            "name": name,
            "foundationYear": year,
            "division": division,
            "conference": conference,
            "imageUrl": photo
        }).then((r) => {
            console.log(r)
        }).catch((e) => {
            console.log(e)
        })
    }
    const sendName= (e) => {
        name = e.target.value
        console.log(name)
    }
    const sendDivision= (e) => {
        division = e.target.value
        console.log(division)
    }
    const sendConference= (e) => {
        conference = e.target.value
        console.log(conference)
    }
    const SendYear= (e) => {
        year = e.target.value
        console.log(year)
    }

    const sendPhoto= (e) => {
        let formData = new FormData();
        formData.append('file', e.target.files[0])
        api.saveImage(formData).then((response) => setPhoto(response.data))
    }

    let name
    let division
    let conference
    let year
    // let photo
    const domain = "http://dev.trainee.dex-it.ru";
    function changeColorofSign () {
        setColoritem(!coloritem);
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
                <Input1 label="Name"  type="text" onInput1={sendName}/>
                <div className="DivisionInput">
                <Input1 label='Division' onInput1={sendDivision}/>
                </div>
                <div className="ConferenceInput">
                <Input1 label='Conference' onInput1={sendConference}/>
                </div>
                <div className="Year of foundation1">
                <Input1  label='Year of foundation' onInput1={SendYear}/>
                </div>
            {photo}
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

export default AddnewTeam