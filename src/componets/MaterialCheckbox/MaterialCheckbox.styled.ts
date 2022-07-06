import styled from "styled-components"

import { IPropsTheme } from "./MaterialCheckbox.interface"

export const CheckboxContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
`
export const LableCheck=styled.label<IPropsTheme>`
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 100%;
    font-size: 0.6rem;
    padding: 0.1rem 0 0 0.5rem;
    color:${props=>props.theme.middle};
`
export const CheckBox=styled.input<IPropsTheme>`
    all:unset;
    background-color: transparent;
    border: 1px solid ${props=>props.theme.light};
    width: 0.2rem;
    height: 0.2rem;
    padding: 0.2rem;
    
        :checked{
             background-color: ${props=>props.theme.dark};
    
    }
   
    
`
