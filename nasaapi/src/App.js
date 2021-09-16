import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [nasadata, setnasadata] = useState([]);
  useEffect(() => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=dJKrWGPi2AwHHPpzm687Xs1KJPyxE2oDCgPib2XP`
    axios.get(url)
    .then((resp)=>{
      setnasadata({...resp.data});
      
    })
  }, [nasadata])


  return (
    <div className="App">
      {
    Object.keys(nasadata).map((x)=>{
       return( 
      <div >
        <h3>{nasadata[x].title}</h3>
        <img src={nasadata[x].hdurl} alt={nasadata[x].title}/>
        <em>{nasadata[x].explanation}</em>
        </div>
       )
  })
}
    </div>

  ) ; 
}

export default App;
