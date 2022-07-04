import React from 'react'
import * as S from './Login.styled'


import { LoginLeftPannel } from '../LoginLeftPannel'
import { LoginRightPannel } from '../LoginRightPannel'
export const Login=()=>{
    return (
        <S.LoginContainer>
           
           <S.LoginPannel>
                <S.LeftPannel>
                    <LoginLeftPannel />
                </S.LeftPannel>
                <S.RightPannel>
                    <LoginRightPannel />
                </S.RightPannel>
           </S.LoginPannel>
        </S.LoginContainer>
    )
}