import { BannerProducts, GamesInfos } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'

type Props = {
    game: Game
}

const Hero = ({ game }: Props) => (
    <BannerProducts style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
            <div>
                <Tag>{game.details.category}</Tag>
                <Tag>{game.details.system}</Tag>
            </div>

            <GamesInfos>
                <h2>{game.name}</h2>
                <p>
                    {game.prices.discount && (
                        <span>De R$ {game.prices.old}</span>
                    )}
                    {game.prices.current && <>Por R$ {game.prices.current}</>}
                </p>
                {game.prices.current ? (
                    <Button
                        type="button"
                        variant="primary"
                        title="Clique aqui para adicionar este jogo ao carrinho"
                    >
                        Adicionar ao carrinho
                    </Button>
                ) : (
                    <Button type="button" variant="primary" title="Em breve">
                        Em breve
                    </Button>
                )}
            </GamesInfos>
        </div>
    </BannerProducts>
)

export default Hero
