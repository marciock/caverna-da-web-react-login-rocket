import styled from "styled-components"
import {IThemeStyled} from './MaterialInput.interface'

export const InputContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-bottom: 1rem;
    width: 100%;

`
export const MaterialLabel=styled.label<IThemeStyled>`
    color:${props=>props.theme.light};
    font-size:0.5rem;
    font-weight: 500;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
   
`

export const MaterialInput=styled.input<IThemeStyled>`
    border: 0;
    border-bottom: 2px solid ${props=>props.theme.middle};
    padding: 0 0 0.3rem 0;
    
    color:${props=>props.theme.light};
    font-size:0.5rem;
    font-weight: 500;
    background-color: transparent;

    :focus{
        outline: none;
    }

::placeholder{
    color: ${props=>props.theme.middle};
    font-size: 0.5rem;
}
`