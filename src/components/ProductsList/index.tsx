import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
    title: string
    bg: 'gray' | 'black'
}

const ProducstList = ({ title, bg }: Props) => (
    <Container bg={bg}>
        <div className="container">
            <Title>{title}</Title>
            <List>
                <Product
                    category="Ação"
                    description="teste"
                    img="../../assets/images/diablo.png"
                    infos={['-10%', 'R$ 150']}
                    system="Windows"
                    title="Diablo IV"
                />
                <Product
                    category="Aventura"
                    description="teste"
                    img="../../assets/images/zelda.png"
                    infos={['-30%', 'R$ 120']}
                    system="Switch"
                    title="The Legend of Zelda"
                />
                <Product
                    category="Terror"
                    description="teste"
                    img="../../assets/images/resident.png"
                    infos={['-15%', 'R$ 230']}
                    system="PS5"
                    title="Resident Evil"
                />
                <Product
                    category="Ação"
                    description="teste"
                    img="../../assets/images/star_wars.png"
                    infos={['-20%', 'R$ 85']}
                    system="Xbox"
                    title="Star Wars"
                />
            </List>
        </div>
    </Container>
)

export default ProducstList
