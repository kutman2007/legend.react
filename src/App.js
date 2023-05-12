import {useState} from 'react'
import './App.css';
import { User } from './compo/user';
import { Emp } from './data';
function App (){
  const[status,setStatus]=useState("Emp")

  const renderuser=()=>{
    switch(status){
      case"wer":
       let arr = Emp.filter((el,id)=>{
        return el.status =="wer"
      })
      return arr.map((el,id)=>{
       return <User el ={el} key={id} />
      })
      case"men":
     let arr2= Emp.filter((el,id)=>{
        return el.status=="men"
      })
      return arr2.map((el,id)=>{
        return <User el ={el} key={id} />
      })
      case"women":
      let arr3= Emp.filter((el,id)=>{
       return el.status=="women"
      })
      return arr3.map((el,id)=>{
         return <User el ={el} key={id}/>
      })
      default: 
      return ""
    }
  }
  return (
    <div className="App">
    <div className='btns'>
    <button onClick={()=>setStatus('wer')}
    style={
      status == "wer"
      ? {backgroundColor:'green',
      color:'white',
    boxShadow:'0px 0px 5px 5px green'}
    
      :{backgroundColor:'none'}
    }>Attak</button>
      <button onClick={()=>setStatus('men')}
          style={
            status == "men"
            ? {backgroundColor:'orange',
          color:'white',
          boxShadow:'0px 0px 5px 5px orange'}
            :{backgroundColor:'none'}
          }>Midfielder</button>
      <button onClick={()=>setStatus('women')}
             style={
              status == "women"
              ? {backgroundColor:'blue',
              color:'white',
              boxShadow:'0px 0px 5px 5px blue'}
              :{backgroundColor:"none"}
            }>Defender</button>
    </div>
      <div className='cont'>
        {renderuser()}
      </div>
   
    </div>
  );
}

export default App;
