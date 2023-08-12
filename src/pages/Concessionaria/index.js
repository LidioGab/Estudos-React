import './index.scss'
import Carro from '../../image/carro 2.png'
import { useState } from 'react'

export default function Concessionaria(){
    const[Total, setTotal] = useState('');
    const[Parc, setParc] = useState('');
    const[Jur, setJur] = useState('');

    const[Parcela, setParcela] = useState(0)
    const[VlTotal, setVlTotal] = useState(0)

    function Calculo(){
        let x = ((Jur / 100) * Total)

        setParcela((Total/Parc) + x)
        setVlTotal(Parc * Parcela);


    }
    


    return(
        <div className='pag-concessionaria'>
            <h1>
                Simulador de compra de veiculo
            </h1>

            <div className='content'>
                <div className='content-img'>
                    <img src={Carro}/>
                </div>

                <div className='content-infos'>
                    <div className='info-total'>
                        <h1>Valor Total</h1>
                        <input type='number' value={Total} onChange={e => setTotal(e.target.value)} />
                    </div>

                    <div className='info-parcjur'>
                        <div className='parc'>
                            <h1>Parcelas</h1>
                            <input type='number' value={Parc} onChange={e => setParc(e.target.value)}/>
                        </div>

                        <div className='jur'>
                            <h1>Juros Mensal (%)</h1>
                            <input type='number'value={Jur} onChange={e => setJur(e.target.value)}/>
                        </div>
                    </div>

                    <div className='button'>
                        <button onClick={Calculo} onClickCapture={Calculo}>Calcular</button>
                    </div>
                    <div className='result'>
                        <div className='parcela'>
                            <h2>Parcela:</h2><span>R${Parcela.toFixed(2)}</span>
                            
                        </div>

                        <div className='total'>
                            <h2>Valor Total:</h2> <span>R${VlTotal.toFixed(2)}</span>
                            
                        </div>
                    </div>    
                </div>

            </div>

        </div>
    )
}