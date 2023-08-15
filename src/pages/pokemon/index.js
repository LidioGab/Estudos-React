import './index.scss';
import axios from 'axios';
import { useState } from 'react';


export default function Pokemon() {
    const [pokemon, setPokemon] = useState('');
    const [listaPokemon, setListaPokemon] = useState([]);


    async function BuscarPokemon() {
        let url = 'https://pokeapi.co/api/v2/pokemon';
        let resposta = await axios.get(url);

        let respPoke = [];

        for (let item of resposta.data.results) {
            let respostaPoke = await axios.get(item.url);
            let imagem = respostaPoke.data.sprites.other['official-artwork'].front_default;
            let tipos = '';

            for (let i of respostaPoke.data.types) {
                tipos = tipos + i.type.name + ','
            }
    
            respPoke.push({
                nome: item.name,
                imagem: imagem,
                tipo: tipos
            })
    
        }

        setListaPokemon(respPoke)
    }

    return (
        <div className="pagina-pokemon">
            <h1>Pokemon</h1>

            <button onClick={BuscarPokemon}>Buscar</button>

            <div className='lista-pokemon'>
                {listaPokemon.map(item =>
                    <div className='card-pokemon'>
                        <img src={item.imagem}></img>
                        <h1>{item.nome}</h1>
                        <h3>{item.tipo}</h3>
                    </div>
                )}

            </div>
        </div>
    )
}