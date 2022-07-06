
import './App.css';

const App =() => {
  return (
    <div >
      <Header/>
      <Technologies/>
      

    </div>
  );
}
const Technologies = () => {
  return (
    <div className="App">
      
    <ul>
      <li href='#s'>Arqa</li><br></br>
      <li href='#s'>  Arshak</li>
      <li href='#s'>  Manasyan</li>
      
    </ul>

  </div>
  )
}

const Header =() => {
  return (
    <div className="App">
      
      <ul>
        <a href='#s'>Milyard</a><br></br>
        <a href='#s'>  Harust</a>
        <a href='#s'>  Parq</a>
        
      </ul>

    </div>
  );
}
export default App;
