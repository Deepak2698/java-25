import React, { Component } from "react";
import ChildProps from "./ChildProps";

class ParentProps extends Component{

    constructor(){
        super();
        this.state = {
            name: 'React'
        }
    }

    changeDomain(e){
        this.setState({name : 'Java'})
    }

    render(){
        return(
            <div>
                <h1>
                    <ChildProps names = {this.state.name}/>
                </h1>
                <button onClick={(e) => {this.changeDomain(e)}}>Change-Props</button>
            </div>
        )
    }
}

export default ParentProps;