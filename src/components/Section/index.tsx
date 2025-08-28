import { ReactNode } from 'react'
import { Container, Title } from './styles'

export type Props = {
    title: string
    bg: 'black' | 'gray'
    children: ReactNode
}

const Section = ({ title, bg, children }: Props) => (
    <Container bg={bg}>
        <div className="container">
            <Title>{title}</Title>
            {children}
        </div>
    </Container>
)
export default Section
