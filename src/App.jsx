import { useState } from 'react';
import { bg1, bg2, bg3, bg4 } from './assets/images'
import phrases from './phrases.json';
import './App.css'
import  indexRandom  from './assets/helpers/indexRandom'

const images = [bg1, bg2, bg3, bg4];




function App() {
 const [phrase, setPhrase]= useState(phrases[indexRandom(phrases.length)])
 const [img, setImg] = useState(images[indexRandom(images.length)])

 function changePhrase(){
  setPhrase(phrases[indexRandom(phrases.length)])
  setImg(images[indexRandom(images.length)])
 }


 

  return (
    <div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
      <div className="container">
        {/*encabezado*/} 
        <h1 className="heading">Chispas de Motivación</h1>
        
        {/*Card*/}
        <div className='card'>
          <div className="card__body">
        <q className='phrase'>{phrase.phrase}</q> <br />
        <cite className='author'>-{phrase.author}</cite>
        </div>
      </div>
      
        {/*button*/}
          <button onClick={changePhrase} className='btn' >Da click para recibir otra chispa!!</button>
      </div>
    </div>
  )
}

export default App
