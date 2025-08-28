import { BannerProducts, GamesInfos } from './styles'
import bannerHogwarts from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
    <BannerProducts style={{ backgroundImage: `url(${bannerHogwarts})` }}>
        <div className="container">
            <div>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
            </div>

            <GamesInfos>
                <h2>Hogwarts' Legacy</h2>
                <p>
                    <span>De R$ 290,90</span>
                    Por R$ 190,90
                </p>
                <Button
                    type="button"
                    variant="primary"
                    title="Clique aqui para adicionar este jogo ao carrinho"
                >
                    Adicionar ao carrinho
                </Button>
            </GamesInfos>
        </div>
    </BannerProducts>
)

export default Hero
