import {IInputProps} from './MaterialInput.interface'

import * as S from './MaterialInput.styled'

export const MaterialInput=({type, label,theme,placeholder,name}:IInputProps)=>{

    return(
        <S.InputContainer>
            <S.MaterialLabel theme={theme}>{label}</S.MaterialLabel>
            <S.MaterialInput type={type} theme={theme} placeholder={placeholder} name={name}/>
        </S.InputContainer>
    )
}