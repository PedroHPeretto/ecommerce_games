import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
    background-color: transparent;
    border: 2px solid ${cores.branco};
    color: ${cores.branco};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
`

export const ButtonLink = styled(Link)`
    background-color: transparent;
    border: 2px solid ${cores.branco};
    color: ${cores.branco};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;

    &:hover {
        background: linear-gradient(90deg, #ff0080, #7928ca);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: 0.5s;
    }
`
