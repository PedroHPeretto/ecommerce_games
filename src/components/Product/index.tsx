import Tag from '../Tag'
import { Card, Title, Description, Infos } from './styles'

type Props = {
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    img: string
}

const Product = ({
    title,
    category,
    system,
    description,
    infos,
    img
}: Props) => {
    const getDescription = (description: string) => {
        if (description.length > 128) {
            return description.slice(0, 112) + '...'
        }

        return description
    }
    return (
        <Card>
            <img src={img} alt={title} />
            <Infos>
                {infos.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </Infos>
            <Title>{title}</Title>
            <Tag>{category}</Tag>
            <Tag>{system}</Tag>
            <Description>{getDescription(description)}</Description>
        </Card>
    )
}

export default Product
