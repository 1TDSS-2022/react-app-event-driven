import React from "react";
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <>

            <nav style={{backgroundColor: '#59759e', padding: '15px'}}>
                <ul>
                    <li><Link style={{color: 'white'}} to="/">Home</Link></li>
                </ul>
            </nav>
            
        </>
    )
}

export default Menu;