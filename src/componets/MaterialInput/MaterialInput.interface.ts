export interface IInputProps{
    type:string
    label:string
    theme:ITheme
}

export interface IThemeStyled{
    theme:ITheme
}

 interface ITheme{
    dark:string
    middle:string
    light:string
}