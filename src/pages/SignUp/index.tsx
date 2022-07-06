/* eslint-disable react/react-in-jsx-scope */
import { MaterialInput } from "../../componets/MaterialInput"
import { RoundButton } from "../../componets/RoundButton"
import { MaterialCheckbox } from "../../componets/MaterialCheckbox"
import * as S from "./SignUp.styled"
import { theme } from "../../theme"

export const SingUp = () => (
  <form>
    <S.SingUpContainer>
      <MaterialInput
        name="full_name"
        label="user"
        theme={theme.Colors.gray}
        type="text"
        placeholder="Full name"
      />
      <MaterialInput
        name="password"
        label="password"
        theme={theme.Colors.gray}
        type="password"
        placeholder="*****"
      />
      <MaterialInput
        name="email"
        label="user"
        theme={theme.Colors.gray}
        type="mail"
        placeholder="email"
      />
      <MaterialCheckbox>I agree all statements in</MaterialCheckbox>
      <span>terms</span>
      <S.ButtonsContainer>
        <S.RoundButtonContainer>
          <RoundButton type="submit" round="all" theme={theme.Colors.green}>
            Login
          </RoundButton>
        </S.RoundButtonContainer>
        <S.MemberButton themes={theme.Colors}>
          {"I'm already member"}
        </S.MemberButton>
      </S.ButtonsContainer>
    </S.SingUpContainer>
  </form>
)
