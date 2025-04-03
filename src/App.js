import './App.css';
import ChildFn from './Props/ChildFn';
import Parent from './Props/Parent';
import ParentFn from './Props/ParentFn';
import ClassComponent from './view/ClassComponent';
import Functional from './view/Functional';
// import Intro from './view/Intro';

function App() {

  
  return (
    <div >
      {/* <Intro/> */}
      {/* <ClassComponent/>
      <Functional/> */}
      <ParentFn/>
      <Parent/>
    </div>
  );
}

export default App;
