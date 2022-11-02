import { StatusName } from '../../types';
import * as C from './styles';
import { Status } from '../Status';

type Props = {
    imc: number;
    statusName: StatusName[];
    outCome: StatusName[];
}

export const Right_Side = ({ imc, statusName, outCome }: Props) => {
    return (

        <C.Container>
            { imc === 0 ?
                statusName.map((statusName, index) => (
                    <Status statusName={statusName} index={index} imc={imc}/>
                ))
                    
                    : imc >= 0 && imc < 18.5 ? 
                        outCome.map((outCome, index) => (
                        <Status statusName={outCome} index={index} imc={imc}/>
                    ))    

                        : imc >= 18.5 && imc < 24.9 ? 
                            outCome.map((outCome, index) => (
                            <Status statusName={outCome} index={index} imc={imc}/>
                        ))   

                            : imc >= 24.9 && imc < 30.0 ? 
                                outCome.map((outCome, index) => (
                                <Status statusName={outCome} index={index} imc={imc}/>
                            )) 

                                : imc >= 30 && imc < 99 ? 
                                    outCome.map((outCome, index) => (
                                    <Status statusName={outCome} index={index} imc={imc}/>
                                ))  
                                                    
                                    : <>
                                        IMC indefinido, por favor, confira os dados informados 
                                        e tente novamente!
                                        Lembrando que os dados precisam ser númericos!
                                    </>
            }                           
        </C.Container>
    );
}