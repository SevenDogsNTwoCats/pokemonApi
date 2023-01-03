
        import './App.css';
        import { Button } from './Button';
        import { useState, useEffect } from 'react';

        const App = () => {

            const [pokemonNumber, setPokemonNumber] = useState(1);
            const [pokemonName, setPokemonName] = useState('');

            function increasseNumber(){
                setPokemonNumber(pokemonNumber+1);
            }

            useEffect(()=>{
                //Aqui se debe llama al API, esto e suna forma de llamar al api
                // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
                // .then(result=>result.json())
                // .then(data => setPokemonName(data.name));
                //otra manera de llamar al api con async await
                searchPokemon(pokemonNumber);
            }, [pokemonNumber]);

            let searchPokemon = async pokemonNumber =>{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
                const data = await response.json()
                setPokemonName(data.name);
            }

            
        return (
            <>
                <Button/>
            </>
        )
        }

        export {App}