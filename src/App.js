import './App.css';
import {useState} from 'react';
//instalaremos htmlToCanvas para poder exportar imagenes
import html2canvas from 'html2canvas';
function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [img, setImg] = useState("fire");
  const onChangeLinea1 = function(e){
    setLinea1(e.target.value);
  }
  const onChangeLinea2 = function(e){
    setLinea2(e.target.value);
  }
  const onChangeImg = function(e){
    setImg(e.target.value);
  }
  const onClickExport = function(){
    html2canvas(document.querySelector("#meme")).then(canvas=>{
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">Aliens</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br></br>
      <input onChange={onChangeLinea1}
      type="text" placeholder="Linea 1"></input> <br></br>
      <input onChange={onChangeLinea2}
      type="text" placeholder="Linea 2"></input> <br></br>
      <button onClick={onClickExport}>Exportar</button>
      <div className='meme' id='meme'>
        <span>{linea1}</span>
        <br></br>
        <span>{linea2}</span>
        <img src={"/assets/" + img + ".jpg"}></img>
      </div>
    </div>
  );
}

export default App;
