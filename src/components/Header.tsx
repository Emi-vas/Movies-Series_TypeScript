import { HeaderBloc, Nav } from "./Header.style";
import { Link } from "react-router-dom"

interface Props {
    page : string
}

const Header = ({ page }: Props) => {
    return (
        <HeaderBloc>
            <img src="/assets/img/logo.png" alt="logo" />
            <Nav>
                <Link 
                    to='/movies'
                    style={{ 
                        fontSize : page == "movies" ? "2.3em" : "1.5em"
                     }}
                >Movies</Link>
                <Link 
                    to="/series"
                    style={{ 
                        fontSize : page == "series" ? "2.3em" : "1.5em"
                    }}
                >Series</Link>
            </Nav>
        </HeaderBloc>
    );
};

export default Header;