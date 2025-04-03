

import React, { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h4>
                    {this.props.name} is Learning : {this.props.dataFromParent}
                </h4>
            </div>
        )
    }
}

export default Child;