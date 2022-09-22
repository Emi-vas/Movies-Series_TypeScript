import { HeaderBloc, Nav } from "./Header.style";
import { Link } from "react-router-dom"
import { COLORS } from "../assets/constant";

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
                        fontSize : page == "movie" ? "2em" : "1.5em",
                        color: page == "movie" ? COLORS.yellow : "",
                     }}
                >Movies</Link>
                <Link 
                    to="/series"
                    style={{ 
                        fontSize : page == "tv" ? "2em" : "1.5em",
                        color: page == "tv" ? COLORS.yellow : "",
                    }}
                >Series</Link>
            </Nav>
        </HeaderBloc>
    );
};

export default Header;