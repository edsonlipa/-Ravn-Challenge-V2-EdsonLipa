import {useQuery,gql} from '@apollo/client'
import { Link } from "react-router-dom";
import { useState } from 'react';

const ALL_PEOPLE = gql`{
  allPeople {
    people {
        id 
        name
        species{
          name
        }
        homeworld{
          name
          
        }
      }
    }
}`;


function PeopleList(props) {
    const [ClickedPerson,setClickedPerson]=useState({});

    const {loading,error,data}=useQuery(ALL_PEOPLE,{
    variables: {
      offset: 0,
      limit: 3
    },
  });
  if(loading) return <h1>Loading</h1>
  if(error) return <p>Failed to Load Data</p>
  const Clicked=(people)=>{
    console.log(people)
    props.setcurrentPerson(people)
  }
  
  return (
    
      <div className="container mt-5" >
               
      {
          data.allPeople.people.map((people,id) => (
            <Link to="/person" className="card border-primary mb-1" key={people.id} onClick={()=>Clicked(people)}>
              <div className="card-body text-dark">
                <h5 className="font-weight-bold card-title ">{people.name}</h5>
                <p className="card-text">{(people.species===null?"Human":people.species.name)+" from "+people.homeworld.name}</p>
              </div>
            </Link>
            ))  
      }
        
      </div>
    
  );
}

export default PeopleList;
