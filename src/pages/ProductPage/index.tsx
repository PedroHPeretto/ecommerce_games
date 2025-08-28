import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

const ProductPage = () => {
    const { id } = useParams()

    return (
        <>
            <Hero />
        </>
    )
}

export default ProductPage
