import * as C from './styles';
import leftarrow from '../../assets/leftarrow.png';
 
type Props = {
    imc: number;
    onClick: () => void;
}

export const Middle_Side = ({ imc, onClick }: Props) =>{
    return (
        <C.Middle_Side>
            <C.Back imc={imc}>
                <img onClick={onClick} src={leftarrow} alt='leftarrow'/>
            </C.Back>
        </C.Middle_Side>
    );
}
