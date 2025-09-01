import Banner from '../../components/Banner'
import ProducstList from '../../components/ProductsList'
import { useEffect, useState } from 'react'

export interface GalleryMock {
    type: 'image' | 'video'
    url: string
}

export type Game = {
    id: number
    name: string
    description: string
    release_date?: string
    prices: {
        discount?: number
        old?: number
        current?: number
    }
    details: {
        category: string
        system: string
        developer: string
        publisher: string
        languages: string[]
    }
    media: {
        thumbnail: string
        cover: string
        gallery: GalleryMock[]
    }
}

const Home = () => {
    const [promocoes, setPromocoes] = useState<Game[]>([])
    const [emBreve, setEmBreve] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/eplay/promocoes')
            .then((res) => res.json())
            .then((res) => setPromocoes(res))

        fetch('https://ebac-fake-api.vercel.app/api/eplay/em-breve')
            .then((res) => res.json())
            .then((res) => setEmBreve(res))
    }, [])

    return (
        <>
            <Banner />
            <ProducstList games={promocoes} title="Promoções" bg="gray" />
            <ProducstList games={emBreve} title="Em breve" bg="black" />
        </>
    )
}

export default Home
