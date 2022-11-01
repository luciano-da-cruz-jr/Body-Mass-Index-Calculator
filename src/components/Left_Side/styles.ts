import styled from "styled-components";

type Props = {
    imc: number;
}

export const Left_Side = styled.div(({ imc }:  Props ) => (

    `
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto;
    max-width: 410px;
    display: flex;
    flex-direction: column;
    
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
