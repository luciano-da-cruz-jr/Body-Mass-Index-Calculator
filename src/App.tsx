import { ChangeEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import { StatusName } from './types';
import { Left_Side } from './components/Left_Side';
import { Middle_Side } from './components/Middle_Side';
import { Right_Side } from './components/Right_Side';


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

        let newWeight = parseFloat(weight);
        let newheight = parseFloat(height);
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

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setHeight(e.target.value)
    }

    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setWeight(e.target.value)
    }

    return (
        <C.Container>
            <C.Area>

                <Left_Side 
                    imc={imc} 
                    height={height} 
                    weight={weight} 
                    onChange_Height={handleHeightChange} 
                    onChange_Weight={handleWeightChange} 
                    onClick={handleImcCalc}
                />

                <Middle_Side 
                    imc={imc} 
                    onClick={handleInitial}
                />
                        
                <Right_Side imc={imc} statusName={statusName} outCome={outCome}/>
                
            </C.Area>
        </C.Container>
    );
}

export default App;