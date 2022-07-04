import styled from "styled-components"
import { theme } from "../../theme";

import { IBulletActive } from "./SliderRocket.interface";
export const SliderContainer=styled.div`
    display: flex;
    flex-direction:column;

`

export const TitleContainer=styled.div`
    display: flex;
    flex-direction: column;
   
    padding:10vh 2vw 0 2vw;
    
`
export const Title=styled.h3`
    color: ${theme.Colors.green.light};
    font-size: 1rem;
    font-weight: 400;
    word-wrap: break-word;
    text-align: center; 
 
    width: 100%;
`


export const BulletsContainer=styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
   
    padding-inline-start: 0;
    list-style: none;
    /* width: 50%; */
    li{
        display: inline;
    }

`
const newLocal = `2px 2px 9px 2px ${theme.Colors.red.shadow}`;

export const BulletsItem=styled.div<IBulletActive>`
    background-color:${props=>props.active?'rgba(255, 255, 255, 0.2)':'rgba(255, 255, 255, 0.5)'};

    width: 1vw;
    height: 2vh; 
    border-radius: 50%;
    box-shadow: ${props=>props.active?newLocal: 'none'};
    margin-left:0.5rem;
`

export const ImageContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ImageAnimante=styled.img`
    width: 30vw;
    height: 40vh;
    animation: fadeIn 3s;

    @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
    
`
