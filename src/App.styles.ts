import styled from "styled-components";

type Props = {
    index?: number;
    color?: string;
    second_color?: string;
    imc?: number;
}

export const Container = styled.div``;

export const Area = styled.div`
    
    max-width: 980px;
    margin: auto;
    display: flex;
    flex-direction: row;
`;


export const Right_Side = styled.div`

    max-width: 570px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 50px 0;
    height: 350px;
    display: flex;
    flex: 1;
    flex-wrap: wrap; 
`;



export const Status = styled.div(({ color, second_color, imc }:  Props ) => (
    `
        margin: 10px;
        width: ${imc === 0 ? '180px' : '380px'};
        height: ${imc === 0 ? '180px' : '380px'};
        border: 1px solid ${color};
        border-radius: 10px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: ${imc === 0 ? 'none' : 'column'};
        align-items: center;
        background-color: ${color};
        color: white;

        div {
            margin: 12px;
            height: 70px;
            width: 70px;
            border-radius: 40px;
            align-items: center;
            justify-content: center;
            display: flex;

            background: ${second_color};
        }

        img {
            height: 30px;
            width: 30px;
        }
        
        label {
            margin: 0px;
            font-size: 25px;
            font-weight: bold;
        }

        p {
            font-size: 12px;
        }
    `
));






