import React, { useEffect , useContext} from 'react'
import { DataContext } from '../Charts/files/DataProvider'

function Model() {
    return (
        <div>
            <h1>
                Model
                {localStorage.getItem('myid')}
            </h1>
        </div>
    )
}

export default Model
