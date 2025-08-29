import Section from '../Section'
import {
    GalleryItem,
    GalleryItems,
    ImageAction,
    Modal,
    ModalContent
} from './styles'
import { GalleryMock } from '../../pages/Home'
import imageGallery from '../../assets/images/gallery_image.png'
import imagePlay from '../../assets/images/play.png'
import imageZoom from '../../assets/images/zoom.png'
import ImageClose from '../../assets/images/fechar.png'
import { useState } from 'react'

const mock: GalleryMock[] = [
    {
        id: 1,
        type: 'image',
        img: imageGallery,
        url: imageGallery
    },
    {
        id: 2,
        type: 'image',
        img: imageGallery,
        url: imageGallery
    },
    {
        id: 3,
        type: 'video',
        img: imageGallery,
        url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=DdfRqIcjY80pKX81'
    },
    {
        id: 4,
        type: 'video',
        img: imageGallery,
        url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=DdfRqIcjY80pKX81'
    }
]

interface ModalState extends GalleryMock {
    isVisible: boolean
}

const Gallery = () => {
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

    const getMediaIcon = (item: GalleryMock) => {
        if (item.type === 'image') return imageZoom
        return imagePlay
    }

    return (
        <>
            <Section title="Galeria" bg="black">
                <GalleryItems>
                    {mock.map((media) => (
                        <GalleryItem
                            key={media.id}
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    img: media.img,
                                    url: media.url
                                })
                            }}
                        >
                            <img src={media.img} alt="Mídia do jogo" />
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
                        <h4>Hogwarts Legacy</h4>
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
