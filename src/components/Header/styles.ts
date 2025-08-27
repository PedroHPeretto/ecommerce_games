import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
    background-color: ${cores.cinza};
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: ${cores.branco};
        font-weight: bold;

        &:hover {
            background: linear-gradient(90deg, #ff0080, #7928ca);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            transition: 0.5s;
        }
    }

    div {
        display: flex;
        align-items: center;

        #logo {
            display: flex;
        }
    }
`

export const Links = styled.ul`
    display: flex;
    margin-left: 40px;
`
export const LinkItem = styled.li`
    margin-right: 16px;
`

export const LinkCart = styled.a`
    display: flex;
    align-items: center;

    img {
        margin-left: 16px;
    }
`
