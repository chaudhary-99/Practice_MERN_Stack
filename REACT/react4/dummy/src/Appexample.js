import {useEffect, useState} from 'react';
import './App.css';
//useEffect is is hook used to handle side effects
//jis bhi component mein useeffect hook likha hota hai uske render hote hii yeh hook run ho jata hai
function App() {
  const [text,setText]=useState('');
  //useState is used to handle stte of a variable , if any variable valur is changed then to reflect that change on UI 
  // useState is used
  const [name,setName]=useState('love');
  function changeHandler(e){
    setText(e.target.value);
    console.log(text);
  }
  //variation1 ---> On every Render
  // useEffect(()=>{
  //   console.log("UI rendered");
  // });

  // variation2 ---> first Render
  // useEffect(()=>{
  //   console.log("UI rendered");
  // },[]);

  // variation3 ---> first Render +when dependency change
  // useEffect(()=>{
  //   console.log("change observed");
  // },[name]);

  // variation4 ---> first Render + to handle unmounting of components
  useEffect(()=>{
    console.log("Listener Added");//secondly executed
    return ()=>{// first return statement is executed
      console.log("Listener Removed");
    }

  },[text]);

  
  return (
    <div className="App">
        <input type="text" onChange={changeHandler} ></input>
    </div>
  );
}

export default App;
