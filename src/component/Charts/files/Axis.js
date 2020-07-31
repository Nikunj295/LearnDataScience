import React,{ useState, createContext} from 'react'

export const AxisContext = createContext()

export const AxisProvider = props => {
    let s = sessionStorage.getItem("train") || ''
    let temp = s.split(",")
    const [x_axis,setX_axis] = useState(temp[0])
    const [y_axis,setY_axis] = useState(temp[1])
    const [tar,setTar] = useState("Predicted")
    return (
        <AxisContext.Provider value={{x:[x_axis,setX_axis],y:[y_axis,setY_axis],z:[tar,setTar]}}> 
            {props.children}
        </AxisContext.Provider>
    )
}

