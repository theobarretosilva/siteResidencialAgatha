import * as S from './DivMargem.styles'

type DivMargemTypes = {
    children: JSX.Element | JSX.Element[]
}

export const DivMargem = ({children}: DivMargemTypes) => {
    return <S.DivMargem>{children}</S.DivMargem>
}