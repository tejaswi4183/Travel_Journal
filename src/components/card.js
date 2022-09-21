import React from 'react';
import '../style.css';
import { FiMapPin } from "react-icons/fi";

export default function Card(porps){
   
    return(
        <div className='card'>
               <img  src={require(`../images/${porps.imageUrl}`)}  alt="img" className="images"/>
              <h3><a className="googleMaps" href={`${porps.googleMapsUrl}`}><FiMapPin/>{porps.location}</a></h3>
                &emsp;
                <h3 className="title">{porps.title}</h3>
                <h4 className="stardate">{porps.startDate} </h4>
                <p className="data">{porps.description}</p>
        </div>
    )
}
 