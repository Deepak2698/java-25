
import React from "react";

function ChildFn(props){
    return(
        <div>
            <h1>
                {props.name} is Learning : {props.dataFromParent}
            </h1>
        </div>
    )
}

export default ChildFn;