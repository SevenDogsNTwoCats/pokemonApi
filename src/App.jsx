//components
import { Button } from './components/Button';
import { Card } from './components/Card';
//styles
import './sass/App.scss';
//icons
import {TiArrowLeftOutline} from "react-icons/ti";
import {TiArrowRightOutline} from "react-icons/ti";
//hooks
import { useState, useEffect } from 'react';

const App = () => {

  const [pokemonID, setPokemonID] = useState(1);
  const[pokemonEvo, setPonkemonEvo] = useState([]);
  

  useEffect(()=>{
    getEvolutions(pokemonID)
  }, [pokemonID]);
  
  const getEvolutions = async id =>{
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
    const data = await response.json();

    let pokemonEvoArray= []

    let pokemonLv1 = data.chain.species.name;
    let pokemonLv1Img = await getPokemonImg(pokemonLv1);
    pokemonEvoArray.push([pokemonLv1, pokemonLv1Img]);
    
    if(data.chain.evolves_to.length !== 0){
      let pokemonLv2 = data.chain.evolves_to[0].species.name;
      let pokemonLv2Img = await getPokemonImg(pokemonLv2);
      pokemonEvoArray.push([pokemonLv2, pokemonLv2Img]);

      if(data.chain.evolves_to[0].evolves_to.length !== 0){
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Img = await getPokemonImg(pokemonLv3);
        pokemonEvoArray.push([pokemonLv3, pokemonLv3Img]);
      }

    }
    setPonkemonEvo(pokemonEvoArray);
  }

  const getPokemonImg = async name =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other['official-artwork'].front_default;
  }
    
  return (

        <div className='app'>
            <div className={`cardContainer card${pokemonEvo.length}`}>
              {pokemonEvo.map(pokemon => 
                <Card 
                  key = {pokemon[0]}
                  name= {pokemon[0]} 
                  img={pokemon[1]}/>
              )}
            </div>
            <div className='btnContainer'>
              <Button 
                icon ={<TiArrowLeftOutline/>} 
                handleClick = {() =>{pokemonID >1? setPokemonID(pokemonID-1): setPokemonID(pokemonID)}}
              />
              {/* {pokemonName} */}
              <Button 
                icon = {<TiArrowRightOutline/>} 
                handleClick = {() =>{setPokemonID(pokemonID+1)}}
              />
            </div>
            
        </div>

  )
}

export {App}