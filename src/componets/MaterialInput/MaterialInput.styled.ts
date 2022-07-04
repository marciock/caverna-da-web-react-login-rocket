import styled from "styled-components"
import {IThemeStyled} from './MaterialInput.interface'

export const InputContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;

`
export const MaterialLabel=styled.label<IThemeStyled>`
    color:${props=>props.theme.light};
    font-size:1.2rem;
    font-weight: 500;
    text-transform: uppercase;

    ::placeholder{
        color: ${props=>props.theme.middle};
    }
`

export const MaterialInput=styled.input<IThemeStyled>`
    border: 0;
    border-bottom: 2px solid ${props=>props.theme.middle};
    padding: 0 0 0.5rem 0;
    
    color:${props=>props.theme.light};
    font-size:1.2rem;
    font-weight: 500;
`