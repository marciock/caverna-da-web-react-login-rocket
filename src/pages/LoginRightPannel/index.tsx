import React,{useState} from 'react'

import { SingIn } from '../SingIn'
import { SingUp } from '../SignUp'


import * as S from './LoginRightPannel.styled'

import { RoundButton } from '../../componets/RoundButton'
import { theme } from '../../theme'
export const LoginRightPannel=()=>{

    const [clickMenu,setClickMenu] = useState('signin')


    const clickHandler=(event:string)=>{
        setClickMenu(event)
    }


    return(
        <S.PannelContainer>
            <S.HeaderPannel>
              <S.MenuButtonsContainer>
                <div onClick={()=>clickHandler('signin')}>
                    <RoundButton round="left"  theme={clickMenu==='signin'?theme.Colors.green:theme.Colors.gray} >Sign IN</RoundButton>
                </div>
                <div onClick={()=>clickHandler('signup')}>
                     <RoundButton round="right"  theme={clickMenu==='signup'?theme.Colors.green:theme.Colors.gray} >Sign IN</RoundButton>
                </div>
              </S.MenuButtonsContainer>
            </S.HeaderPannel>
            <S.MenuPannelContainer>
                 <S.MenuPannel onClick={()=>clickHandler('signin')} active={clickMenu==='signin'||false}>Sign In</S.MenuPannel>
                      <span>or</span>
                <S.MenuPannel onClick={()=>clickHandler('signup')} active={clickMenu==='signup'||false}>Sign Up</S.MenuPannel>
            </S.MenuPannelContainer>
            <S.BodyPannel>
                  {clickMenu==='signin'?<SingIn />: <SingUp />}
                </S.BodyPannel>
        </S.PannelContainer>
    )
}