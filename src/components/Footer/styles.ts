import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
    background-color: ${cores.cinza};
    padding: 32px 0;
    font-size: 14px;
`

export const FooterTitle = styled.h4`
    color: ${cores.branco};
    font-size: 16px;
    font-weight: bold;
`

export const FooterLinks = styled.ul`
    display: flex;
    margin-top: 16px;
`

export const FooterLink = styled.a`
    color: ${cores.cinzaClaro};
    margin-right: 8px;

    &:hover {
        background: linear-gradient(90deg, #ff0080, #7928ca);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: 0.5s;
    }
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`
