import React, { Component } from 'react'

class CardDelete extends Component{
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
            let res = await fetch(`https://dsstarwars-api.herokuapp.com/api/starship/${this.state.id}`);
            let data = await res.json();
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
    _handleDelete= async (e) => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try{
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.data.id)
            }
            let res = await fetch(`https://dsstarwars-api.herokuapp.com/api/starship/${this.state.id}`, config)
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
    _handleAbort= async (e) => {
        e.preventDefault()
        this.props.history.push('/saves')
    }
    
    render(){
        return (
            <div className="col-md-6 mar">
                    <div className="card">
                        <div className="card-body">
                            <h4>Confirm delete</h4>
                            <h5 className="card-title lead"><strong>{this.state.data.name}</strong></h5>          
                            <p className="card-text"><strong>Model: </strong> {this.state.data.model}</p>
                            <p className="card-text"><strong>manufacturer: </strong> {this.state.data.manufacturer}</p>
                            <p className="card-text"><strong>Speed: </strong> {this.state.data.max_atmosphering_speed}</p>
                            <p className="card-text"><strong>ID Databesa: </strong> {this.state.data.id}</p>
                            <button className="btn btn-primary" onClick={this._handleAbort}>No</button>
                            <button className="mx-3 btn btn-danger" onClick={this._handleDelete}>Yes</button>
                        </div>
                    </div>
                </div>
        )
    }
}
export default CardDelete