import { useState } from "react";
import { useSearchParams } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { PageContainer, PageMain } from "../styles/Global.style";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const idMovie = searchParams.get('id')

    const [menuSelected, setMenuSelected] = useState("popular")

    return (
        <>
            <Header page={'movies'} />
           <PageContainer>
                <Sidebar menuSelected={menuSelected} setMenuSelected={setMenuSelected}/>
                <PageMain>
                    <h1>Movies</h1>
                </PageMain>
            </PageContainer>
        </>
    );
};

export default Movies;