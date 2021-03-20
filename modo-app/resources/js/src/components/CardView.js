import React from 'react'

const CardView = ({id, make, colour, year, model, location}) => {
    return (
        <div className="card" id="cardView" style={{width: '18rem'}}>                
                <div className="card-body">
                    <h5 className="card-title">{id}</h5>
                    <h4 style={{fontWeight: 'bold'}}>{make +" " +model+" "+year}</h4>
                    <p>Color: {colour}</p>
                    <p className="card-text">Location: {location}</p>
                   
                </div>
        </div>
    )
}



export default CardView
