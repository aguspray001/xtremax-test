import React from 'react'
import {FaMapMarkerAlt} from "react-icons/fa";
import {GiWorld} from "react-icons/gi";

function InfoItem({info, type}) {
    return (
        <div className='info'>
            {type==="address" ? <FaMapMarkerAlt style={{color: "#72cdd2"}}/> : <GiWorld style={{color: "#82be2d"}}/>}
            {type==="address" ? <p>{info}</p> : <a target="_blank" rel="noopener noreferrer" href={`${info}`} >{info}</a>}
        </div>
    )
}

export default InfoItem
