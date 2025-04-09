
import React, { Component } from "react";

class Counter1 extends Component{

    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    increment(){
        // this.setState({count : this.state.count + 1}); 
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        
    }

    decrement(){
        this.setState({count : this.state.count - 1})
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={() => {this.increment()}}>
                     +1 
                </button>
                <button onClick={() => {this.decrement()}}>
                     -1 
                </button>
                <button onClick={() => {
                            this.increment()
                            this.increment()
                            this.increment()
                        }}>
                     +3 
                </button>
            </div>
        )
    }
}

export default Counter1;