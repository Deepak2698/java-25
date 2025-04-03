
import React from "react";
import ChildFn from "./ChildFn";

function ParentFn(){
    return(
        <div>
            <ChildFn dataFromParent = 'passing props in functional component' name= 'Aditya'/>
        </div>
    )
}

export default ParentFn;