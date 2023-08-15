import './index.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/logoPokedex_1.png'


export default function Pokemon() {
    const [pokemon, setPokemon] = useState('');
    const [listaPokemon, setListaPokemon] = useState([]);
    const [conta, setConta] = useState(0)


    async function BuscarPokemon() {
        let url = 'https://pokeapi.co/api/v2/pokemon?offset=' + conta + '&limit=20';
        let resposta = await axios.get(url);

        let respPoke = [];

        for (let item of resposta.data.results) {
            let respostaPoke = await axios.get(item.url);
            let imagem = ''

            if (parseInt(Math.random() * 10) < 2) {
                imagem = respostaPoke.data.sprites.other['official-artwork'].front_shiny;

            }
            else {
                imagem = respostaPoke.data.sprites.other['official-artwork'].front_default;
            }


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

        setListaPokemon(listaPokemon.concat(respPoke));
    }

    useEffect(() => {

        if (conta !== 0) {

            BuscarPokemon();
        }
    }, [conta]);

    return (
        <div className="pagina-pokemon">
            <img src={logo}></img>

            <button onClick={BuscarPokemon}>Encontrar Pokemons</button>

            <div className='lista-pokemon'>
                {listaPokemon.map(item =>
                    <div className='card-pokemon'>
                        <img src={item.imagem}></img>
                        <h1>{item.nome}</h1>
                        <h3>{item.tipo}</h3>
                    </div>
                )}
            </div>

            <button onClick={() => { setConta(conta + 20) }}> buscar mais </button>
        </div>
    )
}