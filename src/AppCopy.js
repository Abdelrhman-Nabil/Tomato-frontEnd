import { Fragment, useState } from "react"

const App=()=>{
  const [number,setNumber]=useState();
  const [dark,setDark]=useState(false);
  const Doublenumber=slowFunction(number)
  const themStyle={
    backgroundColor:dark?"black":"blue",
    color:dark?"white":"red"
  }
  const slowFunction=(number)=>{
      for(let i=0 ;i=150000;i++){}
      return number *2
    }
 
  return(
    <Fragment>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
    <button onClick={()=>{setDark(prevDark=>!prevDark)}}> changeTheme</button>
    <div style={themStyle}>{Doublenumber}</div>
    </Fragment>
  )
}
export default App
