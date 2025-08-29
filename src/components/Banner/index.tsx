import { Image, Precos, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'

const Banner = () => {
    const [game, setGame] = useState<Game>()

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
            .then((res) => res.json())
            .then((res) => setGame(res))
    }, [])

    return (
        <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
            <div className="container">
                <Tag size="big">Destaque do dia</Tag>
                <div>
                    <Titulo>{game?.name}</Titulo>
                    <Precos>
                        De <span>R$ {game?.prices.old}</span> <br />
                        por apenas R$ {game?.prices.current}
                    </Precos>
                </div>
                <Button
                    type="link"
                    to="/produto"
                    title="Clique aqui para aproveitar esta promoção"
                >
                    Aproveitar
                </Button>
            </div>
        </Image>
    )
}

export default Banner
