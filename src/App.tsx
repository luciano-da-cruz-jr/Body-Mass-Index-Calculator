import { useEffect, useState } from 'react';
import * as C from './App.styles';
import powered from './assets/powered.png';
import leftarrow from './assets/leftarrow.png';
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

    const [outCome, setoutCome] = useState<StatusName[]>([
        {name: '', color: '', second_color: '', criterio: '', good_health: false}
    ]);

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState(0);

    useEffect(() => {
        handleImgByImc();
    }, [imc]);

    const handleImcCalc = () =>{

        let newWeight = parseInt(weight);
        let newheight = parseInt(height);
        setImc(newWeight / (newheight * newheight));
    }

    const handleImgByImc = () => {
        let copyStatusName = [...statusName];
        let newStatusName: StatusName[]=[];
        let classification = '';
        for(let i in copyStatusName) {
            if(imc >= 0 && imc < 18.5){
                classification = 'Magreza';
                if(classification === copyStatusName[i].name){
                    newStatusName.push(
                        {
                            name: copyStatusName[i].name,
                            color: copyStatusName[i].color,
                            second_color: copyStatusName[i].second_color,
                            criterio: copyStatusName[i].criterio,
                            good_health: copyStatusName[i].good_health
                        }
                    );
                    setoutCome(newStatusName);
                }
            }else if (imc >= 18.5 && imc < 24.9){
                classification = 'Normal';
                if(classification === copyStatusName[i].name){
                    newStatusName.push(
                        {
                            name: copyStatusName[i].name,
                            color: copyStatusName[i].color,
                            second_color: copyStatusName[i].second_color,
                            criterio: copyStatusName[i].criterio,
                            good_health: copyStatusName[i].good_health
                        }
                    );
                    setoutCome(newStatusName);
                }
            }else if (imc >= 24.9 && imc < 30.0){
                classification = 'Sobrepeso';
                if(classification === copyStatusName[i].name){
                    newStatusName.push(
                        {
                            name: copyStatusName[i].name,
                            color: copyStatusName[i].color,
                            second_color: copyStatusName[i].second_color,
                            criterio: copyStatusName[i].criterio,
                            good_health: copyStatusName[i].good_health
                        }
                    );
                    setoutCome(newStatusName);
                }
            }
            else if (imc >= 30 && imc < 99){
                classification = 'Obesidade';
                if(classification === copyStatusName[i].name){
                    newStatusName.push(
                        {
                            name: copyStatusName[i].name,
                            color: copyStatusName[i].color,
                            second_color: copyStatusName[i].second_color,
                            criterio: copyStatusName[i].criterio,
                            good_health: copyStatusName[i].good_health
                        }
                    );
                    setoutCome(newStatusName);
                }
            }
        }
    }

    const handleInitial = () => {
        setImc(0);
    }
    
    return (
        <C.Container>
            <C.Area>

                <C.Left_Side imc={imc}>
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
                        value={height}
                        onChange={e=> setHeight(e.target.value)}
                        disabled={imc===0 ? false : true}
                    />
                    <input 
                        type="text"
                        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                        value={weight}
                        onChange={e=> setWeight(e.target.value)}
                        disabled={imc===0 ? false : true}
                        
                    />
                    <button 
                        onClick={handleImcCalc}
                        disabled={imc===0 ? false : true}
                    >Calcular</button>

                </C.Left_Side>

                <C.middle>
                    <C.Back imc={imc}>
                        <img onClick={handleInitial} src={leftarrow} alt='leftarrow'/>
                    </C.Back>
                </C.middle>
                    

                        <C.Right_Side>
                        { imc === 0 ?
                            statusName.map((statusName, index) => (
                                <C.Status index={index} color={statusName.color} second_color={statusName.second_color} imc={imc}>
                                    <div>
                                            <img src={statusName.good_health ? up : down} alt={statusName.name}/>
                                    </div>
                                    <label>{statusName.name}</label>
                                    <p>{statusName.criterio}</p>
                                </C.Status>
                            ))

                                    : imc >= 0 && imc < 18.5 ? 
                                        outCome.map((outCome, index) => (
                                            <C.Status index={index} color={outCome.color} second_color={outCome.second_color} imc={imc}>
                                                <div>
                                                    <img src={outCome.good_health ? up : down} alt={outCome.name}/>
                                                </div>
                                                <label>{outCome.name}</label>
                                                <h3>Seu IMC é de {imc} kg/m2</h3>
                                                <p>{outCome.criterio}</p>
                                            </C.Status>
                                        ))    

                                            : imc >= 18.5 && imc < 24.9 ? 
                                                outCome.map((outCome, index) => (
                                                    <C.Status index={index} color={outCome.color} second_color={outCome.second_color} imc={imc}>
                                                        <div>
                                                            <img src={outCome.good_health ? up : down} alt={outCome.name}/>
                                                        </div>
                                                        <label>{outCome.name}</label>
                                                            <h3>Seu IMC é de {imc} kg/m2</h3>
                                                        <p>{outCome.criterio}</p>
                                                    </C.Status>
                                                ))   

                                                : imc >= 24.9 && imc < 30.0 ? 
                                                    outCome.map((outCome, index) => (
                                                        <C.Status index={index} color={outCome.color} second_color={outCome.second_color} imc={imc}>
                                                            <div>
                                                                <img src={outCome.good_health ? up : down} alt={outCome.name}/>
                                                            </div>
                                                            <label>{outCome.name}</label>
                                                                <h3>Seu IMC é de {imc} kg/m2</h3>
                                                            <p>{outCome.criterio}</p>
                                                        </C.Status>
                                                    )) 

                                                    : imc >= 30 && imc < 99 ? 
                                                        outCome.map((outCome, index) => (
                                                            <C.Status index={index} color={outCome.color} second_color={outCome.second_color} imc={imc}>
                                                                <div>
                                                                    <img src={outCome.good_health ? up : down} alt={outCome.name}/>
                                                                </div>
                                                                <label>{outCome.name}</label>
                                                                    <h3>Seu IMC é de {imc} kg/m2</h3>
                                                                <p>{outCome.criterio}</p>
                                                            </C.Status>
                                                        ))  
                                                            
                                                        : <>IMC indefinido</>
                        }                           
                        </C.Right_Side>

                    

                

                
            </C.Area>
        </C.Container>
    );
}

export default App;