import styled from 'styled-components'

import { IButtonStyledProps } from './RoundButton.interface'

const borderOptions={
    left:'10rem 0  0 10rem',
    right:'0 10rem 10rem 0',
    all:'10rem',
}

export const ButtonContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`
export const ButtonFourConners=styled.button<IButtonStyledProps>`
    border:0;
    background-image: linear-gradient(${props=>props.theme.middle},${props=>props.theme.dark});
    color:${props=>props.theme.light};
    border-radius: ${props=>borderOptions[props.round]};
    font-size: 0.75rem;
    font-weight: 300;
    cursor: pointer;
    box-shadow: 1px 1px 5px ${props=>props.theme.shadow};
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;

    :hover{
        background-image: linear-gradient(${props=>props.theme.dark},${props=>props.theme.middle});
    }

    :active{
        box-shadow: -1px 1px 5px ${props=>props.theme.shadow};
        background-color: ${props=>props.theme.middle};
        color:${props=>props.theme.dark};
    } 
`
