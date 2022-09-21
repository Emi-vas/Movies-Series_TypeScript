import { useState } from "react";
import { Movie } from "../../assets/interfaces";

const Yourlist = () => {
    const [listFull, setListFull] = useState<Movie[]>([]) //list with movies AND series
    const [listFiltred, setListFiltred] = useState<Movie[]>([]) // list with movies OR series

    return (
        <div>
            <h1>Movies and Series on your list</h1>
        </div>
    );
};

export default Yourlist;