import { useEffect, useState } from 'react';
import './App.css';
import CountUp from './components/Count-Up';
import Counter from './components/Counter';
import Kors from './components/Kors';
import User from './components/Name-Props';
import TagName from './components/TagName/TagName';

function App(props) {

  const [state, setState] = useState(0)
  const [color, setColor] = useState('green')
  const [names, setNames] = useState([""])
  const [input, setInput] = useState("")
  const [jokes, setJokes] = useState('')
  // const [counter, setCounter] = useState(0)

  const url = 'http://api.icndb.com/jokes/random'
  useEffect(() => {
    jokesApi()


  }, [])
  // setInterval(() => { setCounter(counter + 1) }, 3000)
  function jokesApi() {
    fetch(url).then((response) => response.json()).then((data) => setJokes(data.value.joke));


  }


  function pushInputToList() {
    setNames(oldArray => [...oldArray, input])
    console.log(names);
  }
  function changeToColor() {
    if (color === 'green') {
      setColor('blue')
    }
    else if (color === 'blue') {
      setColor('green')
    }
  }
  return (
    <>
      <h2>{jokes}</h2>

      <div>
        <ul>
          {
            names.map((item) => { return <li>{item}</li> })
          }
        </ul>
        <input onChange={(e) => { setInput(e.target.value) }} placeholder='click yours name ' />
        <button onClick={pushInputToList}>push to list</button>
      </div>


      <div>
        <button onClick={() => changeToColor()}>change to {color}</button>
        <div style={{ background: color, width: '40vw', height: '40vh' }}>
        </div>
        <button onClick={() => { setState(state - 1) }}>click to down</button>
        {state}
        <button onClick={() => setState(state + 1)}>click to up</button>
      </div>


    //     <div>
    // <span>props number is :{props.number}</span>
    //     <Counter />
    //     <CountUp />
        {/* //     <Kors/> */}
    //     <User name="natan" />
    //     <TagName name="belay" />
    //       </div>

    </>
  );
}
export default App;
