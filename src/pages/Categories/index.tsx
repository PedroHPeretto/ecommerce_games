import { useEffect, useState } from 'react'
import ProducstList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
    const [actionGames, setActionGames] = useState<Game[]>([])
    const [sportsGames, setSportsGames] = useState<Game[]>([])
    const [simulationGames, setSimulationGames] = useState<Game[]>([])
    const [fightingGames, setFightingGames] = useState<Game[]>([])
    const [rpgGames, setRpgGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/eplay/acao')
            .then((res) => res.json())
            .then((res) => setActionGames(res))

        fetch('https://ebac-fake-api.vercel.app/api/eplay/esportes')
            .then((res) => res.json())
            .then((res) => setSportsGames(res))

        fetch('https://ebac-fake-api.vercel.app/api/eplay/simulacao')
            .then((res) => res.json())
            .then((res) => setSimulationGames(res))

        fetch('https://ebac-fake-api.vercel.app/api/eplay/luta')
            .then((res) => res.json())
            .then((res) => setFightingGames(res))

        fetch('https://ebac-fake-api.vercel.app/api/eplay/rpg')
            .then((res) => res.json())
            .then((res) => setRpgGames(res))
    }, [])

    return (
        <>
            <ProducstList games={actionGames} title="Ação" bg="black" />
            <ProducstList games={sportsGames} title="Esportes" bg="gray" />
            <ProducstList
                games={simulationGames}
                title="Simulação"
                bg="black"
            />
            <ProducstList games={fightingGames} title="Luta" bg="gray" />
            <ProducstList games={rpgGames} title="RPG" bg="black" />
        </>
    )
}

export default Categories
