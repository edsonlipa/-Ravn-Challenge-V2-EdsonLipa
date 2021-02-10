import PeopleList from './components/PeopleList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PersonDescription from './components/PersonDescription';
import { useState } from 'react';
function App() {
  const [currentPerson,setcurrentPerson]=useState({name:"default"});
  
  return (
    <Router>
    <div className="container pt-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a className="navbar-brand" href="#">Apollo API StarWars {currentPerson.name}</a>
        <form className="form-inline ">
          <Link to="/" className="btn btn-secondary ">Home</Link>
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
