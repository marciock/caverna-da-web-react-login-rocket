import styled from 'styled-components' 


import { theme } from '../../theme'


export const LoginContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width:100vw;
    height: 100vh;
    padding-top: 8vh;
    background-color: ${theme.Colors.red.background};
`
export const LoginPannel=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    height: 85vh;
    box-shadow:   20px 20px 30px -5px ${theme.Colors.red.shadow};
    border-radius: 0.4rem;
`
export const LeftPannel=styled.div`
     display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-radius: 0.4rem 0 0 0.4rem;
    background-color: ${theme.Colors.green.background};
`
export const RightPannel=styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    border-radius: 0 0.4rem 0.4rem 0;
    background-image: linear-gradient(${theme.Colors.gray.background1},${theme.Colors.gray.background2})
`
