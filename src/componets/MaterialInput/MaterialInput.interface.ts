export interface IInputProps{
    type:string
    label:string
    placeholder:string
    name:string
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