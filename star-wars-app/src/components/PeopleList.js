import {useQuery,gql} from '@apollo/client'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { LOADING, ERROR } from '../variables/staticComponents';


const ALL_PEOPLE = gql`query ALL_PEOPLE($after: String){
  allPeople  (first: 5, after: $after){
    people{
        id 
        name
        species{
          name
        }
        homeworld{
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
}`;

      


function PeopleList(props) {

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const {loading,error,data,fetchMore}=useQuery(ALL_PEOPLE,{
    variables: {
      after: null
    },
    notifyOnNetworkStatusChange: true,
  });
  if(loading&&!data) return LOADING
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
      {(loading) ? LOADING:null}
      <div
        className={data.allPeople.pageInfo.hasNextPage?"btn btn-info btn-lg btn-block":"invisible"} 
        
        onClick={() => {
          const endCursor = data.allPeople.pageInfo.endCursor;
          if(data.allPeople.pageInfo.hasNextPage)
          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.allPeople.people = [
                ...prevResult.allPeople.people,
                ...fetchMoreResult.allPeople.people,
              ];
              return fetchMoreResult;
            },
          });
        }}
      >
        Load 5 More
      </div>

      </div>
    
  );
}

export default PeopleList;
