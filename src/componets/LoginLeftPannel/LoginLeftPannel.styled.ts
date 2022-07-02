import styled from "styled-components";
import { theme } from "../../theme";

export const PannelContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vh 2vw 2vh 2vw;
  
`
export const HeaderContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
`
export const TitleContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const ImagePot=styled.img`
    width: 2vw;
`