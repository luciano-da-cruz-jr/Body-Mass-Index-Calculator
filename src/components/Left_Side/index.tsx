import { ChangeEvent } from 'react';
import * as C from './styles';
import powered from '../../assets/powered.png';

type Props = {
    imc: number;
    height: string;
    weight: string;
    onChange_Height: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange_Weight: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

export const Left_Side = ({ imc, height, weight, onChange_Height, onChange_Weight, onClick }: Props) => {
    return (

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
                        onChange={onChange_Height}
                        disabled={imc===0 ? false : true}
                    />
                    <input 
                        type="text"
                        placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                        value={weight}
                        onChange={onChange_Weight}
                        disabled={imc===0 ? false : true}
                        
                    />
                    <button 
                        onClick={onClick}
                        disabled={imc===0 ? false : true}
                    >Calcular</button>

                </C.Left_Side>

    );
}