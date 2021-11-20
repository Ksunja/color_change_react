import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/welcome/welcome';
import Goodbye from './components/goodbye/goodbye';
import ColoredText from './components/coloredText/coloredText';

// function formatName(firstName, lastName){
//   return `${firstName} ${lastName}`
// }

function App() {
  const names = 'Dasha'
  return (
    <div className="App">
      {/* {/* <h1>{names}</h1>
      <h2>{new Date().toLocaleDateString()}</h2>
      <h1>{formatName('Dasha', 'Hryb')}</h
      <Welcome name = {names} age="10"/> 
      <Goodbye name={names} formatName={formatName}/> */}
    <ColoredText/>
    </div>
  );
}

export default App;
