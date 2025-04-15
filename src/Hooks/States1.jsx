
import React,{useState} from 'react';

const States1 = () => {

    //const [state, setState] = useState(initialState)

        //state is a variable that holds the current state value
        //setState is a function that updates the state value
        //initialState is the initial value of the state variable

     const [count, setCount] = useState(0);
     const [name, setName] = useState("Bhunesh");
     const [age,setAge] = useState(25);

    function changeName(event){
        setName("Ravi");
    }

  return (
    <div>
      <h1>{name} is Learning useState Hook</h1>
        <h3>{name} age is {age}</h3>
        <h2>The count is = {count}</h2>
        <button onClick={() => {setCount(count + 1)}}>increment</button>
        <button onClick={() => {setCount(count - 1)}}>decrement</button>
        <button onClick={(event) => {changeName(event)}}>Change-name</button>
        <button onClick={() => {setAge(34)}}>Change-Age</button>
    </div>
  )
}

export default States1;
