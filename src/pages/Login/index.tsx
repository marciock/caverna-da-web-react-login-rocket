import React from 'react'
import * as S from './Login.styled'

import { LoginLeftPannel } from '../../componets/LoginLeftPannel'
export const Login=()=>{
    return (
        <S.LoginContainer>
           
           <S.LoginPannel>
                <S.LeftPannel>
                    <LoginLeftPannel />
                </S.LeftPannel>
                <S.RightPannel></S.RightPannel>
           </S.LoginPannel>
        </S.LoginContainer>
    )
}