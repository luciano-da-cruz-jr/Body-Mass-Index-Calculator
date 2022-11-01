import styled from "styled-components";

type Props = {
    imc: number;
}

export const Middle_Side = styled.div`

        width: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
`;

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