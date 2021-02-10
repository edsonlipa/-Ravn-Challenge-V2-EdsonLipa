import {useQuery,gql} from '@apollo/client'
import { Link } from "react-router-dom";
import { LOADING, ERROR } from '../variables/staticComponents';


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


    const {loading,error,data}=useQuery(ALL_PEOPLE,{
    variables: {
      offset: 0,
      limit: 10
    },
  });
  if(loading) return LOADING
  if(error) return ERROR


  const ClickPerson=(people)=>{
    console.log(people)
    props.setcurrentPerson(people)
  }
  
  return (
    
      <div className="container mt-5" >
               
      {
          data.allPeople.people.map((people,id) => (
            <Link to="/person" className="card border-primary mb-1" key={people.id} onClick={()=>ClickPerson(people)}>
              <div className="card-body text-dark">
                <h5 className="font-weight-bold card-title ">{people.name}</h5>
                <p className="card-text">{(people.species===null?"Human":people.species.name)+" from "+people.homeworld.name}</p>
              </div>
            </Link>
            ))
      }
        {(loading)?LOADING:null}
      </div>
    
  );
}

export default PeopleList;
