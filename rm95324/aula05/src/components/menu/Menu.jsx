import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Novo valor</Link></li>
                </ul>
            </nav>
        </header>
    )
}