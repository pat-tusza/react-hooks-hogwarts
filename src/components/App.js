import React, {useState} from "react";
import Nav from "./Nav";
import Title from "./Title";

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false)
  const [nameSort, setNameSort] = useState(false)
  const [weightSort, setWeightSort] = useState(false)
  
  function returnHogObj(){
    const hogObj = hogs.map((hog)=>{
      return <Title hog= {hog} key={hog.name} /> 
    })
    return hogObj
  }
  function handleGreased(){
    setGreased(!greased)
  }
  
  function switchSort(){
    setNameSort(!nameSort)
  }
  function returnGreasedHogs(){
    const greaseFiltered = hogs.filter((hog)=>{
      return hog.greased === true
    })
    console.log(greaseFiltered)
    const greasedHogObj = greaseFiltered.map((hog)=>{
      return <Title hog = {hog} />
    })
    return greasedHogObj
  }

  function handleNameSort(){
    const sortedByName = hogs.sort((a,b) => a.name - b.name)
    console.log(sortedByName)
    const hogSort = sortedByName.map((hog)=> <Title hog = {hog} />)
    return hogSort
  }

  return (
    <div className="App">
      <Nav />
      <button onClick = {switchSort}>Sort by Name</button>
      {/* <button onClick = {setWeightSort(!weightSort)}>Sort by Weight</button> */}
      <button onClick ={handleGreased} >Filter Greased</button>
      {greased? returnGreasedHogs() : returnHogObj()}
      {nameSort? handleNameSort(): null}
      
    </div>
  );
}

export default App;
