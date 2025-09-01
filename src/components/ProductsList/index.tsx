import Product from '../Product'
import { Game } from '../../pages/Home'
import { Container, List, Title } from './styles'

export type Props = {
    title: string
    bg: 'gray' | 'black'
    games: Game[]
}

const ProducstList = ({ title, bg, games }: Props) => {
    const formataPreco = (preco: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(preco)
    }

    const getGameTags = (game: Game) => {
        const tags = []

        if (game.release_date) {
            tags.push(game.release_date)
        }
        if (game.prices.discount) {
            tags.push(`${game.prices.discount}%`)
        }
        if (game.prices.current) {
            tags.push(formataPreco(game.prices.current))
        }

        return tags
    }
    return (
        <Container bg={bg}>
            <div className="container">
                <Title>{title}</Title>
                <List>
                    {games.map((game) => (
                        <li key={game.id}>
                            <Product
                                id={game.id}
                                category={game.details.category}
                                description={game.description}
                                img={game.media.thumbnail}
                                infos={getGameTags(game)}
                                system={game.details.system}
                                title={game.name}
                            />
                        </li>
                    ))}
                </List>
            </div>
        </Container>
    )
}

export default ProducstList
