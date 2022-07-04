import styled from "styled-components"

import { theme } from "../../theme"
import {IStyledColor} from './LoginRightPannel.interface'

export const PannelContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content:left;
    width: 90%;
    padding: 3vh 0 1vh 2vw;
`
export const HeaderPannel=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    
`
export const BodyPannel=styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10vh;
    padding-left: 2vw;
  `
export const MenuPannel=styled.span<IStyledColor>`
    color: ${props=>props.active? theme.Colors.gray.light: theme.Colors.gray.middle};
    font-size: 1rem;
    font-weight: 500;

    border-bottom: ${props=>props.active? `2px solid ${theme.Colors.green.dark}`:'none'};
    cursor: pointer;
    padding: 0 0.5rem 0.2rem 0.5rem;
`

export const MenuButtonsContainer=styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
`
