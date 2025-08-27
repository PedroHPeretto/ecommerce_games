import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import ProducstList from './components/ProductsList'

const rotas = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Banner />
                <ProducstList title="Promoções" bg="gray" />
                <ProducstList title="Em breve" bg="black" />
            </>
        )
    }
])

function App() {
    return (
        <>
            <GlobalCss />
            <div className="container">
                <Header />
            </div>
            <RouterProvider router={rotas} />
        </>
    )
}

export default App
