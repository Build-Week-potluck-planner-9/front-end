import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const EditStyles = styled.div`
    height: 90vh;
    width: 40%;
    background-color: #F9F1D9;
    color: #858d3C;
    border: 3px solid #F8B12C;
    padding: 1%;
    margin-bottom: 1%;
    margin-right: 1%;

    .event{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        height: auto;
        width: 60%;
    }

    h2{
        margin-bottom: 2.5rem;
        font-size: 2.5rem;
    }

    .event div{
        font-size: 1.8rem;
        line-height: 2.2rem;
    }

    .event .info *{
        display: flex;
        justify-content: space-between;
    }
    
    .event .info{
        margin: 20px 0;
        border: 1px solid #F8B12C;
        padding 5px 0;
        font-size: 2rem;
    }

    .event h4{
        padding: 0 20px;
    }

    .food div h4{
        font-weight: bold;
        font-size: 2rem;
        margin: 1rem 0;
    }

    .submitSection{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
    }


    .submitSection h4{
        font-weight: bold;
        font-size: 2rem;
    }

    .infoContainer{
        width: 100%;
    }

    .info{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        width: 100%;
    }

    .foodList{
        display: flex;
        flex-direction: column;
    }

    .foodList h3{
        text-decoration: underline;
        margin-bottom: 1.5rem;
    }
    `

const EventItem = (props) => {
    const { img, 
        id,
        name,
        date,
        time,
        location,
        selectedFood,
        unselectedFood,        
} = props.event;

return(

    <EditStyles key={id}>
        <div className="event">
            <h2>{name}</h2>
            <img src={img} alt=''></img>
            <div className='infoContainer'>
                <div className='info'>
                    <h4><span>Time:</span><span> {time}</span></h4>
                    <h4><span>Date:</span> <span>{date}</span></h4>
                    <h4><span>Location:</span> <span>{location}</span></h4>
                </div>
            </div>

            
            <div className="foodList">
                <h3>Here is what we have:</h3>
                <p>{selectedFood.join('. ')}</p>
                 
                <br />
                <h3>Here is what we need:</h3>
                <p>{unselectedFood.join('. ')}</p>
            </div>
            <Link to={`/event/${id}`}>View Event</Link>
        </div>
    </EditStyles>
  )
}

export default EventItem;