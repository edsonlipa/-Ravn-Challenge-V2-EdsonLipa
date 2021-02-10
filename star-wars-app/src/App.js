import logo from './logo.svg';
import {useQuery,gql} from '@apollo/client'

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

const ALL_INFO = gql`{
  allPeople{
    people{
      name
      eyeColor
      hairColor
      skinColor
      homeworld{
        name
        
      }
      species{
        name
      }
      vehicleConnection{
        totalCount
        vehicles{
          name
        }
      }
    }
    }
}`;
function App() {
  const {loading,error,data}=useQuery(ALL_PEOPLE,{
    variables: {
      offset: 1000,
      limit: 5
    },
  });
  if(loading) return <p>Loading</p>
  if(error) return <p>Failed to Load Data</p>


  return (
    <div className="container pt-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a className="navbar-brand" href="#">Apollo API StarWars</a>
        
      </nav>
      <div className="container mt-5" >
        {//<h2>My first Apollo app Edson 🚀</h2>
        }        
      {
          data.allPeople.people.map((people,id) => (
            <div className="card border-primary mb-1" key={people.id}>
              <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">{(people.species===null?"Human":people.species.name)+" from "+people.homeworld.name}</p>
              </div>
            </div>
            ))
          
      }
        
      </div>
        
    </div>
  );
}

export default App;
