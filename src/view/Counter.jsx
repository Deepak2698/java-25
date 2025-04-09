
import React, { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    increment(event,num){
        this.setState({count : this.state.count + num});
    }

    decrement(event, num){
        this.setState({count : this.state.count - num})
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={(e) => {this.increment(e,1)}}>
                     +1 
                </button>
                <button onClick={(event) => {this.decrement(event,1)}}>
                     -1 
                </button>
                <button onClick={(event) => {
                            this.increment(event,3)
                        }}>
                     +3 
                </button>
            </div>
        )
    }
}

export default Counter;