import { useState } from 'react'
import './index.scss'

export default function Sorveteria(){
    const[produto, setProduto] = useState('');
    const[pc, setPc] = useState(0);
    const[produtos, setProdutos] = useState([]);
    const[total, setTotal] = useState(0)
 

    function Adicionar(){
        const novoProduto = {
            produto: produto,
            valor: pc,
        };

        setProdutos([...produtos, novoProduto]);
        

        let soma = pc
        for(const prod of produtos){
            soma += prod.valor
        }

        setTotal(soma.toFixed(2));
    }



    return(
        <div className='pagina-sorveteria'>
            <div className='container'>
                <div className='header'>
                    <div className='header-titulo'>
                        <h1>Sorveteria</h1>
                    </div>
                </div>

                <div className=''>
                    <div className='add-mid'>
                        <h1>Novo item</h1>
                        <div className='add-inputs'>
                            <input type='text' placeholder='Nome do item' value={produto} onChange={e => setProduto(e.target.value)}></input>
                            <input type='Number' placeholder='R$' value={pc} onChange={e => setPc(Number(e.target.value))}></input>
                            <button onClick={Adicionar} >Adicionar</button>
                        </div>
                    </div>

                    <div className='exeb-lista'>
                        <div className='titulo'>
                            <h1>Lista de compras</h1>
                            <h6>Total: {total} </h6>
                        </div>
                    </div>

                    <div className='card-produtos'>
                         {produtos.map((item) => (
                            <div className='inside'>
                              <span>Produto: {item.produto}</span> <span>Valor: {item.valor.toFixed(2)}</span>
                            </div>
                         ))}
                    </div>

                </div>
            </div>
        </div>

    )

}