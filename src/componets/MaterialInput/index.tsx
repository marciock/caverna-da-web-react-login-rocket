import {IInputProps} from './MaterialInput.interface'

import * as S from './MaterialInput.styled'

export const MaterialInput=({type, label,theme}:IInputProps)=>{

    return(
        <S.InputContainer>
            <S.MaterialLabel theme={theme}>{label}</S.MaterialLabel>
            <S.MaterialInput type={type} theme={theme}/>
        </S.InputContainer>
    )
}