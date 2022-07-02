import React from 'react'
// import { ReactComponent as IconPost } from '../../assets/icons/pot.svg'
import  IconPost  from '../../assets/icons/pot.svg'

import * as S from './LoginLeftPannel.styled'


export const LoginLeftPannel=()=>{

    return (
        <S.PannelContainer>
            <S.HeaderContainer>
             <S.ImagePot src={IconPost}  />
             <S.TitleContainer>
               <S.Title>Plan your activities anda control your progress online</S.Title>
             </S.TitleContainer>
            </S.HeaderContainer>
        </S.PannelContainer>
    )

}