import React from 'react'
// import { ReactComponent as IconPost } from '../../assets/icons/pot.svg'
import  IconPost  from '../../assets/icons/pot.svg'
import blank00 from '../../assets/icons/rocket_0_blank.png'
import blank01 from '../../assets/icons/rocket_1_blank.png'
import blank02 from '../../assets/icons/rocket_2_blank.png'
import blank03 from '../../assets/icons/rocket_3_blank.png'


import * as S from './LoginLeftPannel.styled'
import { SliderRocket } from '../../componets/SliderRocket'




export const LoginLeftPannel=()=>{

    const payload:any=[ 
        {
        image:blank00,
        title:'banana'
    },
    {
        image:blank01,
        title:'melao'
    },
    {
        image:blank02,
        title:'melancia'
    },
    {
        image:blank03,
        title:'Maçã'
    }
    
]

    return (
        <S.PannelContainer>
            <S.HeaderContainer>
             <S.ImagePot src={IconPost}  />
            <SliderRocket content={payload}/>
            </S.HeaderContainer>
        </S.PannelContainer>
    )

}