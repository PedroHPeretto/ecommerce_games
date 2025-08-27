import Product from '../Product'
import Game from '../../models/Game'
import { Container, List, Title } from './styles'

export type Props = {
    title: string
    bg: 'gray' | 'black'
    games: Game[]
}

const ProducstList = ({ title, bg, games }: Props) => (
    <Container bg={bg}>
        <div className="container">
            <Title>{title}</Title>
            <List>
                {games.map((game) => (
                    <Product
                        key={game.id}
                        category={game.category}
                        description={game.description}
                        img={game.img}
                        infos={game.infos}
                        system={game.system}
                        title={game.title}
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProducstList
