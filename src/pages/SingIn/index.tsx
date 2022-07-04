
import { MaterialInput } from "../../componets/MaterialInput"
import { RoundButton } from "../../componets/RoundButton"
import * as S from './SingIn.styled'
import { theme } from "../../theme"


export const SingIn=()=>{
    return(
        <S.SingInContainer>
            <form>
                <MaterialInput label="user" theme={theme.Colors.gray} type="text" placeholder="User"/>
                <MaterialInput label="password" theme={theme.Colors.gray} type="password" placeholder="*****"/>
                <RoundButton round="all" theme={theme.Colors.green}>Login</RoundButton>
            </form>
        </S.SingInContainer>
    )
}