import React,{useState} from 'react'
import characterData from '../contents'
import '../index.css'

const Product = () => {
  
  const [characters,setCharacters]=useState(characterData)
  const [clickedCharacters,setClickedCharacters]=useState([])
  const [score,setScore]=useState(0)
  const[highScore, setHighScore]=useState(0)
    const shuffle=(characters,character)=>{
      console.log(character.name);
      
      if(clickedCharacters.includes(character.name)){
        alert(`Game Over!!! You scored ${score}`)
        setHighScore(Math.max(score,highScore))
        setScore(0)
        setClickedCharacters([])
      }
      else{
        setClickedCharacters([...clickedCharacters,character.name])
        setScore(score+1)
      }
     

      const shuffledCharacters = [...characters];
      shuffledCharacters.sort(()=>Math.random()-0.5)
      setCharacters(shuffledCharacters)
    }
  


  return (
    
    <>
    <div className='nav'>
      <div className="container">
        <div className="title">
          <h1> Memory Game </h1>
        </div>
        <div className="scores">
          <p>Score:<span>{score}</span></p>
          <p>Highest Score:<span>{highScore}</span></p>
        </div>
      </div>
        <div className='rule'>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
    </div>
      <div className='product_container'>
        {characters.map((character)=>(
          <div key={character.id} >
            <div className='card' onClick={()=>shuffle(characters,character)}>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
    )
}

export default Product