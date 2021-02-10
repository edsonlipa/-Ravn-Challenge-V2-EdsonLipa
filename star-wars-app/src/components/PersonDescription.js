import {useQuery,gql} from '@apollo/client'
import { useState, useEffect } from 'react';
import { LOADING, ERROR } from '../variables/staticComponents';



const ALL_INFO = gql`query getPersonsDesc($personid: ID!){
    person(id:$personid){
        name
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection{
          totalCount
          vehicles{
            name
          }
        }
    }
  }`;
  

function PersonDescription(props) {

  
  
  const {loading,error,data}=useQuery(ALL_INFO,{
    variables: {
      personid:props.identifier
    },
  });
  if(loading) return LOADING
  if(error) return ERROR
      
  return (
    
      <div className="container mt-5" >
        <div className="card border-primary mb-1" >
        <div className="card-header">General information</div>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    
                    <div className="d-flex">Eye Color</div>
                    <div className="d-flex">{data.person.eyeColor}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Hair Color
                    <div className="d-flex">{data.person.hairColor}</div>

                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Skin Color
                    <div className="d-flex">{data.person.skinColor}</div>

                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Birth Year
                    <div className="d-flex">{data.person.birthYear}</div>

                </li>
                
                
            </ul>
        </div>
        <div className="card border-primary mb-1" >
        <div className="card-header">Vehicles</div>
            <ul className="list-group">
               
            {
                data.person.vehicleConnection.vehicles.map((vehicle,id)=>(

                <li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
                    <div className="d-flex">{vehicle.name}</div>
                </li>

                ))
            }
            </ul>
        </div>
        
      </div>
    
  );
}

export default PersonDescription;
