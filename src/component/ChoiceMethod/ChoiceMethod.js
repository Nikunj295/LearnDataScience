import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./main.css"
import log3 from "./3.png"
import log4 from "./4.png"

export default function ChoiceMethod() {
    const [value, setValue] = React.useState(
        localStorage.getItem('myid') || ''
    );
     
    useEffect(() => {
        localStorage.setItem('myid', '_' + Math.random().toString(36).substr(2, 9));
    }, [value])

    return (
        <div className="mainScreen">
            <section>
                <div id="qwe" class="screen">
                    <div class="imgBox">
                        <Link to="/Classification">
                            <img src={log4} alt="hello" height="200" width="200"/>
                        </Link>
                        <Link to="/Classification" style={{ textDecoration: 'none', color: 'white' }}>
                            <h2>Classification</h2>
                        </Link>
                    </div>
                </div>
                <div id="asd" class="screen">
                    <div class="imgBox">
                        <Link to="/Regression" >
                            <img src={log3} alt="hello" height="200" width="200" />  
                        </Link>
                        <Link to="/Regression" style={{ textDecoration: 'none',color: 'white' }}>
                            <h2 >Regression</h2>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
