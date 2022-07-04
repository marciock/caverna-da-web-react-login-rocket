
import { MaterialInput } from "../../componets/MaterialInput"
import { RoundButton } from "../../componets/RoundButton"
import * as S from './SignUp.styled'
import { theme } from "../../theme"


export const SingUp=()=>{
    return(
        <S.SingUpContainer>
            <form>
                SignUp
                <MaterialInput label="user" theme={theme.Colors.gray} type="text" placeholder="User"/>
                <MaterialInput label="password" theme={theme.Colors.gray} type="password" placeholder="*****"/>
                <RoundButton round="all" theme={theme.Colors.green}>Login</RoundButton>
            </form>
        </S.SingUpContainer>
    )
}