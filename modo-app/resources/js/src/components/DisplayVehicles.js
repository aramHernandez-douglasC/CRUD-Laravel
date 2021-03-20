import React , { useEffect, useState} from 'react'
import CardView from "./CardView"
import VehicleApi from "../helpers/VehicleApi"
import NoAccess from "./NoAccess"

const DisplayVehicles = () => {

    const [vehicles, setVehicles] = useState(null);
     

    useEffect( ()=>{
        VehicleApi.getAll().then( res =>{

            // assigning the fetched data to a variable 
            const data = res.data;
            //setting the vehicles array
            setVehicles(data.data);
        })
    } , []);

    const renderData = ()=>{
        if(sessionStorage.getItem("user")!=null){
            if(!vehicles){
                return (
                    <CardView id= "Wait"
                    make = "Loading"
                    model = "..."
                    year = ""
                    colour = "loading..."
                    location = "loading..."/>
                )
            }
            if (vehicles.length === 0){
                return (
                    <CardView id= "404"
                    make = "No"
                    model = "Vehicles"
                    year = "Added"
                    colour = "N/A"
                    location = "N/A"/>
                )
            }
            
            return vehicles.map((v)=>(
                <CardView  key={v.id+v.year} id= {v.id}
                make = {v.make}
                model = {v.model}
                year = {v.year}
                colour = {v.colour}
                location = {v.location_description}
                />
                
            
            ));
        }
        else{
            return (
                <NoAccess />
            )
        }
    

    }



    return (

        <div>            
            <h3>All vehicles</h3>
            <hr/>
            <div className="row">
                {renderData()}
            </div>

        
            
            
        </div>
    )
}

export default DisplayVehicles



