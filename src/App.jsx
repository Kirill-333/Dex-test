
import './App.css';
import {Routes, Route, Link, Redirect, Navigate} from 'react-router-dom';
import SignUp from './components/signup/singUp';
// import SignIn1 from "./components/signIn";
import TeamsCard from './components/teamsCard';
import PlayerCard from './components/playerCard';
import Roster from './components/roster';
import Add from './UI/add+';
import Navifation from './components/navigation';
import CardsTeam from './components/cardsTeams';
import PlayesTeams from './components/playerTeams';
import PageNotfound from './components/pageNotfound';
import AddnewPlayer from './components/addnewPlayer';
import AddnewTeam from './components/addNewTeam';
import useAuth from './hooks/useAuth';
import { AuthContext } from './context/AuthContexts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import api from './API copy';
import CardTeam from './components/cardTeam';
import UpDateNewPlayer  from './components/upDatenewPlayer';
import SignIn from './components/signin/signIn';
import store from './redux/store';
import Cookies from 'js-cookie';


function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/signin")
  // }, [])

  console.log(store.getState().auth.token)
  console.log(Cookies.get('token'), 'cookies')
  return (
    
     <div className="App">
      
       {/* {store.getState().auth.token + ''} */}
    <Routes>
 {<Route path="/signin" element = { (<SignIn/>)} />}
 {<Route path="/signup" element = {(<SignUp/>)} />}
 {store.getState().auth.token && <Route path="/Roster" element = {<AddnewPlayer/>} />}
 {store.getState().auth.token && <Route path="/playerTeams" element={<PlayesTeams/>} />}
 {store.getState().auth.token && <Route path="/cardsTeam" element={<CardsTeam/>} />}
 {store.getState().auth.token &&<Route path="/cardTeam/:id" element={<CardTeam/>} />}
 {store.getState().auth.token && <Route path="*" element={<PageNotfound/>} />}
 {store.getState().auth.token && <Route path="/addnewPlayer" element={<AddnewPlayer/>} />}
 {store.getState().auth.token && <Route path="/AddNewTeam" element={<AddnewTeam/>} />}
 {store.getState().auth.token &&<Route path="/updateNewPlayer/:id" element={<AddnewPlayer/>} />}
 {store.getState().auth.token &&<Route path="/playerCard/:id" element={<PlayerCard/>} />}
 {store.getState().auth.token &&<Route path="/updateNewTeam/:id" element={<AddnewTeam/>} />}
    </Routes>
</div> 


  );
  
}

export default App;
