import React ,{useState, useEffect} from 'react';

function App2(){

const [emotion,setEmotion] = useState("Happy");
const [color,setColor] = useState("Black");


useEffect(()=>{
    console.log(`Emotion is ${emotion}.`);
},[color]);
// useEffect second arguemnt is used for dependency
// [] can be left empty if we want useEffect to be called exactly one time.
// in [] we can mention the state which will call useEffect hook on that state change.


useEffect(()=>{
    console.log(`color is ${color}.`);
},[]);
return(
    <div>
      <h1>  Current mood is {emotion} and color is {color}.</h1>
      <button onClick={()=> setEmotion("Furious")}>Furious</button>
      <button onClick={()=> setEmotion("Motivated")}>Motivated</button>
      <button onClick={()=> setEmotion("Happy")}>Happy</button>
      <br/>
      <button onClick={()=> setColor("Green")}>Green</button>
      <button onClick={()=> setColor("Red")}>Red</button>
      <button onClick={()=> setColor("Blue")}>Blue</button>
    </div>
)
}

export default App2;