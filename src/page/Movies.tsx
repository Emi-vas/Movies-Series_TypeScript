import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { PageMain } from "../styles/Global.style";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const idMovie = searchParams.get('id')

    const [menuSelected, setMenuSelected] = useState("popular")

    return (
        <>
            <Header page={'movies'} />
            <div style={{ display: "flex" }}>
                <Sidebar menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
                <PageMain>
                    <h1>Movies</h1>
                </PageMain>
            </div>
        </>
    );
};

export default Movies;