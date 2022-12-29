import Dessin from "./component/dessin";
import './component/Style.css';
import Title from "./component/Title";


function App() {
  return <>
    <Title/>
    <div className="container">
      <Dessin label='Toad'/>
      <Dessin label='Santa'/>
    </div>
  </>
}

export default App;
