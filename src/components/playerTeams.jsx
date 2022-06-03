import Navifation from "./navigation"
import Search from "../UI/search"
import Add from "../UI/add+"
import ReactPaginate from 'react-paginate';
import Selector from "../UI/selector";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import SideBar from "./sideBar";
import api from "../API copy";
import store from "../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { array } from "yup";
import Select from 'react-select'
import { useSelector } from "react-redux";
function PlayesTeams () {
const navigate = useNavigate()
const [pageCount, setPageCount] = useState(0)   
const [cards, setCards] = useState([]); 
// let id
// let name = useSelector(state.players.name)
let teamId 
const domain = "http://dev.trainee.dex-it.ru";
const [players, setplayers] = useState([])
// function getChange(id) {
//         navigate(`/update-team/${id}`)
//         console.log(id)
//           }
const handlePageClick = (page) => {
    api.player.getPlayers({
        name:'',
        teamIds:teamId,
        page:page.selected + 1,
        pageSize:6
    }).then((response) => {
        store.dispatch({
            type: 'players/set',
            payload: {
                     payload: response.data.data
                     }
          })
          console.log(store.getState().players)
        // setCards(response.data.data) 
        console.log(response)
        setPageCount(response.data.count/response.data.size)
    } )
    }

    // useEffect(() => {
        
    //   }, [])
  

      useEffect(() => {
        api.team.getTeams({
            name:'',
            page:1,
            pageSize:10000
        }).then((response) => {
            // const options = [
            //     { value: 'chocolate', label: 'Chocolate' },
            //     { value: 'strawberry', label: 'Strawberry' },
            //     { value: 'vanilla', label: 'Vanilla' }
            //   ]
            setCards(response.data.data.map((id) => ({
                name: id.name,
                value: id.id
            })))
            // setCards(options)
            console.log(response)
            setPageCount(response.data.count/response.data.size)
        })
      }, [])
      const sendTeamId= (e) => {
        // teamId = e.target.value
        // console.dir(e.target)
        // console.log(e, r, b)
        const selected = e.target.querySelectorAll('option:checked')
        const values = Array.from(selected).map((el) => el.value )
        console.log(values)
        // return 
            api.player.getPlayers({
            name:'',
            page:1,
            teamIds:values,
            pageSize:6
        }).then((response) => {
            store.dispatch({
                type: 'players/set',
                payload: response.data.data
                         
              })
         
            console.log(response)
            setPageCount(response.data.count/response.data.size)
        })
    }
    function getPlayer(id) {
        store.dispatch({
            type: 'player/set',
            payload: 
            // {
            //          payload:
                      store.getState().players.filter((player) => player.id === id)[0]
                    //  }
          })
        navigate(`/playerCard/:${id}`)
          }
      const [value, setValue] = useState('')

      function filteredCountries() {
          cards.filter(card => {
              return card.name.toLowerCase().includes(value.toLowerCase())
          })
      }
   

    return <div className="cardsTeam">
    <Navifation/>
    
    <div className="underNav">
    <SideBar/>
        <div className="CardsShow">
            <div  className="cardsShowing">
                <div className='InputinCards1'>
                    <Search onInput={(e) => setValue(e.target.value) } />
                    <div className="marginForselectinPlayer">
                    <Selector  options={cards} onInput={sendTeamId} multiple={true} />
                    {/* <Select options={cards} onInputChange={sendTeamId}/> */}
                    </div>
                   
                </div>
                <Link to='/addnewPlayer' className="AddTeam1">
                    <Add/> 
                </Link> 
                
            </div>
        <div className="cardsPresenting" >
        {store.getState().players.length === 0 && <div className="EmptyHere"><Link to='/sign1'><img src="img/illustration (1).png" className='EmptyHerePhoto'/></Link></div>}
        <div className="show-cards" >
                    {store.getState().players.map(player => (<div className="card" onClick={() => getPlayer(player.id)}>
                        <div>{<img src={`${domain}${player.imageUrl}`} className="card__img"/>}
                            <div className='card__inf'>
                                <p className="card__name">{player.name}</p>
                                {/* <p className="card__year">{player.foundationYear}</p> */}
                            </div>
                        </div>
                    </div>) )}
                </div> 
        </div>
        <div className="layout-pages">
            <ReactPaginate className='pages'
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            // pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
        />
        </div>
    </div>
    
    
    </div>
</div>
}

export default PlayesTeams