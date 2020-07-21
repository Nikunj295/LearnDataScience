import React,{ useState, createContext} from 'react'

export const DataContext = createContext()

export const DataProvider = props => {
    const [data,setData] = useState([])
    const [mod,setMod] = useState([])
    const [col,setCol] = useState([])
    
    return (
        <DataContext.Provider value={{data1:[data,setData] , mod1:[mod,setMod], cols:[col,setCol]}}> 
            {props.children}
        </DataContext.Provider>
    )
}

