import { StatusName } from '../../types';
import * as C from './styles';
import down from '../../assets/down.png';
import up from '../../assets/up.png';

type Props = {
    index: number;
    statusName: StatusName;
    imc: number;

}

export const Status = ({ index, statusName, imc }: Props) => {
    return (
        <C.Status index={index} color={statusName.color} second_color={statusName.second_color} imc={imc}>
            <div>
                <img src={statusName.good_health ? up : down} alt={statusName.name}/>
            </div>
            <label>{statusName.name}</label>
            {imc !== 0 ? <h3>Seu IMC é de {imc} kg/m2</h3> : <></>}
            <p>{statusName.criterio}</p>
        </C.Status>
    );
} 