import { useSearchParams } from "react-router-dom"
import Header from "../components/Header"

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const idMovie = searchParams.get('id')

    return (
        <div>
            <Header page={'movies'} />
            <h1>Movies</h1>
        </div>
    );
};

export default Movies;