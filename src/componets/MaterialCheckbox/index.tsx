import React from "react"

import { props } from "./MaterialCheckbox.interface"
import * as S from "./MaterialCheckbox.styled"
import { theme } from "../../theme"

export const MaterialCheckbox = ({ children }: props) => {
  return (
    <S.CheckboxContainer>
      <S.CheckBox type="checkbox" theme={theme.Colors.green} />
      <S.LableCheck theme={theme.Colors.gray}>{children}</S.LableCheck>
    </S.CheckboxContainer>
  )
}
