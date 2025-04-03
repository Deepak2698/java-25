
import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return(
            <div>
                <Child dataFromParent = ' Passing Props in Class Component' name = 'Rashika'/>
            </div>
        )
    }
}

export default Parent;