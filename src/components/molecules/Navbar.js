import React from 'react'
import {AiFillCloseCircle, AiFillSetting, AiFillQuestionCircle} from "react-icons/ai";

function Navbar() {
    return (
        <nav className='nav-container box-shadow'>
            <div className="nav-title">
                <h5>TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</h5>
            </div>
            <div className="nav-menu">
                <AiFillSetting style={{width: 30, height: 30}}/>
                <AiFillQuestionCircle style={{width: 30, height: 30}}/>
                <AiFillCloseCircle style={{width: 30, height: 30}}/>
            </div>
        </nav>
    )
}

export default Navbar
