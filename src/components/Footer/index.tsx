import {
    FooterContainer,
    FooterTitle,
    FooterSection,
    FooterLinks,
    FooterLink
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
    <FooterContainer>
        <div className="container">
            <FooterSection>
                <FooterTitle>Categorias</FooterTitle>
                <FooterLinks>
                    <li>
                        <FooterLink href="#">RPG</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Ação</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Aventura</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Esportes</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Simulação</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Estratégia</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">FPS</FooterLink>
                    </li>
                </FooterLinks>
            </FooterSection>
            <FooterSection>
                <FooterTitle>Acesso Rápido</FooterTitle>
                <FooterLinks>
                    <li>
                        <FooterLink href="#">Novidades</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Promoções</FooterLink>
                    </li>
                    <li>
                        <FooterLink href="#">Em breve</FooterLink>
                    </li>
                </FooterLinks>
            </FooterSection>
            <p>{currentYear} - &copy; E-Play, Todos os direitos reservados</p>
        </div>
    </FooterContainer>
)

export default Footer
