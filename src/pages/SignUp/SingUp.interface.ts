export interface IPropsTheme{
    themes:IThemes
}


 interface IThemes{

    green:IThemeAttributes
    gray:IThemeAttributes
}


interface IThemeAttributes{
    dark:string
    middle:string
    light:string
}

