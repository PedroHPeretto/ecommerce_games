import styled from 'styled-components'
import { cores } from '../../styles'

export const GalleryItems = styled.ul`
    display: flex;
`

export const GalleryItem = styled.li`
    margin-right: 16px;
    position: relative;

    > img {
        border: 2px solid ${cores.branco};
        border-radius: 8px;
        height: 150px;
        width: 150px;
        object-fit: cover;
    }
`

export const ImageAction = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
        opacity: 100%;
        transition: opacity 0.5s ease;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    justify-content: center;
    align-items: center;

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
`

export const ModalContent = styled.div`
    max-width: 960px;
    position: relative;
    z-index: 1;

    header {
        display: flex;
        margin-bottom: 24px;
        justify-content: space-between;

        h4 {
            font-weight: bold;
            font-size: 18px;
        }
    }

    > img {
        width: 100%;
    }

    img,
    iframe {
        display: block;
        max-width: 100%;
    }

    iframe {
        width: 100%;
        height: 480px;
    }
`
