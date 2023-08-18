import './index.scss';
import { useState } from 'react';
import { Axios } from 'axios';


export default function Netflix(){
    
    
    return(
        <div className='pagina-netflix'>
            <div className='container-friends'>
                <nav className='nav-bar'>
                    <div className='nav-bar-esq'>
                        <a>Inicio</a>
                        <a>Series</a>
                        <a>Filmes</a>
                        <a>Bombando</a>
                        <a>Minha Lista</a>
                    </div>

                    <div className='nav-bar-dir'>
                        <div>
                            <input placeholder='Pesquise pelo titulo'></input>
                            <img></img>
                        </div>

                        <p>Lidio</p>
                        <i class="fa-regular fa-bell"></i>
                        <img></img>
                        <i class="fa-regular fa-chevron-down"></i>
                    </div>
                </nav>
            </div>
        </div>
    )

}
