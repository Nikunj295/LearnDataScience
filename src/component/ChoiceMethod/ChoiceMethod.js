import React from 'react'
import { Link } from 'react-router-dom'

export default function ChoiceMethod() {
    return (
        <div>
            <Link to="/Classification"><button>Classification</button></Link>
            <Link to="/Regression"><button>Regression</button></Link>
        </div>
    )
}
