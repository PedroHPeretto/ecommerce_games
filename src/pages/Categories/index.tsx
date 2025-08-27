import ProducstList from '../../components/ProductsList'
import Game from '../../models/Game'
import residentEvil from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter from '../../assets/images/street_fighter.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa_23.png'
import theWitcher from '../../assets/images/The_Witcher_3.jpg'
import doom from '../../assets/images/DOOM_The_Dark_Ages.jpeg'

const promocoes: Game[] = [
    {
        id: 1,
        category: 'Terror',
        description:
            'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the sur...',
        title: 'Resident Evil 4 Remake',
        system: 'Windows',
        infos: ['10%', 'R$ 220,00'],
        img: residentEvil
    },
    {
        id: 2,
        category: 'Aventura',
        description:
            'Explore as vastas terras e os céus de Hyrule. Uma aventura épica pela terra e pelos céus de Hyrule...',
        title: 'The Legend of Zelda: Tears of The Kingdom',
        system: 'Switch',
        infos: ['15%', 'R$ 195,50'],
        img: zelda
    },
    {
        id: 3,
        category: 'Luta',
        description:
            'Here comes Capcom’s newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next...',
        title: 'Street Fighter VI',
        system: 'PS5',
        infos: ['40%', 'R$ 160,00'],
        img: streetFighter
    },
    {
        id: 4,
        category: 'RPG',
        description:
            'You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will...',
        title: 'The Witcher: Wild Hunt',
        system: 'Xbox One',
        infos: ['85%', 'R$ 33,00'],
        img: theWitcher
    }
]

const emBreve: Game[] = [
    {
        id: 5,
        category: 'Ação',
        description:
            'The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game, placed i...',
        title: 'Star Wars Jedi Survivor',
        system: 'Xbox Series S',
        infos: ['11/24'],
        img: starWars
    },
    {
        id: 6,
        category: 'Ação',
        description:
            'Join the fight for Sanctuary in Diablo® IV, the ultimate action RPG adventure. Experience the critically acclaimed campaign and new se...',
        title: 'Diablo IV',
        system: 'Windows',
        infos: ['01/25'],
        img: diablo
    },
    {
        id: 7,
        category: 'Esportes',
        description:
            'Experience the pinnacle of women’s international football in EA SPORTS™ FIFA 23 with the FIFA Women’s World Cup Australia an...',
        title: 'Fifa 23',
        system: 'PS4',
        infos: ['02/25'],
        img: fifa
    },
    {
        id: 8,
        category: 'FPS',
        description:
            'DOOM: The Dark Ages is the prequel to the critically acclaimed DOOM (2016) and DOOM Eternal that tells an epic cinematic story...',
        title: 'DOOM The Dark Ages',
        system: 'WIndows',
        infos: ['05/25'],
        img: doom
    }
]

const Categories = () => (
    <>
        <ProducstList games={promocoes} title="RPG" bg="gray" />
        <ProducstList games={emBreve} title="Esportes" bg="black" />
        <ProducstList games={promocoes} title="Exclusivos" bg="gray" />
        <ProducstList games={emBreve} title="FPS" bg="black" />
    </>
)

export default Categories
