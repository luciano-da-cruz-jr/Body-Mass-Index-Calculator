import { useState } from 'react';
import * as C from './App.styles';
import powered from './assets/powered.png';
import leftarrow from './assets/down.png';
import down from './assets/down.png';
import up from './assets/up.png';
import { StatusName } from './types';

const App = () => {

    const [statusName, setStatusName] = useState<StatusName[]>(
        [
            {name: 'Magreza', color: '#878787', second_color: '#646464', criterio: 'IMC está entre 0 e 18.5', good_health: false},
            {name: 'Normal', color: '#0fac69', second_color: '#0d9a5e', criterio: 'IMC está entre 18.5 e 24.9', good_health: true}, 
            {name: 'Sobrepeso', color: '#e3b03b', second_color: '#cb9d33', criterio: 'IMC está entre 24.9 e 30', good_health: false},
            {name: 'Obesidade', color: '#c44141', second_color: '#b03b39', criterio: 'IMC está entre 30 e 99', good_health: false}
        ]
    );
    
    
    
    return (
        <C.Container>
            <C.Area>
                <C.Left_Side>
                    <img src={powered} alt='powered'/>
                    <h1>Calcule o seu IMC.</h1>
                    <p>
                        IMC é a sigla para índice de Massa Compórea, parâmetro
                        adotado pela Organização Mundial de Saúde para 
                        calcular o peso ideal de cada pessoa.
                    </p>
                    <input 
                        type="text"
                        placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
                    />
                    <input 
                        type="text"
                        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                    />
                    <button>Calcular</button>
                </C.Left_Side>
                <C.Right_Side>

                    {statusName.map((statusName, index) => (
                        <C.Status index={index} color={statusName.color} second_color={statusName.second_color}>
                           
                           <div>
                                <img src={statusName.good_health ? up : down} alt={statusName.name}/>
                           </div>
                            
                                

                            <label>{statusName.name}</label>
                            <p>{statusName.criterio}</p>
                        </C.Status>
                    ))}

                </C.Right_Side>
            </C.Area>
        </C.Container>
    );
}

export default App;