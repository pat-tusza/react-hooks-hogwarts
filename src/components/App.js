import React, {useState} from "react";
import Nav from "./Nav";
import Title from "./Title";

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false)
  const [nameSort, setNameSort] = useState(false)
  const [weightSort, setWeightSort] = useState(false)
  const [namesArrayToDelete, setNameArrayToDelete] = useState([])
  const [nameToDelete, setNameToDelete] = useState("")

  const callbackNameToDelete = (name) => {
    setNameToDelete(name);
  }

  function returnHogObj(){
    const hogObj = hogs.map((hog)=>{
      const passObj = {
        theHog: {hog},
        deleteCallback: {callbackNameToDelete}
      }
      if ((hog.name != nameToDelete)){
        return <Title theHog= {passObj} />
      } 
    })
    return hogObj
  }
  function handleGreased(){
    setGreased(!greased)
    setNameSort(false);
    setWeightSort(false);
  }
  
  function switchSort(){
    setNameSort(!nameSort)
    setGreased(false);
    setWeightSort(false);
  }
  function returnGreasedHogs(){
    const greaseFiltered = hogs.filter((hog)=>{
      return hog.greased === true
    })
    const greasedHogObj = greaseFiltered.map((hog)=>{
      return <Title hog = {hog} key={hog.name}/>
    })
    return greasedHogObj
  }

  function handleNameSort(){
    const sortedByName = Object.create(hogs);
    sortedByName.sort((a,b) => a.name.localeCompare(b.name))
    const hogSort = sortedByName.map((hog)=> <Title hog = {hog} key={hog.name} />)
    return hogSort
  }

  const returnSortByWeight = () =>{
    const sortedByWeight = Object.create(hogs);
    sortedByWeight.sort((a,b) => a.weight - b.weight);
    return sortedByWeight.reverse().map((hog) => <Title hog = {hog} key={hog.name}/>);
  }

  const switchWeight = () => {
    setWeightSort(!weightSort);
    setNameSort(false)
    setGreased(false);
  }

  return (
    <div className="App">
      <Nav />
      <button onClick = {switchSort}>Toggle Sort by Name</button>
      <button onClick = {switchWeight}>Toggle Sort by Weight</button>
      <button onClick ={handleGreased} >Toggle Filter by Greased</button>
      {(!greased && !nameSort && !weightSort)? returnHogObj(): null}
      {greased? returnGreasedHogs() : null}
      {nameSort? handleNameSort(): null}
      {weightSort? returnSortByWeight(): null}
      
    </div>
  );
}

export default App;
