import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import User from './users';


function App() {

  function handleClick (){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>
      <h3>react concept core 2 </h3>


      <Friends></Friends>
      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
    </>
  )
}

export default App
