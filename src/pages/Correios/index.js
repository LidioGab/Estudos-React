import { useState } from 'react'
import './index.scss'
import axios from 'axios'


export default function Correios(){
    
    const [cep, setCep] = useState('');
    const [info, setInfo] = useState('');

    async function buscar(){
        let url = 'https://viacep.com.br/ws/'+ cep +'/json/';

        let resposta = await axios.get(url)

        setInfo(resposta.data.logradouro + ', Bairro: '+ resposta.data.bairro)

    }

    return(
        <div className='pagina-lista-tarefa'>
            <div className='container'>
            
            <div>
                <h1> Buscar CEP </h1>
            </div>

            <div>
                <input type='text' value={cep} onChange={e => setCep(e.target.value)}/>
                <button onClick={buscar}>Buscar</button>
            
            </div>
            <div>
                <h3>{info}</h3>
            </div>          
            </div>
        </div>

    )
}