import React from 'react'
import CanvasJSReact from '../files/canvasjs.react'
import Axios from 'axios';
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class Boxplot extends React.Component {
	
	state={
		data:[],
	}

	componentWillMount(){
		let id = localStorage.getItem("myid")
		let payload = {
			id
		}
		Axios.post("https://l-data-science.herokuapp.com/boxplot",null,{
			params:{
				payload
			}
		}).then(response=>response.data)
		.then(data=>{
			let da = Object.keys(data).map(key=>{
				return data[key]
			})
			this.setState({data:da[0]})
			console.log(da[0])
		})
	}

	render() {
		console.log(Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'))
		const options = {
			theme: "light2",
			animationEnabled: true,
			width:window.innerWidth/1.4,
			data: [{
				type: "boxAndWhisker",
				whiskerThickness: 4,
				upperBoxColor: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
				lowerBoxColor: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
				whiskerColor: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
				dataPoints: this.state.data
			}]
		}

		return (
			<div>
				<CanvasJSChart options = {options}/>
			</div>
		);
	}
}

export default Boxplot