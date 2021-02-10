import {  BrowserRouter as Router,
  Switch,  Route,  Link } from "react-router-dom";
import { useState } from 'react';
import PeopleList from './components/PeopleList';
import PersonDescription from './components/PersonDescription';


function App() {

  const [currentPerson,setcurrentPerson]=useState({name:"People of Star Wars"});
  
  const clear_name=()=>{
    setcurrentPerson({name:"People"})
  }
  return (
    <Router>
    <div className="container pt-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a className="navbar-brand">{currentPerson.name}</a>
        <form className="form-inline ">
          <Link to="/" className="btn btn-secondary " onClick={clear_name}>List</Link>
        </form>
      </nav>
      
      <Switch>
          <Route path="/person">
            <p>hola</p>
            <PersonDescription identifier={currentPerson.id}/>
          </Route>
          <Route path="/">
            <PeopleList {...{setcurrentPerson}}/>
          </Route>
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;
