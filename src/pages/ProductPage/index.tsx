import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const ProductPage = () => {
    const { id } = useParams()

    const [game, setGame] = useState<Game>()

    useEffect(() => {
        fetch(`https://ebac-fake-api.vercel.app/api/eplay/jogos/${id}`)
            .then((res) => res.json())
            .then((res) => setGame(res))
    }, [id])

    if (!game) {
        return <h3>Carregando...</h3>
    }

    return (
        <>
            <Hero game={game} />
            <Section bg="black" title="Sobre o jogo">
                <p>{game?.description}</p>
            </Section>
            <Section bg="gray" title="Mais detalhes">
                <p>
                    <b>Plataforma:</b> {game?.details.system} <br />
                    <b>Desenvolvedor:</b> {game?.details.developer} <br />
                    <b>Editora:</b> {game?.details.publisher} <br />
                    <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas,
                    incluindo {game?.details.languages.join(', ')}
                    <br />
                </p>
            </Section>
            <Gallery
                name={game.name}
                defaultCover={game.media.cover}
                items={game.media.gallery}
            />
        </>
    )
}

export default ProductPage
