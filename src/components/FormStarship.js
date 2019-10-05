import React, { Component } from 'react'

class FormStarship extends Component{
    constructor(props) {
        super(props)
        this.state={
            id:  this.props.match.params.id,
            data: {
                name: '',
                model: '',
                manufacturer: '',
                max_atmosphering_speed:''
            }
        }    
    }

    async _fetchStarships(){
        try{
            let res = await fetch(`https://swapi.co/api/starships/${this.state.id}`);
            let data = await res.json()
            this.setState({
                data:{
                    name: data.name,
                    model: data.model,
                    manufacturer: data.manufacturer,
                    max_atmosphering_speed:data.max_atmosphering_speed
                }
            })
        }
        catch (error) {

        } 
    }

    componentDidMount() {
        this._fetchStarships()
    }

    _handleChange = (e) =>{
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        })
    }
    _handleSubmit = async (e) => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.data)
            }
            let res = await fetch(`https://dsstarwars-api.herokuapp.com/api/starship/`, config)
            let json = await res.json()
            this.setState({
                loading: false
            })
            this.props.history.push('/saves')
        }
        catch (error){
            this.setState({
                loading: false,
                error   
            })
        }      
    }
    
    render(){
        return (
            <div className="formulario col-md-8">
                <form onSubmit={this._handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"
                            name="name" 
                            placeholder="Name" 
                            onChange={this._handleChange}
                            value={this.state.data.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="model" 
                            name="model" 
                            placeholder="Model" 
                            onChange={this._handleChange}
                            value={this.state.data.model}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manufacturer">Manufacturer</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="manufacturer" 
                            name="manufacturer" 
                            placeholder="Manufacturer"
                            onChange={this._handleChange}
                            value={this.state.data.manufacturer}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="speed">Speed</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="speed" 
                            name="max_atmosphering_speed" 
                            placeholder="Speed"
                            onChange={this._handleChange}
                            value={this.state.data.max_atmosphering_speed}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default FormStarship