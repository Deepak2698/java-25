
import React from 'react';

class States extends React.Component {


    constructor(){
        super();
        this.state = {
            count:0,
            name:"Bhunesh",
            age:25
        }
    }

    render(){
        return(
            <div>
               the count is = {this.state.count}
               <button onClick={()=>{this.setState({count: this.state.count + 1})}}>increment</button>
               <button onClick={()=>{this.setState({count: this.state.count - 1})}}>decrement</button>
            </div>
        )
    }
}

export default States;