import Section from '../Section'
import {
    GalleryItem,
    GalleryItems,
    ImageAction,
    Modal,
    ModalContent
} from './styles'
import { GalleryMock } from '../../pages/Home'
import imagePlay from '../../assets/images/play.png'
import imageZoom from '../../assets/images/zoom.png'
import ImageClose from '../../assets/images/fechar.png'
import { useState } from 'react'

interface ModalState extends GalleryMock {
    isVisible: boolean
}

type Props = {
    defaultCover: string
    name: string
    items: GalleryMock[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: ''
    })

    const closeModal = () => {
        setModal({
            isVisible: false,
            type: 'image',
            url: ''
        })
    }

    const getMediaCover = (item: GalleryMock) => {
        if (item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GalleryMock) => {
        if (item.type === 'image') return imageZoom
        return imagePlay
    }

    return (
        <>
            <Section title="Galeria" bg="black">
                <GalleryItems>
                    {items.map((media) => (
                        <GalleryItem
                            key={media.url}
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    url: media.url
                                })
                            }}
                        >
                            <img
                                src={getMediaCover(media)}
                                alt="Mídia do jogo"
                            />
                            <ImageAction>
                                <img
                                    src={getMediaIcon(media)}
                                    alt="Clique para maximizar a mídia"
                                />
                            </ImageAction>
                        </GalleryItem>
                    ))}
                </GalleryItems>
            </Section>
            <Modal className={modal.isVisible ? 'visible' : ''}>
                <ModalContent className="container">
                    <header>
                        <h4>{name}</h4>
                        <img
                            src={ImageClose}
                            alt="Fechar"
                            onClick={() => closeModal()}
                        />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} />
                    ) : (
                        <iframe src={modal.url} />
                    )}
                </ModalContent>
                <div
                    className="overlay"
                    onClick={() => {
                        closeModal()
                    }}
                ></div>
            </Modal>
        </>
    )
}

export default Gallery
