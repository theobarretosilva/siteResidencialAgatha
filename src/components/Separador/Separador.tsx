import { SeparadorStyled } from "./Separador.styles"

export const Separador = ({...props}) => {
    const { innerWidth: width } = window;
    return <SeparadorStyled 
                {...props}
                src={width > 450 ? 'https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/e1fdfd6312ad0e69e6e8dea1bad428d41bd6fa61/src/assets/svg/separador.svg' : 'https://raw.githubusercontent.com/theobarretosilva/siteResidencialAgatha/d88119600e6ab715fc3ffa7f2f55663cb82186ea/src/assets/svg/separador_mini.svg'} />
}