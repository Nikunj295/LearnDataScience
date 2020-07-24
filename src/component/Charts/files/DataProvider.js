import React,{ useState, createContext} from 'react'

export const DataContext = createContext()

export const DataProvider = props => {
    const [data,setData] = useState([])
    const [mod,setMod] = useState([])
    const [col,setCol] = useState([])
    const [id,setId] = useState([])
    const [mthd,setMthd]  = useState([])
    
    return (
        <DataContext.Provider value={{ data1:[data,setData] , cols:[col,setCol], mth:[mthd,setMthd]}}> 
            {props.children}
        </DataContext.Provider>
    )
}

