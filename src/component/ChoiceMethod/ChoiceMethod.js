import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ChoiceMethod() {
    const [value, setValue] = React.useState(
        localStorage.getItem('myid') || ''
    );
     
    useEffect(() => {
        localStorage.setItem('myid', '_' + Math.random().toString(36).substr(2, 9));
    }, [value])

    return (
        <div>
            <Link to="/Classification" style={{ textDecoration: 'none' }}>
                <h2>Classification</h2>
            </Link>
            <Link to="/Regression" style={{ textDecoration: 'none' }}>
                <h2 >Regression</h2>
            </Link>
        </div>
    )
}
