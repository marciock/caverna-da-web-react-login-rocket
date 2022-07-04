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
        title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        image:blank01,
        title:'Sed ut perspiciatis unde omnis iste natus error '
    },
    {
        image:blank02,
        title:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
    {
        image:blank03,
        title:'Temporibus autem quibusdam et aut officiis debitis'
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