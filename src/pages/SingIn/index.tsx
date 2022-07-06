import React, { ChangeEvent } from "react"


import { MaterialInput } from "../../componets/MaterialInput"
import { RoundButton } from "../../componets/RoundButton"
import * as S from './SingIn.styled'
import { theme } from "../../theme"


export const SingIn=()=>{
const onsubmit=(data:ChangeEvent<HTMLFormElement>)=>{

    console.log('data',data.target.user.value)
    data.preventDefault()
   
}
    return(
        <S.SingInContainer>
            <form onSubmit={onsubmit}>
                <MaterialInput name="user" label="user" theme={theme.Colors.gray} type="text" placeholder="User"/>
                <MaterialInput name="password" label="password" theme={theme.Colors.gray} type="password" placeholder="*****"/>
                <RoundButton type="submit"  round="all" theme={theme.Colors.green}>Login</RoundButton>
            </form>
        </S.SingInContainer>
    )
}