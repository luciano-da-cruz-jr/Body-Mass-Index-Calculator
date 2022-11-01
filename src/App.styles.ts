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

export const Left_Side = styled.div(({ imc }:  Props ) => (

    `
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto;
    max-width: 410px;
    display: flex;
    flex-direction: column;
    border: 1px solid red;

    img {
        max-height: 30px;
        max-width: 180px;
    }

    h1 {
        margin-top: 30px;
        margin-bottom: 5px;
        font-size: 40px;
        color: #2f414d;
    }

    p {
        margin-bottom: 30px;
        color: #5a849f;
    }

    input {
        margin-top: 15px;
        margin-bottom: 15px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid #5a849f;
        padding-bottom: 10px;
        outline: none;
        opacity: ${imc === 0 ? 'none' : '0.5'};

        ::placeholder{
            color: #5a849f;
        }
    }

    button {
        margin-top: 40px;
        padding: 20px;
        border: 1px solid #227c9d;
        border-radius: 15px;
        background-color: #227c9d;
        font-size: 18px;
        color: white;
        opacity: ${imc === 0 ? 'none' : '0.5'};
        cursor: pointer;
    }
    `
));

export const Right_Side = styled.div`

    max-width: 570px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 50px 0;
    border: 1px solid blue;
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

export const Back = styled.div(({ imc }:  Props ) => (
    `
        background-color: #237b9f;
        display: flex;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
        visibility: ${imc === 0 ? 'hidden' : 'visible'};;
        z-index: 1;
        margin-right: -80px;
        margin-top: 50px;
        

        img {
            width: 35px;
            cursor: pointer;
        }
    `
));

export const middle = styled.div`

        border: 1px solid green;
        width: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
`;


