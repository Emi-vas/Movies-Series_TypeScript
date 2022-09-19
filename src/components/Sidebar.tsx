import { useEffect, useState } from "react";
import { Container, Menu } from "./Sidebar.style";
import { COLORS } from "../assets/constant"

interface Props {
    menuSelected : string,
    setMenuSelected : (val: string) => void
}

const Sidebar = ({ menuSelected, setMenuSelected }: Props) => {

    const [animation, setAnimation] = useState("")

    const listMenu = [
        {titre : "Search", icon: "fa-solid fa-magnifying-glass"},
        {titre : "Popular", icon: "fa-solid fa-bolt"},
        {titre : "Genres", icon: "fa-solid fa-film"},
        {titre : "Your List", icon: "fa-solid fa-heart"},
    ]

    useEffect(() => {
        setAnimation("animMenu 0.3s both")
    }, [menuSelected])

    return (
        <Container>
            {
                listMenu.map((menu) => (
                    <Menu
                        style={{
                            backgroundColor : menuSelected == menu.titre.toLowerCase() ? COLORS.red : "",
                            color: menuSelected == menu.titre.toLowerCase() ? "white" : "",
                            animation:menuSelected == menu.titre.toLowerCase() ? animation : ""
                        }}

                        onClick={() => setMenuSelected(menu.titre.toLowerCase())}
                    >
                        <p>{menu.titre}</p>
                        <i className={menu.icon}></i>
                    </Menu>
                ))
            }
        </Container>
    );
};

export default Sidebar;