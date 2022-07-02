import React from 'react'
import * as S from './RoundButton.styled'
import {IThemeColor} from './RoundButton.interface'

type props={
    children:string,
    round:'left' | 'right' | 'all',
    theme:IThemeColor
}
export const RoundButton=({children,round,theme}:props)=>{

    return(
        <S.ButtonContainer>
            <S.ButtonFourConners round={round} theme={theme}>{children} </S.ButtonFourConners>
        </S.ButtonContainer>
    )
}

