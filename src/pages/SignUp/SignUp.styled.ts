import styled from "styled-components";
import { IPropsTheme } from "./SingUp.interface"

export const SingUpContainer=styled.div`
    display: flex;
    flex-direction:column;
    justify-content: left;
    width: 30vw;

`
export const ButtonsContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`
export const RoundButtonContainer=styled.div`
    width: 12vw;
    
`
export const MemberButton=styled.span<IPropsTheme>`

        border-bottom: 1px solid ${props=>props.themes.green.dark};
        font-size: 0.8rem;
        color:${props=>props.themes.gray.middle};
        cursor: pointer;

        :hover{
            color:${props=>props.themes.green.middle};
            border-bottom: 1px solid ${props=>props.themes.gray.light};
        }
        :active{
            color:${props=>props.themes.gray.middle};
            border-bottom: 1px solid ${props=>props.themes.green.light};
        }

`