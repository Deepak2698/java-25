import React, { Component } from 'react';

class States extends Component{

    constructor(){
        super();
        this.state = {
            organistaion : 'Google',
            name : 'Shraddha'
        }
    }

    changeCompany(event){
        this.setState({
            organistaion: 'Facebook',
            name : 'Sheetal'
        })
    }

    //this.setState() => is a setter function for updating states

    render(){
        return(
            <div>
                <h1>
                     {this.state.name} is working in {this.state.organistaion}
                </h1>
                <button onClick={(event) => {this.changeCompany(event)}}>Change-Company</button>
            </div>
        )
    }
}

export default States;