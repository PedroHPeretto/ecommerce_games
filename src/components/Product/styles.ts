import styled from 'styled-components'
import { cores } from '../../styles'
import TagContainer from '../Tag/styles'

export const Card = styled.div`
    background-color: ${cores.cinza};
    border-radius: 8px;
    padding: 8px;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
    }

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: bold;
    display: block:
    margin-top: 16px;
    margin-bottom: 8px;
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`
